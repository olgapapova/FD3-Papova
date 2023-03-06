import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import CardProduct from './CardProduct';
import Form from './Form';

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
        cardMode:0,      // 0-ничего, 1-просмотр, 2-редактирование, 3-добавление
        productEdit:null,
    };

    productSelected=(cod)=> {
      let selectProductArr=[this.state.productsListSt.find(el => el.code===cod)];
      this.setState({productSelectedCode:cod, productInfo:selectProductArr, cardMode:1});
    };

    productEdit=(cod)=> {
      let editProductArr=[this.state.productsListSt.find(el => el.code===cod)];
      this.setState({productEdit:cod, productInfo:editProductArr, cardMode:2, productSelectedCode:null});
    };

    productSave=(cod, objInfo)=> {
      let saveProduct=this.state.productsListSt.map(el => {
        if (el.code===cod){
          el.title=objInfo.name;
          el.price=objInfo.price;
          el.foto=objInfo.url;
          el.count=objInfo.count;
        }
      });
      this.setState({productsListSt:saveProduct});
    }

    productDelete=(code)=> {
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
          cbproductEdit={this.productEdit}
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
        (this.state.productSelectedCode && this.state.cardMode===1) &&
        <CardProduct title={this.state.productInfo[0].title}
          price={this.state.productInfo[0].price}/> 
      }
      {
        (this.state.productEdit && this.state.cardMode===2) &&
        <Form key={this.state.productEdit}
          productInfo={this.state.productInfo}
          cbProductSave={this.productSave}/> 
      }
      </div>
      );
    }
  
  }
  export default Shop;