import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LabelWithIcon from '../../components/LabelWithIcon';

export const GridStyle = styled(Grid)`
  padding-right: 3%;
  padding-left: 3%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
  padding-top: 1%;
`;

export const CenteralRow = styled(Row)`
  flex: 0.8 1 auto;
  flex-wrap: nowrap;
  @media (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: space-around;
  }
`;

export const FooterRow = styled(Row)`
  justify-content: space-between;
  flex: 0 1 30px;
`;

export const Button = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
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

export const ScoreBoardCol = styled(Col)`
  border-radius: 15px;
  border: solid 3px var(--light-red);
  padding: 30px;
  flex: 0 1 20%;
  margin-right: 20px;
  border-radius: 15px;
  border: solid 3px var(--light-red);
  max-height: 69vh;
  overflow: auto;
  @media (max-width: 500px) {
    width: 100%;
    flex: 1 1 auto;
    align-self: center;
    margin: 0 auto;
    max-height: 200px;
    display: none;
  }
  span {
    margin: 5px;
  }
`;

export const ScoreBoardCol2 = styled(Col)`
  border-radius: 15px;
  border: solid 3px var(--light-red);
  padding: 30px;
  flex: 0 1 20%;
  margin-right: 20px;
  border-radius: 15px;
  border: solid 3px var(--light-red);
  overflow: auto;
  display: none;
  @media (max-width: 500px) {
    width: 100%;
    flex: 1 1 auto;
    align-self: center;
    margin: 0 auto;
    max-height: 200px;
    display: block;
  }
  span {
    margin: 5px;
  }
`;

export const TimerCol = styled(Col)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex: 1 1 auto;
  }
`;

export const NonShowing = styled(Col)`
  flex: 0 1 20%;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const HumburgerIcon = styled(LabelWithIcon)`
  position: absolute;
  right: 7px;
  top: 54px;
  @media (min-width: 500px) {
    display: none;
  }
`;
