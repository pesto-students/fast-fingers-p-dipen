import React from 'react';
import Text from '../Text';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  font-family: var(--ff-tertiary);
  font-size: 92px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  margin: 20px;
  text-transform: uppercase;
`;
const HighLighter = ({ text, inputText }) => {
  const matchingText = text.split('').map((char, index) => {
    return (
      <Text
        color={
          index < inputText.length
            ? char.toLowerCase() === inputText[index].toLowerCase()
              ? '#54ba18'
              : '#00435d'
            : 'white'
        }
        key={index}
        fontSize="inherit"
      >
        {char}
      </Text>
    );
  });
  return <Div>{matchingText}</Div>;
};
export default HighLighter;
