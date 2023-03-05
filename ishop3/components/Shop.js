import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import CardProduct from './CardProduct';
//import Form from './Form';

class Shop extends React.Component {
  
    static propTypes= {
      storeName: PropTypes.string.isRequired, // название магазина
      productsList: PropTypes.arrayOf(    // список продуктов
         PropTypes.shape({
           code: PropTypes.number.isRequired,
           count: PropTypes.number.isRequired,
           title: PropTypes.string.isRequired,
           price: PropTypes.string.isRequired,
           foto: PropTypes.string,
         })
       ),
       columnName: PropTypes.arrayOf(    // шапка таблицы
       PropTypes.shape({
         codeZ: PropTypes.number.isRequired,
         countZ: PropTypes.string.isRequired,
         titleZ: PropTypes.string.isRequired,
         priceZ: PropTypes.string.isRequired,
         fotoZ: PropTypes.string.isRequired,
         control: PropTypes.string.isRequired,
       })
     )
    };

    state= {
        productSelectedCode: null,
        productsListSt: this.props.productsList,
        productInfo:null,
    };

    productSelected= (code)=> {
      this.setState( {productSelectedCode:code}, ()=> {
        console.log("cod"+this.state.productSelectedCode)
        let selectProductArr=[this.state.productsListSt.find(el => el.code===this.state.productSelectedCode)];
        console.log("productInfoArr"+selectProductArr[0].title);
        this.setState( {productInfo:selectProductArr}, ()=> {console.log("productInfo"+this.state.productInfo[0].price)});
      }
      )
    };

    productDelete= (code)=> {
      var productListFilt=this.state.productsListSt.filter(s => code !== s.code);
      this.setState( {productsListSt:productListFilt} )
    };

    render() {

      let culumnName=this.props.columnName.map( v =>
        <tr className='LineZ' key={v.codeZ}>
          <th className='LineZ'> {v.titleZ} </th>
          <th className='LineZ'> {v.priceZ} </th>
          <th className='LineZ'> {v.fotoZ} </th>
          <th className='LineZ'> {v.countZ} </th>
          <th className='LineZ'> {v.control} </th>
        </tr>
      );

      let cellsContents=this.state.productsListSt.map( v =>
        <Product key={v.code}
          count={v.count}
          title={v.title}
          price={v.price}
          code={v.code}
          foto={v.foto}
          cbProductSelect={this.productSelected}
          cbProductSelectDel={this.productDelete}
          productSelectedCod={this.state.productSelectedCode}
          productSelectedCodDel={this.state.productSelectedCodeDel}/>
        );

      return (
      <div className='Shop'>
      <table className='Shop'>
        <caption className='NameStore'> {this.props.storeName} </caption>
        <thead></thead>
          <tbody></tbody>
            <tfoot className='Foot'> 
              {culumnName}
              {cellsContents}
            </tfoot>
      </table>
      {(this.state.productEdit ===null)?
        <input type='button' value='New product' disabled={this.state.disabledNewSt} onClick={this.productNewPr}/>
      :null
      }
      {
        this.state.productSelectedCode &&
        <CardProduct info={this.state.productInfo}/> 
      }
      </div>
      );
    }
  
  }
  export default Shop;