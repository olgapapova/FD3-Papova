import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameHOC.css';

class DoubleButton extends React.Component {
  
    static propTypes= {
        caption1:PropTypes.string.isRequired,
        caption2:PropTypes.string.isRequired,
        cbPressed:PropTypes.func.isRequired,
    };

    click1=()=>{
      this.props.cbPressed(1)
    };

    click2=()=>{
      this.props.cbPressed(2)
    };
    
    render() {

      return (
        <div>
          <input className="Butt" type='button' value={this.props.caption1} onClick={this.click1}/>
          <span>{this.props.children}</span>
          <input className="Butt" type='button' value={this.props.caption2} onClick={this.click2}/>
        </div>
      )
    }
  
  }
  export default DoubleButton;