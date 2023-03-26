import React, { useState, useEffect } from 'react';

import "./Filter.css";

const List = props => {

  return (
    <div>
      <div class="List">{props.words.map((s, i) => <div key={i} class="List2">{s}</div>)}</div>
    </div>
  );
};

export default List;