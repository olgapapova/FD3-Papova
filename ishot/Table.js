var TablePr = React.createClass({

    displayName: 'TablePr',
  
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
       )
  
    },
  
    render: function() {

      var cellsContents=this.props.productsList.map( v =>
        React.DOM.tr({key:v.code,className:'Line'},
          React.DOM.td({className:'Product'},v.title),
          React.DOM.td({className:'Line'},v.price),
          React.DOM.td({className:'Line'},v.foto),
          React.DOM.td({className:'Line'},v.count),
        )
        );
      return React.DOM.table( {className:'TablePr'},
        React.DOM.caption( {className:'NameStore'}, this.props.storeName ),
        cellsContents
      );
    },
  
  });