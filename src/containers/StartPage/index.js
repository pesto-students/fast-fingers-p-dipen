import React, { Component } from 'react';
import Context from '../../store/context';
import { Col } from 'react-flexbox-grid';
import { GridStyle, CenteralRow, FooterRow, Button } from './StartPageStyle';
import Input from '../../components/Input';
import HighLighter from '../../components/HighLighter';
import TimerCounters from '../../components/TimerCounters';
import { getWordFromDictionary } from '../../utils/helper';
import LabelWithIcon from '../../components/LabelWithIcon';

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '', timerValue: 0, keyWord: '', gameScore: 0 };
  }
  componentDidMount() {
    this.isLoggedOrNot();
  }
  isLoggedOrNot = () => {
    const context = this.context;
    const { isLoggedIn = false, level } = context.globalState;
    if (!isLoggedIn) {
      this.props.history.push('/');
    } else {
      const { keyWord, timerValue } = getWordFromDictionary(level);
      this.setState({ keyWord, timerValue, inputText: '' }, () => {
        setTimeout(() => {
          document
            .getElementById('circle')
            .setAttribute(
              'style',
              'animation: countdown ' +
                parseFloat(this.state.timerValue).toFixed(2) +
                's linear forwards'
            );
          this.startTimer();
        }, 500);
      });
    }
  };
  setInputText = (value) => {
    this.setState({ inputText: value }, () => {
      const { keyWord, inputText } = this.state;
      let matchLength = 0;
      for (let i = 0; i < keyWord.length; i++) {
        if (
          inputText[i] &&
          keyWord[i].toLowerCase() === inputText[i].toLowerCase()
        ) {
          matchLength++;
        } else {
          break;
        }
      }
      if (matchLength === keyWord.length) {
        this.isLoggedOrNot();
        clearInterval(this.timer);
        document.getElementById('circle').removeAttribute('style');
        this.context.globalDispatch({
          type: 'SETLEVEL',
          data: parseFloat(
            parseFloat(this.context.globalState.level) + 0.01
          ).toFixed(2),
        });
      }
    });
  };
  decrementRemainingTime = () => {
    if (this.state.timerValue > 0) {
      this.setState(() => ({
        timerValue: this.state.timerValue - 0.05,
      }));
    } else {
      clearInterval(this.timer);
    }
  };
  startTimer() {
    this.timer = setInterval(() => {
      this.decrementRemainingTime();
    }, 50);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  goToHomePage = () => {
    this.context.globalDispatch({
      type: 'LOGOUT',
    });
    this.props.history.push('/');
  };
  render() {
    const { inputText, timerValue, keyWord } = this.state;
    return (
      <GridStyle fluid>
        <CenteralRow center="xs">
          <Col>
            <TimerCounters
              remainingTime={
                timerValue <= 0
                  ? 0
                  : parseFloat(timerValue)
                      .toFixed(2)
                      .toString()
                      .replace('.', ':')
              }
            />
            <HighLighter text={keyWord} inputText={inputText} />
            <Input
              value={inputText}
              onChange={(e) => this.setInputText(e.target.value)}
              align="center"
            />
          </Col>
        </CenteralRow>
        <FooterRow>
          <Button>
            <LabelWithIcon
              content={'left'}
              fontFamily={'primary'}
              label={'stop game'}
              icon="stop"
              fontSize={'2.75rem'}
            />
          </Button>
          <Button onClick={() => this.goToHomePage()}>
            <LabelWithIcon
              content={'left'}
              fontFamily={'primary'}
              icon="home"
              fontSize={'2.75rem'}
            />
          </Button>
        </FooterRow>
      </GridStyle>
    );
  }
}
StartPage.contextType = Context;
export default StartPage;
