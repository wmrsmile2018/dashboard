import { FC } from 'react';
import { Styled } from './styles';
import { useTheme } from 'styled-components';

export const SideBarView: FC = () => {
  const theme = useTheme();
  return <Styled.SideBar></Styled.SideBar>;
};
