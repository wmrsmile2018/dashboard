import { Avatar, Button, Image, Input, Popover } from 'antd';
import { Styled } from './styles';
import { MoreOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { DispatchWithoutAction, FC } from 'react';
import Logo from '../../../asset/png/Logo.png';
import { CardType } from '../../Board/Board';
import { IconName } from '../../../asset/constants/Icon';
import { useTheme } from 'styled-components';

type ProfileCardViewProps = {
  card: CardType | undefined;
  toggle: DispatchWithoutAction;
  isEdit: boolean;
  onSave: VoidFunction;
  link?: {
    openTelegram?: () => void;
    openWhatsApp?: () => void;
    openInstagram?: () => void;
  };
};

export const ProfileCardView: FC<ProfileCardViewProps> = ({
  card,
  link,
  toggle,
  isEdit,
  onSave,
}) => {
  const theme = useTheme();
  return (
    <Styled.Container>
      <Styled.Header className='header'>
        <Styled.Avatar>
          <Styled.Logo src={Logo} />
          <Avatar size={100} icon={<UserOutlined />} src={card?.avatar} />
        </Styled.Avatar>
        <Styled.Profile>
          <Styled.NameWrapper>
            <Styled.Name>{card?.name}</Styled.Name>
            <Styled.Settings>
              {isEdit && (
                <Button
                  onClick={toggle}
                  size='middle'
                  type='primary'
                  style={{
                    background: `#567194`,
                    color: '#fff',
                  }}
                  icon={<PlusOutlined />}
                >
                  Сохранить
                </Button>
              )}
              <Popover
                placement='left'
                trigger='click'
                style={{ background: 'black' }}
                content={
                  <Styled.MenuGroup>
                    <Styled.Menu
                      onClick={toggle}
                      icon={
                        <Styled.ActionIcon
                          iconName={IconName.Edit}
                          // color={theme.colors.text}
                        />
                      }
                    >
                      Редактировать
                    </Styled.Menu>
                    <Styled.Menu onClick={() => {}}>
                      <Styled.ActionIcon iconName={IconName.Share} />
                      Поделиться
                    </Styled.Menu>
                  </Styled.MenuGroup>
                }
              >
                <Button
                  style={{ background: '#567194' }}
                  type='text'
                  shape='circle'
                  icon={
                    <MoreOutlined
                      style={{
                        color: theme.colors.text,
                        fontSize: 18,
                      }}
                    />
                  }
                />
              </Popover>
            </Styled.Settings>
          </Styled.NameWrapper>
          {isEdit ? (
            <Input
              placeholder='Профиль'
              style={{
                backgroundColor: theme.colors.bgLevel1,
                color: theme.colors.text,
              }}
            />
          ) : (
            <Styled.Category>Профиль: {card?.category}</Styled.Category>
          )}
          {isEdit ? (
            <Input
              placeholder='Телефон'
              style={{
                backgroundColor: theme.colors.bgLevel1,
                color: theme.colors.text,
              }}
            />
          ) : (
            <Styled.Phone>Тел: {card?.phone}</Styled.Phone>
          )}
          {isEdit ? (
            <Input
              placeholder='Веб сайт'
              style={{
                backgroundColor: theme.colors.bgLevel1,
                color: theme.colors.text,
              }}
            />
          ) : (
            <Styled.Website>Веб сайт: {card?.website}</Styled.Website>
          )}

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
          {isEdit ? (
            <Input.TextArea
              value={card?.description}
              autoSize
              style={{
                backgroundColor: theme.colors.bgLevel1,
                color: theme.colors.text,
              }}
            />
          ) : (
            card?.description
          )}
        </Styled.Description>
      </Styled.Content>
    </Styled.Container>
  );
};
