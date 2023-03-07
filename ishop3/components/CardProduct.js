import React from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {
  
  static propTypes= {
           title: PropTypes.string.isRequired,
           price: PropTypes.number.isRequired,
    };
  
    render() {

      return (
        <div className='CardProduct'>
          <h2 className='CardTitle'> Карточка продукта: </h2>
          <span className='CardProduct'> {this.props.title} </span>
          <br/>
          <span className='CardProduct'> Price: {this.props.price} </span>
        </div>
      )
    }
  
  }
  export default CardProduct;