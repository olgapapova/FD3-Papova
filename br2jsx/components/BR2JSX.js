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

      let textNew="";
      let textArr=this.state.textSt.split("");
      textArr.map(v => {
        if (v==="/" || v===" ")
          return;
        textNew+=v;
      });
      let wordArr=textNew.split("<br>");
      console.log(wordArr);
      let newStrArr=[];
      wordArr.map(v=>{
        newStrArr.push(v);
        newStrArr.push(<br/>)
      });
      
      return (
        
        <div className='LineBreak'>{newStrArr}</div>
        
      )
    }
  
  }
  export default BR2JSX;