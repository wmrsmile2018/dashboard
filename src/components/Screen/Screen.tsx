import { FC, useCallback, useState } from 'react';
import { SideBar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';
import { Styled } from './styles';
import { Parent } from '../../common/types/parent';
import { Button } from 'antd';
import { MenuOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { useTheme } from 'styled-components';
import { CardType } from '../Board/Board';
import { useDrawerContext } from './components/Content/hooks/useDrawer';
import { ProfileCard } from '../ProfileCard/ProfileCard';

const profile: CardType = {
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
  name: 'Fedorov I.',
  title: 'Fedorov I.',
  phone: '8(977) 165-15-20',
  telegramName: 'wmrsmile',
  instagramName: 'wmrsmile',
  whatsAppPhone: '89773881686',
  category: 'IT разработчик',
  website: 'https://github.com/wmrsmile2018',
  images: [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ],
  description:
    'Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, ',
};

enum CONTENT {
  sideBar = 'sideBar',
  content = 'content',
}

export const Screen: FC<Parent> = ({ children }) => {
  const [content, setContent] = useState(CONTENT.content);
  const theme = useTheme();
  const { setDrawerContent, openDrawer } = useDrawerContext();

  const openProfile = useCallback(() => {
    setDrawerContent(<ProfileCard card={profile} />);
    openDrawer();
  }, [openDrawer, setDrawerContent]);

  return (
    <Styled.Screen id='screen'>
      <Styled.Body>
        <SideBar sideBarVisible={content === CONTENT.sideBar} />
        <Content contentVisible={content === CONTENT.content}>
          <Styled.Container>
            {children}
            <Styled.Advertisings>
              <Styled.Advertising></Styled.Advertising>
            </Styled.Advertisings>
          </Styled.Container>
          <Styled.EmptyPlaceFooter />
        </Content>
      </Styled.Body>
      <Styled.Footer>
        <Button
          style={{
            background: `${theme.colors.bgLevel1}`,
            // border: `1px solid ${theme.colors.bgLevel1}`,
            color: theme.colors.text,
          }}
          onClick={() => setContent(CONTENT.sideBar)}
          size={'small'}
          icon={<MenuOutlined />}
        />
        <Button
          style={{
            background: `${theme.colors.bgLevel1}`,
            // border: `1px solid ${theme.colors.bgLevel1}`,
            color: theme.colors.text,
          }}
          onClick={() => setContent(CONTENT.content)}
          size={'small'}
          icon={<TeamOutlined />}
        />

        <Button
          style={{
            background: `${theme.colors.bgLevel1}`,
            // border: `1px solid ${theme.colors.bgLevel1}`,
            color: theme.colors.text,
          }}
          onClick={() => {
            openProfile();
          }}
          size={'small'}
          icon={<SettingOutlined />}
        />
      </Styled.Footer>
    </Styled.Screen>
  );
};
