import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {
  
    static propTypes= {
      text:PropTypes.string.isRequired,
    };

    state= {
      textSt:this.props.text,
    };

    render() {

      let textArr=this.state.textSt.split(/[< ]br[ />]+/);
      let newTextArr=[];
      textArr.map((v,i)=>{
        newTextArr.push(v);
        newTextArr.push(<br key={i}/>)
      });
      
      return (
        
        <div className='LineBreak'>{newTextArr}</div>
        
      )
    }
  
  }
  export default BR2JSX;