import styled from 'styled-components';
import { Button, Tag as TagUI } from 'antd';
import { adaptTo } from '../../../../../theme/utils/adaptTo';

const Header = styled.div`
  min-height: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.colors.bgLevel0};
  border: ${({ theme }) => theme.colors.bgLevel2} 1px solid;
  padding: 0 24px;
  padding-top: 8px;
  top: 0;
  position: sticky;
  z-index: 1;
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const Chips = styled.div`
  display: flex;
  gap: 4px;
`;

const Tag = styled(TagUI)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
`;

const Menu = styled(Button)`
  display: none;

  ${adaptTo('mobile')} {
    display: block;
  }
`;

export const Styled = {
  Header,
  Tag,
  Chips,
  SearchWrapper,
  Menu,
};
