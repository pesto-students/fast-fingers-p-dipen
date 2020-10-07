import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
export const GridStyle = styled(Grid)`
  padding-right: 3%;
  padding-left: 3%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
`;

export const CenteralRow = styled(Row)`
  flex: 1 1 auto;
`;

export const FooterRow = styled(Row)`
  justify-content: space-between;
  flex: 0 1 40px;
`;

export const Button = styled.button`
  display: flex;
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
