import { FC, useReducer } from 'react';
import { CardType } from '../Board/Board';
import { ProfileCardView } from './view/ProfileCardView';

type ProfileCardProps = {
  card: CardType;
};

export const ProfileCard: FC<ProfileCardProps> = ({ card }) => {
  const [isEdit, toggle] = useReducer((state) => !state, false);

  return (
    <ProfileCardView
      card={card}
      toggle={toggle}
      isEdit={isEdit}
      onSave={toggle}
    />
  );
};
