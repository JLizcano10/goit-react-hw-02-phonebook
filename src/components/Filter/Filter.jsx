import React from 'react';
import { InputFilter, LabelFilter } from './Filter.styles';

const Filter = ({ onFilter }) => {
  return (
    <div>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" onChange={onFilter} />
      </LabelFilter>
    </div>
  );
};

export default Filter;
