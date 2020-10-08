import React from 'react';
import styled from 'styled-components';
import GamePad from '../../assets/icons/Icon awesome-gamepad.svg';
import Play from '../../assets/icons/Icon awesome-play.svg';
import Stop from '../../assets/icons/Icon metro-cross.svg';
import Person from '../../assets/icons/Icon material-person.svg';
import Home from '../../assets/icons/Icon awesome-home.svg';
import Reload from '../../assets/icons/Icon open-reload.svg';
import Humburguer from '../../assets/icons/menu.svg';

const Div = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ fontFamily }) =>
    ` var(--ff-${fontFamily})` || 'var(--ff-tertiary)'};
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  font-size: ${({ fontSize }) => fontSize || '2.75rem'};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
  color: ${({ color }) => color || 'var(--light-red)'};
  justify-content: ${({ content }) => content || 'center'};
`;

const BigText = styled.h2`
  text-align: center;
  font-size: ${({ fontSize }) => fontSize || '2.75rem'};
  @media (max-width: 500px) {
    font-size: ${({ fontSize }) => fontSize || '3rem'} !important;
  }
`;
const ImageIcon = styled.img`
  width: ${({ width }) => width || 'auto'};
  ${({ label }) => label && 'margin-right: 10px'};
  @media (max-width: 500px) {
    ${({ label }) => label && 'margin-right: 5px'};
  }
`;
const LabelWithText = ({ label, icon, ...props }) => {
  const IconWithImage = (icon) => {
    let url = '';
    switch (icon) {
      case 'stop':
        url = Stop;
        break;
      case 'play':
        url = Play;
        break;
      case 'home':
        url = Home;
        break;
      case 'gamepad':
        url = GamePad;
        break;
      case 'reload':
        url = Reload;
        break;
      case 'person':
        url = Person;
        break;
      case 'menu':
        url = Humburguer;
        break;
      default:
        url = Person;
    }
    return url;
  };
  return (
    <Div {...props}>
      {icon && (
        <ImageIcon
          src={IconWithImage(icon)}
          alt={icon}
          {...props}
          label={label}
        />
      )}
      {label && (
        <BigText {...props} url={IconWithImage(icon)}>
          {label}
        </BigText>
      )}
    </Div>
  );
};

export default LabelWithText;
