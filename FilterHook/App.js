import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

let listWordsArr=['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
  <Filter 
    words={listWordsArr}
  />
  , document.getElementById('container') 
);

