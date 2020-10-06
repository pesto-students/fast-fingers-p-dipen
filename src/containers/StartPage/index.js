import React, { Component } from 'react';
import Context from '../../store/context';
import { Row, Col } from 'react-flexbox-grid';
import { GridStyle } from './StartPageStyle';
import Input from '../../components/Input';
import HighLighter from '../../components/HighLighter';
import TimerCounters from '../../components/TimerCounters';
import { getWordFromDictionary } from '../../utils/helper';

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '', timerValue: 0, keyWord: '' };
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
      this.setState({ keyWord, timerValue }, () => {
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
        }, 2000);
      });
    }
  };
  setInputText = (value) => {
    this.setState({ inputText: value });
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
  render() {
    const { inputText, timerValue, keyWord } = this.state;
    return (
      <GridStyle>
        <Row center="xs">
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
        </Row>
      </GridStyle>
    );
  }
}
StartPage.contextType = Context;
export default StartPage;
