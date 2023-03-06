import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends React.Component {
  
  static propTypes= {
    productInfo: PropTypes.arrayOf(    
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        foto: PropTypes.string,
      })
    ),
    cbProductSave:PropTypes.func.isRequired,
  }

  state= {
    currName:this.props.productInfo[0].title,
    currPrice:this.props.productInfo[0].price,
    currUrl:this.props.productInfo[0].foto,
    currCount:this.props.productInfo[0].count,
  }

  changeName=(EO)=> {
    this.setState({currName:EO.target.value})
  }

  changePrice=(EO)=> {
    this.setState({currPrice:EO.target.value})
  }

  changeUrl=(EO)=> {
    this.setState({currUrl:EO.target.value})
  }

  changeCount=(EO)=> {
    this.setState({currCount:EO.target.value})
  }

  productSave=(EO)=> {
    this.props.cbProductSave(this.props.productInfo[0].code,{name:this.state.currName, price:this.state.currPrice, url:this.state.currUrl, count:this.state.currCount});
  }

  render() {

  return (  
    
      <div className='EditProduct'>
        <h2 className='CardTitle'> Редактирование продукта: </h2>
        <span className='EditProduct'> ID: {this.props.productInfo[0].code} </span>
        <br/>
        <label>Название:
          <input className='Lab1' tipe='text' name='nameProd' value={this.state.currName} onChange={this.changeName} />
        </label>
        <br/>
        <label>Цена:
          <input className='Lab2' tipe='text' name='priceProd' value={this.state.currPrice} onChange={this.changePrice} />
        </label>
        <br/>
        <label>URL:
          <input className='Lab3' tipe='text' name='URLProd'value={this.state.currUrl} onChange={this.changeUrl} />
        </label>
        <br/>
        <label>Количество:
          <input className='Lab4' tipe='text' name='countProd' value={this.state.currCount} onChange={this.changeCount} />
        </label>
        <br/>
        <input type='button' value='Save' onClick={this.productSave}/>
        <input type='button' value='Cancel' onClick={this.prCancel}/>
      </div> 
  )
  }

  }
  export default Form;