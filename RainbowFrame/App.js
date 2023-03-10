
      "use strict";
      import React from 'react';
      import ReactDOM from 'react-dom';

      import RainbowFrame from './components/RainbowFrame';

      let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

      ReactDOM.render(
        React.createElement(RainbowFrame,{colors, sch:0}), 
        document.getElementById("container")
      );