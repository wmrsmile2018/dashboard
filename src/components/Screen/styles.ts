import styled from "styled-components";

const Screen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${({theme}) => theme.colors.bgLevel1};
  overflow: hidden;
`


const EmptyPlaceFooter = styled.div`
  height: 116px;
  width: 100%;
`

export const Styled = {
    Screen,
    EmptyPlaceFooter
}
