import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import Logo from '../../components/Logo';
import Text from '../../components/Text';

export const FormStyled = styled.form`
  margin-top: 5.6%;
  select {
    margin-top: 2.3%;
  }
`;
export const HomeRow = styled(Row)`
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
`;

export const KeyBoardIconImg = styled.img`
  margin-top: 11.5%;
  width: 234.2px;
  height: 156.1px;
  opacity: 0.6;
`;
export const LogoStyled = styled(Logo)`
  margin-top: 2.6%;
`;
export const TextStyled = styled(Text)`
  display: flex;
  justify-content: center;
  &:after,
  &:before {
    content: '';
    border-top: 2px solid var(--clr-primary);
    margin: 0 20px 0 0;
    flex: 1 0 20px;
    align-self: center;
  }
  &:after {
    margin: 0 0 0 20px;
  }
`;
export const StartGameButton = styled.button`
  margin-top: 18%;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
