import { useCallback, useReducer, useState } from 'react';
import { BoardView } from './view/BoardView';
import { useDrawerContext } from '../Screen/components/Content/hooks/useDrawer';
import { DetailCard } from '../DetailCard/DetailCard';

export type CardType = {
  title: string;
  avatar: string;
  description: string;
  name: string;
  phone: string;
  telegramName?: string;
  instagramName?: string;
  whatsAppPhone?: string;
  category: string;
  website: string;
  images: string[];
};

const cards: CardType[] = Array.from({ length: 20 }, () => ({
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
  name: 'Федоров',
  title: 'Федоров',
  phone: '8(977) 165-15-20',
  telegramName: 'wmrsmile',
  instagramName: 'wmrsmile',
  whatsAppPhone: '89773881686',
  category: 'IT разработчик',
  website: 'https://github.com/wmrsmile2018',
  images: [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ],
  description:
    'Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, ',
}));

export const Board = () => {
  const { setDrawerContent, openDrawer } = useDrawerContext();
  const clickDetailCard = useCallback(
    (data: CardType) => {
      return () => {
        setDrawerContent(<DetailCard card={data} />);
        openDrawer();
      };
    },
    [openDrawer, setDrawerContent]
  );

  return <BoardView cards={cards} openCard={clickDetailCard} />;
};
