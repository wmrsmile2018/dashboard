import { FC, useCallback, useState } from 'react';
import { SideBarView } from './SideBarView';
import { CardType } from '../../../Board/Board';
import { useDrawerContext } from '../Content/hooks/useDrawer';
import { DetailCard } from '../../../DetailCard/DetailCard';
import { ProfileCard } from '../../../ProfileCard/ProfileCard';

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

const profile: CardType = {
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
  name: 'Fedorov I.',
  title: 'Fedorov I.',
  phone: '8(977) 165-15-20',
  telegramName: 'wmrsmile',
  instagramName: 'wmrsmile',
  whatsAppPhone: '89773881686',
  category: 'IT разработчик',
  website: 'https://github.com/wmrsmile2018',
  images: [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ],
  description:
    'Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, Мастер по тату, ',
};

export type SideBarProps = { sideBarVisible: boolean };

export const SideBar: FC<SideBarProps> = ({ sideBarVisible }) => {
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

  const openProfile = useCallback(() => {
    setDrawerContent(<ProfileCard card={profile} />);
    openDrawer();
  }, [openDrawer, setDrawerContent]);

  return (
    <SideBarView
      sideBarVisible={sideBarVisible}
      openProfile={openProfile}
      profileCard={profile}
      cards={cards}
      openCard={clickDetailCard}
    />
  );
};
