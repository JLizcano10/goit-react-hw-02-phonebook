import styled from 'styled-components';

export const ListItem = styled('li')`
  position: relative;
`;

export const ButtonListItem = styled('button')`
  position: absolute;
  top: 25%;
  width: 50px;
  padding: 1px;
  outline: none;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  background-color: white;
  margin-left: 10px;

  &: active {
    background-color: #4887ed;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
