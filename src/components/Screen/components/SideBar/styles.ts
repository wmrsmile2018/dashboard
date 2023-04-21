import styled from 'styled-components';

const SideBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 268px;
  min-width: 268px;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgLevel0};
  padding: 24px;
`;

export const Styled = {
  SideBar,
};
