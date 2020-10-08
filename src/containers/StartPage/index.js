import React, { Component } from 'react';
import Context from '../../store/context';
import {
  GridStyle,
  CenteralRow,
  FooterRow,
  Button,
  ScoreBoardCol,
  ScoreBoardCol2,
  TimerCol,
  NonShowing,
  HumburgerIcon,
} from './StartPageStyle';
import Input from '../../components/Input';
import Text from '../../components/Text';
import HighLighter from '../../components/HighLighter';
import TimerCounters from '../../components/TimerCounters';
import LabelWithIcon from '../../components/LabelWithIcon';
import {
  getWordFromDictionary,
  getMaxFirstIndexValue,
  fmtMSS,
} from '../../utils/helper';
class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      timerValue: 0,
      keyWord: '',
      gameScore: 0,
      pauseTimer: false,
      fastFingers: {},
      showHideScoreBoard: false,
    };
    this.animationCircle = React.createRef();
    this.scoreBoardCol = React.createRef();
  }
  componentDidMount() {
    this.isLoggedOrNot();
    this.setState({ gameScore: 0 });
    this.startGameTimer();
    let fastFingers = localStorage.getItem('fastFingers');
    if (fastFingers == null) {
      fastFingers = {};
    } else {
      fastFingers = JSON.parse(fastFingers);
    }
    this.setState({ fastFingers });
  }
  PauseTimer = () => {
    this.setState({ pauseTimer: !this.state.pauseTimer }, () => {
      if (this.state.pauseTimer) {
        this.animationCircle.current.style.animationPlayState = 'paused';
        clearInterval(this.clockTimer, this.gameTimer);
      } else {
        this.animationCircle.current.style.animationPlayState = 'running';
        this.startClockTimer();
        this.startGameTimer();
      }
    });
  };
  isLoggedOrNot = () => {
    const context = this.context;
    const { isLoggedIn = false, level } = context.globalState;
    if (!isLoggedIn) {
      this.props.history.push('/');
    } else {
      const { keyWord, timerValue } = getWordFromDictionary(level);
      this.setState(
        { keyWord, timerValue, inputText: '', pauseTimer: false },
        () => {
          setTimeout(() => {
            this.animationCircle.current.style.animation = ` countdown ${parseFloat(
              this.state.timerValue
            ).toFixed(2)}s linear forwards`;
            this.startClockTimer();
          }, 500);
        }
      );
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
      if (
        matchLength === keyWord.length &&
        inputText.length === keyWord.length
      ) {
        this.isLoggedOrNot();
        clearInterval(this.clockTimer);
        this.animationCircle.current.style.animation = null;
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
      this.gameOverMoveToNextPage();
    }
  };
  startClockTimer() {
    this.clockTimer = setInterval(() => {
      this.decrementRemainingTime();
    }, 50);
  }
  startGameTimer() {
    this.gameTimer = setInterval(() => {
      this.setState({ gameScore: parseInt(this.state.gameScore) + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
    clearInterval(this.gameTimer);
  }
  goToHomePage = () => {
    this.context.globalDispatch({
      type: 'LOGOUT',
    });
    this.props.history.push('/');
  };
  gameOverMoveToNextPage = (home = false) => {
    clearInterval(this.clockTimer);
    clearInterval(this.gameTimer);
    const { gameScore } = this.state;
    console.log(localStorage.getItem('fastFingers'));
    let fastFingers = localStorage.getItem('fastFingers');
    if (fastFingers == null) {
      fastFingers = {};
    } else {
      fastFingers = JSON.parse(fastFingers);
    }
    const { globalState } = this.context;
    const { gamerName } = globalState;
    let highestScore = true;
    if (fastFingers[gamerName]) {
      fastFingers[gamerName].push(gameScore);
      highestScore =
        getMaxFirstIndexValue(fastFingers[gamerName]) ===
        fastFingers[gamerName].length - 1;
    } else {
      fastFingers[gamerName] = [gameScore];
    }
    localStorage.setItem('fastFingers', JSON.stringify(fastFingers));
    if (home) {
      this.goToHomePage();
    } else {
      this.props.history.push({
        pathname: '/scoreCard',
        state: { gameScore, highestScore },
      });
    }
  };
  showHideScoreBoard = () => {
    this.setState({ showHideScoreBoard: !this.state.showHideScoreBoard });
  };
  render() {
    const {
      inputText,
      timerValue,
      keyWord,
      pauseTimer,
      fastFingers = {},
      showHideScoreBoard,
    } = this.state;
    const { globalState } = this.context;
    const { gamerName } = globalState;
    const MaxValueIndex = getMaxFirstIndexValue(fastFingers[gamerName] || []);
    const ScoreBoard = fastFingers[gamerName] ? (
      fastFingers[gamerName].map((value, index) => (
        <>
          {MaxValueIndex === index && (
            <Text
              fontFamily="var(--ff-secondary)"
              fontSize="0.7rem"
              upperCase={true}
            >
              PERSONAL BEST
            </Text>
          )}
          <Text
            fontFamily="var(--ff-secondary)"
            fontSize="1.875rem"
            color="white"
            upperCase={true}
          >
            Game {index + 1} : {fmtMSS(value)}
          </Text>
        </>
      ))
    ) : (
      <Text
        fontFamily="var(--ff-secondary)"
        fontSize="1.875rem"
        color="white"
        upperCase={true}
      >
        No record
      </Text>
    );
    return (
      <GridStyle fluid>
        <HumburgerIcon
          icon="menu"
          width="35px"
          onClick={this.showHideScoreBoard}
        />
        <CenteralRow>
          {showHideScoreBoard && (
            <ScoreBoardCol2>
              <Text
                fontFamily="var(--ff-secondary)"
                fontSize="1.875rem"
                align="center"
                upperCase={true}
              >
                Score Board
              </Text>
              <br />
              {ScoreBoard}
            </ScoreBoardCol2>
          )}
          <ScoreBoardCol>
            <Text
              fontFamily="var(--ff-secondary)"
              fontSize="1.875rem"
              align="center"
              upperCase={true}
            >
              Score Board
            </Text>
            <br />
            {ScoreBoard}
          </ScoreBoardCol>
          <TimerCol>
            <TimerCounters
              refName={this.animationCircle}
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
              disabled={pauseTimer}
            />
            <button onClick={() => this.PauseTimer()}>play pause</button>
          </TimerCol>
          <NonShowing />
        </CenteralRow>
        <FooterRow>
          <Button onClick={() => this.gameOverMoveToNextPage()}>
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
