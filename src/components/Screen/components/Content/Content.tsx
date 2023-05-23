import { FC } from 'react';
import { Styled } from './styles';
import { Parent } from '../../../../common/types/parent';
import { ContentContext } from './ContentContext';
import { useDrawerContext } from './hooks/useDrawer';
import { Header } from '../Header/Header';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useTheme } from 'styled-components';

export type ContentProps = Parent & { contentVisible: boolean };

export const Content: FC<ContentProps> = ({ children, contentVisible }) => {
  const { drawerVisible, closeDrawer, node } = useDrawerContext();

  const theme = useTheme();

  return (
    <ContentContext.Provider value={{}}>
      <Styled.Content contentVisible={contentVisible}>
        <Header />
        <Styled.AdaptedContent>{children}</Styled.AdaptedContent>
        <Drawer
          open={drawerVisible}
          style={{
            background: theme.colors.bgLevel1,
            color: theme.colors.text,
          }}
          headerStyle={{
            borderBottomColor: theme.colors.text,
          }}
          rootStyle={{ color: theme.colors.text }}
          onClose={closeDrawer}
          closeIcon={
            <CloseOutlined
              style={{
                fontSize: '20px',
                color: theme.colors.text,
              }}
            />
          }
        >
          {node}
        </Drawer>
      </Styled.Content>
    </ContentContext.Provider>
  );
};
