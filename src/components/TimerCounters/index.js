import React from 'react';
import styled from 'styled-components';
const TimerContainer = styled.div`
  position: relative;
  width: 257px;
  height: 257px;
  margin: 20px auto 0;
`;
const RemainingTime = styled.div`
  font-family: var(--ff-tertiary);
  font-size: 57px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const CircularTimer = styled.div`
  width: 100%;
  height: 100%;
  svg {
    height: 100%;
    transform: rotate(-90deg) translate(21px, -20px);
    circle {
      stroke-dasharray: 803px;
      stroke-dashoffset: 0px;
      stroke-linecap: round;
      stroke-width: 12px;
      stroke: var(--clr-primary);
      fill: none;
    }
  }

  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 803px;
    }
    99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
const ThinCircle = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.25;
  border: solid 12px #fff;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
`;
const TimerCounters = ({ remainingTime, refName }) => {
  return (
    <TimerContainer>
      <CircularTimer>
        <svg>
          <circle ref={refName} r="125" cx="127" cy="127"></circle>
        </svg>
        <ThinCircle />
      </CircularTimer>
      <RemainingTime>{remainingTime}</RemainingTime>
    </TimerContainer>
  );
};

export default TimerCounters;
