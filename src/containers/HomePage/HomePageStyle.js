import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import Logo from '../../components/Logo';
import Text from '../../components/Text';
export const GridStyle = styled(Grid)`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
  max-width: 60%;

  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const FormStyled = styled.form`
  display: flex;
  flex-flow: column;
  height: 100%;
  flex: 0.6 1 auto;
  padding-top: 5.6%;
  select {
    margin-top: 2.3%;
  }
`;
export const InputSelect = styled.div`
  flex: 1 1 auto;
`;
export const HomeRow = styled(Row)``;
export const FormRow = styled(Row)`
  flex: 1 1 auto;
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
