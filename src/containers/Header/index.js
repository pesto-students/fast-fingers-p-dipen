import React, { useContext } from 'react';
import Context from '../../store/context';
import { Row, Col } from 'react-flexbox-grid';
import { GridStyle, HeaderRow } from './HeaderStyle';
import Logo from '../../components/Logo';
import LabelWithIcon from '../../components/LabelWithIcon';
import { returnLevelName } from '../../utils/helper';
const Header = () => {
  const { globalState } = useContext(Context);
  const { isLoggedIn = false, gamerName = '', level = '' } = globalState;
  if (isLoggedIn) {
    return (
      <GridStyle fluid>
        <HeaderRow>
          <Col>
            <LabelWithIcon
              content={'left'}
              fontFamily={'primary'}
              label={gamerName}
              icon="person"
              fontSize={'44px'}
            />
          </Col>
          <Col>
            <Logo fontSize={'3.5rem'} />
          </Col>
        </HeaderRow>
        <Row>
          <Col>
            <LabelWithIcon
              content={'left'}
              fontFamily={'primary'}
              label={`LEVEL : ` + returnLevelName(level)}
              icon="gamepad"
            />
          </Col>
        </Row>
      </GridStyle>
    );
  }
  return null;
};

export default Header;
