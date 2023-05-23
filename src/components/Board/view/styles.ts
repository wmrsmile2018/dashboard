import { Card as CardUI, Tag as TagUI } from 'antd';
import styled from 'styled-components';
import { adaptTo } from '../../../theme/utils/adaptTo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled(CardUI)`
  /* min-width: 400px; */
  /* max-width: 300px;? */
  background: ${({ theme }) => theme.colors.bgLevel1};
  border-color: ${({ theme }) => theme.colors.bgLevel1};

  .ant-card-actions {
    background: ${({ theme }) => theme.colors.bgLevel1};
  }
  div {
    color: ${({ theme }) => theme.colors.text}!important;
  }
`;

const Meta = styled(CardUI.Meta)`
  max-height: 100px;
`;

// const Header = styled.div`
//   height: 110px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

const Content = styled.div`
  display: grid;

  grid-gap: 20px;

  ${adaptTo('desktop')} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${adaptTo('tablet')} {
    grid-template-columns: 1fr 1fr;
  }
  ${adaptTo('mobile')} {
    grid-template-columns: 1fr;
  }
`;

// const SearchContent = styled.div`
//   display: flex;
//   gap: 8px;
// `;
// const Chips = styled.div`
//   display: flex;
//   gap: 4px;
// `;

// const Tag = styled(TagUI)`
//   color: ${({ theme }) => theme.colors.text};
// `;

export const Styled = {
  Container,
  Meta,
  Card,
  // Header,
  Content,
  // SearchContent,
  // Chips,
  // Tag,
};
