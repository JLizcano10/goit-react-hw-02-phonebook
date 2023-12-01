import React from 'react';

const Filter = ({ onFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={onFilter} />
      </label>
    </div>
  );
};

export default Filter;
