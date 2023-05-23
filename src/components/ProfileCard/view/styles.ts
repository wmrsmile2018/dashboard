import styled from 'styled-components';
import { IconUI } from '../../Icon';
import { Button } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  font-size: 18px;
  gap: 32px;
  color: ${({ theme }) => theme.colors.text};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  & > p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textEmphasis};
  font-weight: bold;
  margin-bottom: 8px;
`;

const Link = styled.div`
  margin-top: 2px;
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Icon = styled(IconUI)`
  height: 40px;
  width: 40px;
`;

const Images = styled.div`
  display: flex;
  gap: 4px;
`;

const Category = styled.p``;
const Phone = styled.p``;
const Website = styled.p``;

const Avatar = styled.div`
  position: relative;
  margin-top: 20px;
`;
const Logo = styled.img`
  position: absolute;
  height: 140px;
  top: -20px;
  left: -20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ActionIcon = styled(IconUI)`
  width: 20px;
  cursor: pointer;
`;

const MenuGroup = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled(Button)`
  background: ${() => 'none'};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
`;

const Settings = styled.div`
  display: flex;
  gap: 8px;
`;

export const Styled = {
  Container,
  Header,
  Content,
  Description,
  Profile,
  Name,
  Phone,
  Link,
  Icon,
  Category,
  Website,
  Images,
  Avatar,
  Logo,
  Buttons,
  NameWrapper,
  ActionIcon,
  MenuGroup,
  Menu,
  Settings,
};
