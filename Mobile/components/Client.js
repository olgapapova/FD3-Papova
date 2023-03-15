import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';
import {mobileEvents} from './events';

class Client extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  };

  state = {
    info: this.props.info,
  };

  productDel= (EO) => {
    mobileEvents.emit('DelClicked',this.props.info.id);
  };

  clientEd= (EO) => {
    mobileEvents.emit('EditClicked',this.props.info.id);
  }
  
  render() {
    console.log("Client id="+this.state.info.id+" render");

    return (  
      <tr>
        <td className='Client'> {this.state.info.fam} </td>
        <td className='Client'> {this.state.info.im} </td>
        <td className='Client'> {this.state.info.otch} </td>
        <td className='Client'> {this.state.info.balance} </td>
      <td className='Client' style={{backgroundColor: this.state.info.balance>0 ? "lawngreen": "coral"}}> {(this.state.info.balance>0)? "active":"blocked"} </td>
        <td>
          <input type='button' value='Редактировать' onClick={this.clientEd}/>
        </td> 
        <td>
          <input type='button' value='Удалить' onClick={this.productDel}/>
        </td>
      </tr>
    )
  }
}

export default Client;