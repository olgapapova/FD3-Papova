import React, { useState, useEffect } from 'react';

import "./Filter.css";

const List = props => {

  return (
    <div>
      <div className="List">{props.words.map((s, i) => <div key={i} className="List2">{s}</div>)}</div>
    </div>
  );
};

export default List;