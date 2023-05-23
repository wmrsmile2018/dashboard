import { FC } from 'react';
import { Styled } from './styles';
import { useTheme } from 'styled-components';
import { Avatar } from 'antd';
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../../../asset/png/Logo.png';
import { CardType } from '../../../Board/Board';
import { isMobile } from 'react-device-detect';

type SideBarViewProps = {
  openProfile: VoidFunction;
  profileCard: CardType;
  openCard: (data: CardType) => () => void;
  cards: CardType[];
  sideBarVisible: boolean;
};

export const SideBarView: FC<SideBarViewProps> = ({
  profileCard,
  cards,
  openCard,
  openProfile,
  sideBarVisible,
}) => {
  const theme = useTheme();

  return (
    <>
      <Styled.SideBar sideBarVisible={sideBarVisible}>
        <Styled.Profile>
          <Styled.Avatar onClick={openProfile}>
            <Styled.Logo src={Logo} />
            <Avatar
              size={60}
              icon={<UserOutlined />}
              src={profileCard.avatar}
              onClick={openProfile}
            />
          </Styled.Avatar>
          <Styled.Name>{profileCard.name}</Styled.Name>
        </Styled.Profile>
        {/* <Styled.Navigations>
      <Divider style={{ background: theme.colors.bgDisabledLevel1 }} />
      <Styled.Navigation icon={<TeamOutlined />} type='text' size='large'>
        Контакты
      </Styled.Navigation>
    </Styled.Navigations> */}
        <Styled.Contacts>
          {/* <Divider style={{ background: theme.colors.bgDisabledLevel1 }} /> */}
          <Styled.Title>Сохраненные контакты</Styled.Title>
          <Styled.ScrollContent>
            {cards.map((card) => (
              <Styled.ButtonWrapper>
                <Styled.Contact
                  onClick={openCard(card)}
                  type='text'
                  size='large'
                  icon={
                    <Avatar
                      size={'small'}
                      icon={<UserOutlined />}
                      src={card.avatar}
                    />
                  }
                >
                  {card.name}
                </Styled.Contact>
                <CloseOutlined
                  style={{
                    fontSize: '20px',
                    color: theme.colors.text,
                  }}
                />
              </Styled.ButtonWrapper>
            ))}
          </Styled.ScrollContent>
        </Styled.Contacts>
      </Styled.SideBar>
    </>
  );
};
