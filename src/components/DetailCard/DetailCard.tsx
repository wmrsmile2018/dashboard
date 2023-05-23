import { FC, useMemo } from 'react';
import { DetailCardView } from './view/DetailCardView';
import { CardType } from '../Board/Board';

export type DetailCardProps = {
  card: CardType | undefined;
};

export const DetailCard: FC<DetailCardProps> = ({ card }) => {
  const link = useMemo(() => {
    if (!card?.telegramName && !card?.whatsAppPhone && !card?.instagramName) {
      return undefined;
    }
    return {
      openTelegram: () => {
        window.open(`https://t.me/${card?.telegramName}`, '_blank');
      },
      openWhatsApp: () => {
        window.open(`https://wa.me/${card?.whatsAppPhone}`, '_blank');
      },
      openInstagram: () => {
        window.open(
          `https://www.instagram.com/${card?.instagramName}`,
          '_blank'
        );
      },
    };
  }, [card]);

  return <DetailCardView link={link} card={card} />;
};
