import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
export const GridStyle = styled(Grid)`
  padding-top: 1.5%;
  padding-right: 3%;
  padding-bottom: auto;
  padding-left: 3%;
  flex: 0 1 auto;
`;

export const HeaderRow = styled(Row)`
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
