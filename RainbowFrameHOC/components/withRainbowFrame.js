import React from 'react';

function withRainbowFrame(colors) {
    return function(Comp) {
      return class NewRainbowFrame extends React.Component {
  
        render() {
          let sch=0;
    
          let divs=(n)=>{
            return ((n===colors.length)? null :
            <div style={{textAlign:"center", padding:"7px", border:"solid 7px "+colors[n]}}>
                {(n===colors.length-1)? 
                <Comp {...this.props}/>
                : null}
                {divs(n+1)}
            </div>)
          }
    
          return (
            
            <div style={{border:"double 4px gray", padding:"7px"}}>
                {divs(sch)}
            </div>
            
          )
        }
      
      }
    };
}

export {withRainbowFrame};