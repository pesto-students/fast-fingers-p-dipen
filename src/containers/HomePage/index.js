import React, { useContext, useState } from 'react';
import KeyboardIcon from '../../assets/icons/Icon awesome-keyboard.svg';
import { Col } from 'react-flexbox-grid';
import Input from '../../components/Input';
import Select from '../../components/Select';
import LabelWithIcon from '../../components/LabelWithIcon';
import Context from '../../store/context';
import {
  HomeRow,
  KeyBoardIconImg,
  TextStyled,
  LogoStyled,
  FormStyled,
  StartGameButton,
  GridStyle,
  FormRow,
  InputSelect,
} from './HomePageStyle';

const HomePage = (props) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const { globalDispatch } = useContext(Context);
  const onSubmitForm = (e) => {
    e.preventDefault();
    globalDispatch({
      type: 'LOGIN',
      data: { gamerName: name.toLowerCase(), level: level },
    });
    props.history.push('/gamer');
  };

  return (
    <GridStyle fluid>
      <HomeRow center="xs">
        <Col xs={12}>
          <KeyBoardIconImg src={KeyboardIcon} alt="Keyboard Icon" />
        </Col>
        <Col xs={12}>
          <LogoStyled />
        </Col>
        <Col xs={12}>
          <TextStyled align="center" fontSize="1.625rem">
            the ultimate typing game
          </TextStyled>
        </Col>
      </HomeRow>
      <FormRow center="xs">
        <Col xs={12}>
          <FormStyled onSubmit={onSubmitForm}>
            <InputSelect>
              <Input
                placeholder="type your name"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Select
                defaultText="difficulty level"
                options={[
                  { label: 'easy', value: 1 },
                  { label: 'medium', value: 1.5 },
                  { label: 'hard', value: 2 },
                ]}
                required
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </InputSelect>
            <StartGameButton type="submit">
              <LabelWithIcon label="Start game" icon="play" />
            </StartGameButton>
          </FormStyled>
        </Col>
      </FormRow>
    </GridStyle>
  );
};

export default HomePage;
