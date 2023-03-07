import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends React.Component {
  
  static propTypes= {
    productInfo: PropTypes.arrayOf(    
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        foto: PropTypes.string,
      })
    ),
    cbProductSave:PropTypes.func.isRequired,
    cbProductCancel:PropTypes.func.isRequired,
    cbNewProductSave:PropTypes.func.isRequired,
    cardMode:PropTypes.number,
    cbvalid:PropTypes.func.isRequired,
    cbChangedVal:PropTypes.func.isRequired,
  };

  state= {
    currName:this.props.productInfo[0].title,
    currPrice:this.props.productInfo[0].price,
    currUrl:this.props.productInfo[0].foto,
    currCount:this.props.productInfo[0].count,
    nameErorr:"",
    priceErorr:"",
    urlErorr:"",
    countErorr:"",
    validButton: true,
  };

  validInput= ()=> {
    let nameErorr="", priceErorr="", urlErorr="", countErorr="", validButton;
    if (this.state.currName.length<5)
      nameErorr="введите значение не менее 5 символов";
    if (isNaN(this.state.currPrice) || (this.state.currPrice.length<1))
      priceErorr="введите числовое значение не менее 1 символа";
    if (this.state.currUrl.length<7)
      urlErorr="введите значение не менее 7 символов";
    if (isNaN(this.state.currCount) || (this.state.currCount.length<1))
    countErorr="введите числовое значение не менее 1 символа";
    validButton=(!nameErorr) && (!priceErorr) && (!urlErorr) && (!countErorr);
    this.setState({nameErorr, priceErorr, urlErorr, countErorr, validButton},()=>{
      this.props.cbvalid(this.state.validButton)});
  };

  productCancel=()=> {
    this.props.cbProductCancel();
  };

  changeName=(EO)=> {
    this.props.cbChangedVal();
    this.setState({currName:EO.target.value}, this.validInput)
  };

  changePrice=(EO)=> {
    this.setState({currPrice:parseInt(EO.target.value)}, this.validInput);
  };

  changeUrl=(EO)=> {
    this.setState({currUrl:EO.target.value}, this.validInput)
  };

  changeCount=(EO)=> {
    this.setState({currCount:parseInt(EO.target.value)}, this.validInput)
  };

  productSave=(EO)=> {
    if (this.props.cardMode===3)
      this.props.cbNewProductSave({title:this.state.currName, code:this.props.productInfo[0].code, price:this.state.currPrice, foto:this.state.currUrl, count:this.state.currCount});
    this.props.cbProductSave(this.props.productInfo[0].code,{name:this.state.currName, price:this.state.currPrice, url:this.state.currUrl, count:this.state.currCount});
  };

  componentDidMount=()=> {
    this.validInput();
  };

  render() {

  return (  
    
      <div className='EditProduct'>
        <h2 className='CardTitle'> Редактирование продукта: </h2>
        <span className='EditProduct'> ID: {this.props.productInfo[0].code} </span>
        <br/>
        <label>Название:
          <input className='Lab1' tipe='text' name='nameProd' value={this.state.currName} onChange={this.changeName} /> <span className='Valid'>{this.state.nameErorr}</span>
        </label>
        <br/>
        <label>Цена:
          <input className='Lab2' tipe='number' name='priceProd' value={this.state.currPrice} onChange={this.changePrice} /> <span className='Valid'>{this.state.priceErorr}</span>
        </label>
        <br/>
        <label>URL:
          <input className='Lab3' tipe='text' name='URLProd'value={this.state.currUrl} onChange={this.changeUrl} /> <span className='Valid'>{this.state.urlErorr}</span>
        </label>
        <br/>
        <label>Количество:
          <input className='Lab4' tipe='number' name='countProd' value={this.state.currCount} onChange={this.changeCount} /> <span className='Valid'>{this.state.countErorr}</span>
        </label>
        <br/>
        <input type='button' value='Save' disabled={!this.state.validButton} onClick={this.productSave}/>
        <input type='button' value='Cancel' onClick={this.productCancel}/>
      </div> 
  )
  }

  }
  export default Form;