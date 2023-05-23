import styled from 'styled-components';
import { adaptTo } from '../../theme/utils/adaptTo';

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgLevel1};
`;

const EmptyPlaceFooter = styled.div`
  min-height: 116px;
  height: 1px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
`;

const Advertisings = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Advertising = styled.div``;

const Body = styled.div`
  display: flex;
  overflow: hidden;
`;

const Footer = styled.div`
  display: none;
  justify-content: space-around;
  height: 1px;
  min-height: 50px;
  align-items: center;

  ${adaptTo('mobile')} {
    display: flex;
  }
`;

export const Styled = {
  Screen,
  EmptyPlaceFooter,
  Advertising,
  Advertisings,
  Container,
  Body,
  Footer,
};
