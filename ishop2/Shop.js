var Shop = React.createClass({

    displayName: 'Shop',
  
    propTypes: {
      storeName: React.PropTypes.string.isRequired, // название магазина
      productsList:React.PropTypes.arrayOf(    // список продуктов
         React.PropTypes.shape({
           code: React.PropTypes.number.isRequired,
           count: React.PropTypes.number.isRequired,
           title: React.PropTypes.string.isRequired,
           price: React.PropTypes.string.isRequired,
           foto: React.PropTypes.string,
         })
       ),
       columnName:React.PropTypes.arrayOf(    // шапка таблицы
       React.PropTypes.shape({
         codeZ: React.PropTypes.number.isRequired,
         countZ: React.PropTypes.string.isRequired,
         titleZ: React.PropTypes.string.isRequired,
         priceZ: React.PropTypes.string.isRequired,
         fotoZ: React.PropTypes.string.isRequired,
         control: React.PropTypes.string.isRequired,
       })
     )
    },

    getInitialState: function() {
      return { 
        productSelectedCode: null,
        productsListSt: this.props.productsList,
      };
    },

    productSelected: function(code) {
      this.setState( {productSelectedCode:code}, ()=> {console.log (this.state.productSelectedCode)});
    },

    productDelete: function(code) {
      var productListFilt=this.state.productsListSt.filter(s => code !== s.code);
      this.setState( {productsListSt:productListFilt} )
    },
  
    render: function() {

      var culumnName=this.props.columnName.map( v =>
        React.DOM.tr({className:'LineZ',key:v.codeZ},
          React.DOM.th( {className:'LineZ'}, v.titleZ),
          React.DOM.th( {className:'LineZ'}, v.priceZ),
          React.DOM.th( {className:'LineZ'}, v.fotoZ),
          React.DOM.th( {className:'LineZ'}, v.countZ),
          React.DOM.th( {className:'LineZ'}, v.control),
        ),
      );

      var cellsContents=this.state.productsListSt.map( v =>
        React.createElement(Product,{key:v.code,
          count:v.count,
          title:v.title,
          price:v.price,
          code:v.code,
          foto:v.foto,
          cbProductSelect:this.productSelected,
          cbProductSelectDel:this.productDelete,
          productSelectedCod:this.state.productSelectedCode,
          productSelectedCodDel:this.state.productSelectedCodeDel,
        }),
        );

      return React.DOM.table( {className:'Shop'},
        React.DOM.caption( {className:'NameStore'}, this.props.storeName ),
        React.DOM.thead( null),
        React.DOM.tbody( null),
        React.DOM.tfoot( {className:'Foot'}, 
           culumnName,
          cellsContents
        ),
      );
    },
  
  });