import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import CardProduct from './CardProduct';
import Form from './Form';

class Shop extends React.Component {
  
    static propTypes= {
      storeName: PropTypes.string.isRequired,
      productsList: PropTypes.arrayOf(    // список продуктов
         PropTypes.shape({
           code: PropTypes.number.isRequired,
           count: PropTypes.number.isRequired,
           title: PropTypes.string.isRequired,
           price: PropTypes.number.isRequired,
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
        maxCodeProduct:null,
        validSt:true,
        changedValSt:false,
    };

    productSelected=(cod)=> {
      if (this.state.cardMode===3 || this.state.changedValSt===true)
        return;
      let selectProductArr=[this.state.productsListSt.find(el => el.code===cod)];
      this.setState({productSelectedCode:cod, productInfo:selectProductArr, cardMode:1, productEdit:null});
    };

    productEdit=(cod)=> {
      let editProductArr=[this.state.productsListSt.find(el => el.code===cod)];
      this.setState({productEdit:cod, productInfo:editProductArr, cardMode:2, productSelectedCode:null});
    };

    productSave=(cod, objInfo)=> {
      let newProductsListSt=this.state.productsListSt.slice();
      let productIndex=newProductsListSt.findIndex(el=> el.code===cod);
      if (productIndex===-1)
        return;
      let newProduct={...newProductsListSt[productIndex]}
      newProduct.title=objInfo.name;
      newProduct.price=objInfo.price;
      newProduct.foto=objInfo.url;
      newProduct.count=objInfo.count;
      newProductsListSt[productIndex]=newProduct;
      this.setState({productsListSt:newProductsListSt, cardMode:0, changedValSt:false});
    };

    newProductSave=(objInfo)=> {
      let newProductsList=this.state.productsListSt.slice();
      newProductsList.push(objInfo);
      console.log("objInfo"+objInfo.title);
      this.setState({productsListSt:newProductsList, cardMode:0, changedValSt:false});
    };

    productDelete=(code)=> {
      var productListFilt=this.state.productsListSt.filter(s => code !== s.code);
      this.setState( {productsListSt:productListFilt, cardMode:0} )
    };

    productCancel=()=> {
      this.setState({cardMode:0, validSt:true, changedValSt:false});
    };

    productNew=()=> {
      let maxCode=this.state.productsListSt.reduce((r,v)=> {return ((v.code>r)?v.code:r)},0);
      this.setState({maxCodeProduct:maxCode+1}, ()=>{let newProductList=[{code:this.state.maxCodeProduct, title:"", price:0, foto:"", count:0}];
      this.setState({productInfo:newProductList, cardMode:3, productEdit:null, productSelectedCode:null});});
      
    };

    valid=(val)=> {
      this.setState({validSt:val});
    };

    changedVal=()=> {
      this.setState({changedValSt:true});
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
          productEdit={this.state.productEdit}
          validSt={this.state.validSt}
          changedValSt={this.state.changedValSt}
        />
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
      {
        (this.state.cardMode===0 || this.state.cardMode===1) &&
        <input type='button' value='New product' disabled={!this.state.validSt} onClick={this.productNew}/>
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
          cbProductSave={this.productSave}
          cbNewProductSave={this.newProductSave}
          cbProductCancel={this.productCancel}
          cbvalid={this.valid}
          cbChangedVal={this.changedVal}/> 
      }
      {
        (this.state.cardMode===3) &&
        <Form key={this.state.maxCodeProduct}
          productInfo={this.state.productInfo}
          cbNewProductSave={this.newProductSave}
          cbProductSave={this.productSave}
          cbProductCancel={this.productCancel}
          cardMode={this.state.cardMode}
          cbvalid={this.valid}
          cbChangedVal={this.changedVal}/> 
      }
      </div>
      );
    }
  
  }
  export default Shop;