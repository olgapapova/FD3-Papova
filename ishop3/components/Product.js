import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {
  
  static propTypes= {
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        foto: PropTypes.string,
        cbProductSelect: PropTypes.func.isRequired,
        cbProductSelectDel: PropTypes.func.isRequired,
        productSelectedCod: PropTypes.number,
        productSelectedCodDel: PropTypes.number,

    };

    productClicked= (EO)=> {
      this.props.cbProductSelect(this.props.code);
    };

    productDel= (EO)=> {
      EO.stopPropagation();
      var qv=confirm ('Вы уверены что хотите удалить данный товар?');
      if (qv) {
        this.props.cbProductSelectDel(this.props.code);
        console.log("product: "+this.props.code);
      }
    };

    productEd= (EO)=> {
      
    };
  
    render() {
      let clNameCl=(this.props.code===this.props.productSelectedCod)? 'LineCl' : 'Line'

      return (
      <tr className={clNameCl} onClick={this.productClicked}>
        <td className='Product'> {this.props.title} </td>
        <td className='Line'> {this.props.price} </td>
        <td className='Line'>
          <img className='Image' src={this.props.foto}/>
        </td>
        <td className='Line'> {this.props.count} </td>
        <td className='Button'>
          <input type='button' value='Edit' onClick={this.productEd}/>
          <input type='button' value='Delete' onClick={this.productDel}/>
        </td> 
      </tr>
      )
    }
  
  }
  export default Product;