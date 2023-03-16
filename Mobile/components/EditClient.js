import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';
import {mobileEvents} from './events';

class EditClient extends React.PureComponent {

  static propTypes = {
    clientInfo:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
    modeCard:PropTypes.number.isRequired,
  };

  state = {
    clientInfo:this.props.clientInfo,
  }

  clientSave= (EO) => {
    mobileEvents.emit('SaveClicked',this.state.clientInfo);
  };

  changeFam= (EO) => {
    let clientInfoNew={...this.state.clientInfo, fam:EO.target.value};
    this.setState({clientInfo:clientInfoNew});
  };

  changeName= (EO) => {
    let clientInfoNew={...this.state.clientInfo, im:EO.target.value};
    this.setState({clientInfo:clientInfoNew});
  };

  changeOtch= (EO) => {
    let clientInfoNew={...this.state.clientInfo, otch:EO.target.value};
    this.setState({clientInfo:clientInfoNew});
  };

  changeBalance= (EO) => {
    let clientInfoNew={...this.state.clientInfo, balance:parseInt(EO.target.value)};
    this.setState({clientInfo:clientInfoNew});
  };

  clientCancel=(EO) => {
    mobileEvents.emit('CencelClicked',this.state.clientInfo.id);
  };
  
  render() {
    
    return (  
        <div>
        <h2> {(this.props.modeCard===30)?"Редактирование клиента":"Новый клиент"} </h2>
        <span> ID: {this.props.clientInfo.id} </span>
        <br/>
        <label>Фамилия:
          <input style={{marginLeft:15+"px"}} tipe='text' name='Fam' defaultValue={this.props.clientInfo.fam} onChange={this.changeFam}/>
        </label>
        <br/>
        <label>Имя:
          <input style={{marginLeft:48+"px"}} tipe='text' name='Nam' defaultValue={this.props.clientInfo.im} onChange={this.changeName}/>
        </label>
        <br/>
        <label>Отчество:
          <input style={{marginLeft:13+"px"}} tipe='text' name='Otch'defaultValue={this.props.clientInfo.otch} onChange={this.changeOtch}/>
        </label>
        <br/>
        <label>Баланс:
          <input style={{marginLeft:30+"px"}} tipe='number' name='balans' defaultValue={this.props.clientInfo.balance} onChange={this.changeBalance}/>
        </label>
        <br/>
        <input type='button' value='Сохронить' onClick={this.clientSave}/>
        <input type='button' value='Отмена' onClick={this.clientCancel}/>
      </div>
    )
  }
}

export default EditClient;