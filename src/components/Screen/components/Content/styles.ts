import styled from 'styled-components';
import { adaptTo } from 'theme/utils/adaptTo';

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgLevel1};
  overflow: scroll;
  padding-left: 24px;
  z-index: 1;
`;

const AdaptedContent = styled.div`
  width: 100%;
  height: 100%;

  ${adaptTo('desktop')} {
    max-width: 1068px;
  }
`;

export const Styled = {
  Content,
  AdaptedContent,
};
