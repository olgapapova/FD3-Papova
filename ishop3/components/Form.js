import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends React.Component {
  
  static propTypes= {
    
  }

  render() {

  return (  
    
      <div className='EditProduct'>
        <h2 className='CardTitle'> Редактирование продукта: </h2>
        <span className='EditProduct'> ID: {this.props.productEditF} </span>
        <br/>
        <label>Название:
          <input className='Lab1' tipe='text' name='nameProd' value={this.props.title} onChange={this.editValProduct}/>
        </label>
        <br/>
        <label>Цена:
          <input className='Lab2' tipe='text' name='priceProd' value={this.props.price} onChange={this.editValProduct}/>
        </label>
        <br/>
        <label>URL:
          <input className='Lab3' tipe='text' name='URLProd'value={this.props.foto} onChange={this.editValProduct}/>
        </label>
        <br/>
        <label>Количество:
          <input className='Lab4' tipe='text' name='countProd' value={this.props.count} onChange={this.editValProduct}/>
        </label>
        <br/>
        <input type='button' value='Save' onClick={this.productSave}/>
        <input type='button' value='Cancel' onClick={this.prCancel}/>
      </div> 
  )
  }

  }
  export default Form;