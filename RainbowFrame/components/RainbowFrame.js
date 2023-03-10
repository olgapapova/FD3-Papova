import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
  
    static propTypes= {
      colors:PropTypes.array.isRequired,
      sch:PropTypes.number.isRequired,
    };
    
    render() {
      let colors=this.props.colors;
      let sch=this.props.sch;

      return (
        
        (this.props.sch===this.props.colors.length)? null :
        <div style={{fontWeight:"bold", textAlign:"center", padding:"7px", border:"solid 7px "+colors[sch]}}>
            {(this.props.sch===this.props.colors.length-1)? "Hello!": null}
            <RainbowFrame sch={++sch} colors={colors}></RainbowFrame>
        </div>
        
      )
    }
  
  }
  export default RainbowFrame;