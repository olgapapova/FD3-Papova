import React, { useState, useEffect } from 'react';

import "./Filter.css";

import Controls from './Controls';
import List from './List';

const Filter = props => {

  const [words, setWords] = useState(props.words);

  function changesMade(sort, filter) {
    let newWords=props.words.slice();
    if (sort)
      newWords.sort();
    if (filter)
      newWords=newWords.filter(v =>v.includes(filter));
    setWords(newWords);
  };

  return (
    <div>
      <Controls changesMade={changesMade}/>
      <List words={words}/>
    </div>
  );
};

export default Filter;