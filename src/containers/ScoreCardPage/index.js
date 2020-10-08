import React, { Component } from 'react';
import {
  GridStyle,
  CenteralRow,
  FooterRow,
  Button,
} from './ScoreCardPageStyle';
import { Col } from 'react-flexbox-grid';
import Context from '../../store/context';
import LabelWithIcon from '../../components/LabelWithIcon';

class ScoreCardPage extends Component {
  componentDidMount() {
    const context = this.context;
    const { isLoggedIn = false } = context.globalState;
    if (!isLoggedIn) {
      this.props.history.push('/');
    }
  }
  goToHomePage = () => {
    this.context.globalDispatch({
      type: 'LOGOUT',
    });
    this.props.history.push('/');
  };
  render() {
    console.log(this.props);
    return (
      <GridStyle fluid>
        <CenteralRow center="xs">
          <Col>
            SCORE
            <button onClick={() => this.props.history.push('/gamer')}>
              play gain
            </button>
          </Col>
        </CenteralRow>
        <FooterRow>
          <Button onClick={() => this.goToHomePage()}>
            <LabelWithIcon
              content={'left'}
              fontFamily={'primary'}
              label={'quit'}
              fontSize={'2.75rem'}
            />
          </Button>
          <Button onClick={() => this.goToHomePage()}>
            <LabelWithIcon
              content={'left'}
              fontFamily={'primary'}
              icon="home"
              fontSize={'2.75rem'}
              width="50px"
            />
          </Button>
        </FooterRow>
      </GridStyle>
    );
  }
}
ScoreCardPage.contextType = Context;

export default ScoreCardPage;
