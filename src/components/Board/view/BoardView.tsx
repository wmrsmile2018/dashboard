import { Avatar, Skeleton } from 'antd';
import { Styled } from './styles';
import { PlusOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons';
import { CardType } from '../Board';
import { FC } from 'react';
import { useTheme } from 'styled-components';

type BoardViewProps = {
  openCard: (data: CardType) => () => void;
  cards: CardType[];
};

export const BoardView: FC<BoardViewProps> = ({ cards, openCard }) => {
  const theme = useTheme();
  return (
    <Styled.Container>
      <Styled.Content>
        {cards.map((card) => (
          <Styled.Card
            size={'small'}
            actions={[
              <PlusOutlined
                key='plus'
                style={{
                  fontSize: '20px',
                  color: theme.colors.text,
                }}
              />,
              <RightOutlined
                key='right'
                style={{
                  fontSize: '20px',
                  color: theme.colors.text,
                }}
                onClick={openCard(card)}
              />,
            ]}
          >
            <Skeleton loading={false} avatar active>
              <Styled.Meta
                avatar={<Avatar src={card.avatar} size={100} />}
                title={card.title}
                description={card.description}
              />
            </Skeleton>
          </Styled.Card>
        ))}
      </Styled.Content>
    </Styled.Container>
  );
};
