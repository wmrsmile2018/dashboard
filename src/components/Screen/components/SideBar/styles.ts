import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { adaptTo } from '../../../../theme/utils/adaptTo';

const SideBar = styled.div<{ sideBarVisible: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 268px;
  min-width: 268px;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgLevel0};
  border-right: ${({ theme }) => theme.colors.bgLevel2} 1px solid;
  gap: 20px;

  ${adaptTo('mobile')} {
    width: 100%;
    min-width: auto;
  }

  /* display: ${({ sideBarVisible }) => (sideBarVisible ? 'block' : 'none')}; */

  ${({ sideBarVisible }) => {
    return (
      !sideBarVisible &&
      css`
        ${adaptTo('mobile')} {
          display: none;
        }
      `
    );
  }}
`;

const Profile = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  min-height: 90px;
  height: 90px;
`;

const Name = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textEmphasis};
`;

const Navigations = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navigation = styled(Button)`
  display: flex;
  font-size: 20px !important;
  height: 52px !important;
  border-radius: 0;
  align-items: center;
  padding-left: 20px !important;
  color: ${({ theme }) => theme.colors.textEmphasis};
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.textEmphasis};
`;

const Contact = styled(Button)`
  display: flex;
  font-size: 16px;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.textEmphasis}!important;
  }
`;

const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 12px;
`;

const Avatar = styled.div`
  position: relative;
  cursor: pointer;
`;

const Logo = styled.img`
  position: absolute;
  height: 90px;
  top: -15px;
  left: -15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Styled = {
  SideBar,
  Profile,
  Name,
  Contacts,
  Title,
  Navigations,
  Navigation,
  Contact,
  ScrollContent,
  Avatar,
  Logo,
  ButtonWrapper,
};
