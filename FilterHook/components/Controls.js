import React, { useState, useEffect } from 'react';

import "./Filter.css";

const Controls = props => {

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(()=>{
    props.changesMade && props.changesMade(sort, filter);
  },[sort, filter])

  function sortList(EO) {
    setSort(EO.target.checked);
  };

  function filterList(EO) {
    setFilter(EO.target.value);
  };

  function resetList(EO) {
    setSort(false);
    setFilter("");
  };

  return (
    <div>
      <input type='checkbox' name='abc' onChange={sortList} checked={sort}/>
      <input type='text' name='filterabc' value={filter} onChange={filterList}/>
      <input type='button' value='Reset' onClick={resetList}/>
    </div>
  );
};

export default Controls;