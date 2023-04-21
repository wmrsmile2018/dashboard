import { FC } from 'react';
import { SideBar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';

import { Styled } from './styles';
import { Parent } from 'common/types/parent';

export const Screen: FC<Parent> = ({ children }) => {
  return (
    <Styled.Screen>
      <SideBar />
      <Content>
        {children}
        <Styled.EmptyPlaceFooter />
      </Content>
    </Styled.Screen>
  );
};
