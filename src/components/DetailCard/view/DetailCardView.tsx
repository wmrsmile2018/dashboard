import { Avatar, Button, Image } from 'antd';
import { FC } from 'react';
import { Styled } from './styles';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { CardType } from '../../Board/Board';
import { IconName } from '../../../asset/constants/Icon';
import Logo from '../../../asset/png/Logo.png';

type DetailCardViewProps = {
  card: CardType | undefined;
  link?: {
    openTelegram?: () => void;
    openWhatsApp?: () => void;
    openInstagram?: () => void;
  };
};

export const DetailCardView: FC<DetailCardViewProps> = ({ card, link }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Avatar>
          <Styled.Logo src={Logo} />
          <Avatar size={100} icon={<UserOutlined />} src={card?.avatar} />
        </Styled.Avatar>
        <Styled.Profile>
          <Styled.Name>{card?.name}</Styled.Name>
          <Styled.Category>Профиль: {card?.category}</Styled.Category>
          <Styled.Phone>Тел: {card?.phone}</Styled.Phone>
          <Styled.Website>Веб сайт: {card?.website}</Styled.Website>
          <Styled.Buttons>
            {link && (
              <Styled.Link>
                {link?.openTelegram && (
                  <Styled.Icon
                    onClick={link?.openTelegram}
                    iconName={IconName.Telegram}
                  />
                )}
                {link?.openInstagram && (
                  <Styled.Icon
                    onClick={link?.openInstagram}
                    iconName={IconName.Instagram}
                  />
                )}
                {link?.openWhatsApp && (
                  <Styled.Icon
                    onClick={link?.openWhatsApp}
                    iconName={IconName.Whatsapp}
                  />
                )}
              </Styled.Link>
            )}
            <Button
              size='large'
              type='primary'
              style={{
                background: `#567194`,
                color: '#fff',
              }}
              icon={<PlusOutlined />}
            >
              Сохранить
            </Button>

            {/* <Button
              shape="circle"
                style={{
                  background: `${theme.colors.bgLevel1}`,
                  color: theme.colors.text,
                }}
                icon={
                  <CloseOutlined
                    style={{
                      background: `${theme.colors.bgLevel1}`,
                      color: theme.colors.error,
                    }}
                  />
                }
              /> */}
          </Styled.Buttons>
        </Styled.Profile>
      </Styled.Header>
      <Styled.Content>
        <Styled.Images>
          {(card?.images ?? []).map((image) => (
            <Image width={200} src={image} />
          ))}
        </Styled.Images>
        <Styled.Description>
          <p>Описание</p>
          {card?.description}
        </Styled.Description>
      </Styled.Content>
    </Styled.Container>
  );
};
