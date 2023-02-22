var Filter = React.createClass({

    displayName: 'Filter',
  
    propTypes: {
      listWords:React.PropTypes.array.isRequired,    // список слов
    },
  
    render: function() {

    var wordsListA=this.props.listWords.map( v =>
        React.DOM.option({key:0}, ),
        );  

      return React.DOM.div( {className:'Filter'},
        React.DOM.input( {pype:'checkbox', name:'abc'}),
        React.DOM.input( {pype:'text', name:'filterabc'}),
        React.DOM.input({type:'button',value:'Reset'}),
        React.DOM.select({name:'wordsList',multiple},
          React.DOM.option({value:,value:'Reset'}),
        ),
      );
    },
  
  });