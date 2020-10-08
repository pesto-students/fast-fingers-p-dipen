import React, { Component } from 'react';
import {
  GridStyle,
  CenteralRow,
  FooterRow,
  Button,
  CentralCol,
} from './ScoreCardPageStyle';
import Context from '../../store/context';
import LabelWithIcon from '../../components/LabelWithIcon';
import { fmtMSS } from '../../utils/helper';
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
    const { gameScore, highestScore, game } = this.props.location.state;
    return (
      <GridStyle fluid>
        <CenteralRow center="xs">
          <CentralCol center="xs">
            <LabelWithIcon
              content={'center'}
              color={'var(--clr-white)'}
              fontFamily={'tertiary'}
              label={`score : game ${game}`}
              fontSize={'4rem'}
            />
            <LabelWithIcon
              content={'center'}
              color={'var(--clr-white)'}
              fontFamily={'tertiary'}
              label={fmtMSS(gameScore)}
              fontSize={'5rem'}
            />
            {highestScore && (
              <LabelWithIcon
                content={'center'}
                color={'var(--clr-white)'}
                fontFamily={'secondary'}
                label={`New High Score`}
                fontSize={'2rem'}
              />
            )}
            <Button
              onClick={() => this.props.history.push('/gamer')}
              content="center"
            >
              <LabelWithIcon
                label="play again"
                icon="reload"
                content={'center'}
              />
            </Button>
          </CentralCol>
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
