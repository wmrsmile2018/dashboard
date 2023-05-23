import {
  ApartmentOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Input, Menu, MenuProps, Popover } from 'antd';
import { useTheme } from 'styled-components';
import { Styled } from './styles';
import { FC } from 'react';

const { Search } = Input;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem(
      'Item 1',
      null,
      null,
      [getItem('Option 1', '1'), getItem('Option 2', '2')],
      'group'
    ),
    getItem(
      'Item 2',
      null,
      null,
      [getItem('Option 3', '3'), getItem('Option 4', '4')],
      'group'
    ),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ]),

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

type HeaderViewProps = {};

export const HeaderView: FC<HeaderViewProps> = () => {
  const theme = useTheme();
  return (
    <Styled.Header>
      <Styled.SearchWrapper>
        <Search
          placeholder='input search text'
          allowClear
          // enterButton='Search'
          size='large'
          onSearch={() => {}}
          style={{
            background: theme.colors.bgLevel2,
            color: theme.colors.text,
          }}
          // style={{ width: 200 }}
        />
      </Styled.SearchWrapper>
      <Styled.Chips>
        <Popover
          placement='topLeft'
          title={'Фильтры'}
          content={
            <Menu
              onClick={onClick}
              style={{ width: 256 }}
              mode='vertical'
              items={items}
            />
          }
          trigger='click'
        >
          <Button
            style={{
              background: `${theme.colors.bgLevel1}`,
              // border: `1px solid ${theme.colors.bgLevel1}`,
              color: theme.colors.text,
            }}
            size={'large'}
            icon={<ApartmentOutlined />}
          >
            Фильтры
          </Button>
        </Popover>
        <Styled.Tag>Tag 1</Styled.Tag>
        <Styled.Tag>Tag 1</Styled.Tag>
        <Styled.Tag>Tag 1</Styled.Tag>
      </Styled.Chips>
    </Styled.Header>
  );
};
