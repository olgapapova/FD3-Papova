var Product = React.createClass({

    displayName: 'Product',
  
    propTypes: {
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        foto: React.PropTypes.string,
        cbProductSelect:React.PropTypes.func.isRequired,
        cbProductSelectDel:React.PropTypes.func.isRequired,
        productSelectedCod:React.PropTypes.number,
        productSelectedCodDel:React.PropTypes.number,
    },

    productClicked: function(EO) {
      this.props.cbProductSelect(this.props.code);
      console.log("product: "+this.props.code+" "+this.props.productSelectedCod);
    },

    productDel: function(EO) {
      var qv=confirm ('Вы уверены что хотите удалить данный товар?');
      if (qv) {
        this.props.cbProductSelectDel(this.props.code);
        console.log("product: "+this.props.code);
      }
      else
        return;
    },
  
    render: function() {

      return React.DOM.tr((this.props.code===this.props.productSelectedCod)?{className:'LineCl',
        onClick:this.productClicked}:{className:'Line',onClick:this.productClicked},
        React.DOM.td({className:'Product'},this.props.title),
        React.DOM.td({className:'Line'},this.props.price),
        React.DOM.td({className:'Line'},
          React.DOM.img({className:'Image', src: this.props.foto})
        ),
        React.DOM.td({className:'Line'},this.props.count),
        React.DOM.td({className:'Button'},
          React.DOM.input({type:'button',value:'Delete',onClick:this.productDel}),
      )
      )
    },
  
  });