import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
  
    static propTypes= {
      colors:PropTypes.array.isRequired,
    };
    
    render() {
      let sch=0;

      let divs=(n)=>{
        return ((n===this.props.colors.length)? null :
        <div style={{fontWeight:"bold", textAlign:"center", padding:"7px", border:"solid 7px "+this.props.colors[n]}}>
            {(n===this.props.colors.length-1)? this.props.children : null}
            {divs(n+1)}
        </div>)
      }

      return (
        
        <div>
            {divs(sch)}
        </div>
        
      )
    }
  
  }
  export default RainbowFrame;