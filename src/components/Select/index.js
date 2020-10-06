import React from 'react';
import styled from 'styled-components';
import selectArrow from '../../assets/icons/Icon ionic-md-arrow-dropdown.svg';
const Div = styled.div`
  position: relative;
  &:after {
    position: absolute;
    content: '';
    top: 64px;
    right: 36px;
    width: 0;
    height: 0;
    border: 13px solid transparent;
    border-color: #fff transparent transparent transparent;
    // background-image: url(${(props) => props.selectPath});
  }
`;

const SelectStyled = styled.select`
  position: relative;
  min-height: 5.625rem;
  width: 100%;
  font-family: var(--ff-primary);
  font-size: 2.1875rem;
  padding: 24px 32px;
  border-radius: 15px;
  color: var(--clr-white);
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  border: solid 1px #ffffff;
  background: transparent;
  &:focus {
    outline: none;
  }
  text-align: ${({ align }) => align || 'left'};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  &:required:focus {
    border: 2px solid var(--clr-primary);
    outline: none;
  }
`;

const Select = ({ onChange, options, value, defaultText, ...props }) => {
  return (
    <Div selectPath={selectArrow}>
      <SelectStyled {...props} onChange={onChange} value={value}>
        {defaultText && (
          <option value="" disabled selected style={{ display: 'none' }}>
            {defaultText}
          </option>
        )}
        {options.map((option) =>
          typeof option === 'object' ? (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ) : (
            <option value={option} key={option}>
              {option}
            </option>
          )
        )}
      </SelectStyled>
    </Div>
  );
};

export default Select;
