import { Accept } from '../images/Accept';
import { Edit } from '../images/Edit';
import { Instagram } from '../images/Instagram';
import { Share } from '../images/Share';
import { Telegram } from '../images/Telegram';
import { Whatsapp } from '../images/Whatsapp';

export enum IconName {
  Telegram = 'Telegram',
  Instagram = 'Instagram',
  Whatsapp = 'Whatsapp',
  Edit = 'Edit',
  Accept = 'Accept',
  Share = 'Share',
}

export const IconMap: Record<IconName, any> = {
  [IconName.Telegram]: Telegram,
  [IconName.Instagram]: Instagram,
  [IconName.Whatsapp]: Whatsapp,
  [IconName.Edit]: Edit,
  [IconName.Accept]: Accept,
  [IconName.Share]: Share,
};
