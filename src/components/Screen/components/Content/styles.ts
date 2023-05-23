import styled, { css } from 'styled-components';
import { adaptTo } from '../../../../theme/utils/adaptTo';

const Content = styled.div<{ contentVisible: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgLevel0};
  overflow: scroll;
  z-index: 1;
  gap: 20px;

  ${({ contentVisible }) => {
    return (
      !contentVisible &&
      css`
        ${adaptTo('mobile')} {
          display: none;
        }
      `
    );
  }}
`;

const AdaptedContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  /* 
  ${adaptTo('desktop')} {
    max-width: 1068px;
  } */
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Styled = {
  Content,
  AdaptedContent,
  Title,
};
