import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const GridStyle = styled(Grid)`
  padding: 3%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
`;

export const CenteralRow = styled(Row)`
  flex: 1 1 auto;
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
  ${({ content }) => content && `justify-content: ${content};`}
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const CentralCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
