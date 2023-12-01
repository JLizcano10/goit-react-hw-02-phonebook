import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={handleFilter} />
      </label>
    </div>
  );
};

export default Filter;
