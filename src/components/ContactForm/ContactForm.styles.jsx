import styled from 'styled-components';

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 380px;
  border: 1px solid black;
  padding: 15px 10px;
`;

export const LabelForm = styled('label')`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 143px;
`;

export const InputForm = styled('input')`
  width: 100%;
  height: 21px;
  border: 1px solid #c3c3c3;
  font-weight: 500;
  outline: none;

  &:hover,
  &:focus {
    outline: 2.5px solid #94c0f9;
    border-radius: 2px;
  }
`;

export const ButtonForm = styled('button')`
  width: 88px;
  height: 21px;
  padding: 1px;
  outline: none;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  background-color: white;

  &: active {
    background-color: #4887ed;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
