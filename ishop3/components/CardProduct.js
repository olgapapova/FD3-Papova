import React from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {
  
  static propTypes= {
    info: PropTypes.arrayOf(   
         PropTypes.shape({
           code: PropTypes.number.isRequired,
           count: PropTypes.number.isRequired,
           title: PropTypes.string.isRequired,
           price: PropTypes.string.isRequired,
           foto: PropTypes.string,
         })
    )
    };
  
    render() {

      return (
        <div className='CardProduct'>
          <h2 className='CardTitle'> Карточка продукта: </h2>
          <span className='CardProduct'> {this.props.info[0].price} </span>
          <br/>
          <span className='CardProduct'> Price:  </span>
        </div>
      )
    }
  
  }
  export default CardProduct;