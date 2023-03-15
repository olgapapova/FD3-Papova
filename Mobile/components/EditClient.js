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
  
  render() {
    
    return (  
        <div>
        <h2> {(this.props.modeCard===30)?"Редактирование клиента":"Новый клиент"} </h2>
        <span> ID: {this.props.clientInfo.id} </span>
        <br/>
        <label>Фамилия:
          <input tipe='text' name='Fam' defoltvalue={this.props.clientInfo.fam} onChange={this.changeName}/>
        </label>
        <br/>
        <label>Имя:
          <input tipe='text' name='Nam' value={"bbb"} onChange={this.changePrice}/>
        </label>
        <br/>
        <label>Отчество:
          <input tipe='text' name='Otch'value={"nnn"} onChange={this.changeUrl}/>
        </label>
        <br/>
        <label>Баланс:
          <input tipe='number' name='balans' value={"ddd"} onChange={this.changeCount}/>
        </label>
        <br/>
        <input type='button' value='Сохронить' onClick={this.clientSave}/>
        <input type='button' value='Отмена' onClick={this.clientCancel}/>
      </div>
    )
  }
}

export default EditClient;