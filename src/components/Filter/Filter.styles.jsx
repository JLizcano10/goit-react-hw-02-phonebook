import styled from 'styled-components';

export const LabelFilter = styled('label')`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const InputFilter = styled('input')`
  width: 150px;
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
