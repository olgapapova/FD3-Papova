var Filter = React.createClass({

    displayName: 'Filter',
  
    propTypes: {
      listWords:React.PropTypes.array.isRequired,    // список слов 
    },

    getInitialState: function() {
      return { 
        textValueSt:"",
        listWordsSt:this.props.listWords,
        currentListWordsSt:null,
        currentListWordsSortSt:null,
        NoSortListWordsSt:this.props.listWords.slice(0),
        sortListWordsSt:this.props.listWords.slice(0).sort(),
        checkboxSt:false,
      };
    },

    filterAbc: function (EO) { 
      if (this.state.checkboxSt===false) {
        (this.state.textValueSt==="")? this.setState({listWordsSt:this.state.sortListWordsSt}): this.setState({listWordsSt:this.state.currentListWordsSortSt});
        this.setState({checkboxSt:true});
      }
      if (this.state.checkboxSt===true) {
        (this.state.textValueSt==="")? this.setState({listWordsSt:this.state.NoSortListWordsSt}): this.setState({listWordsSt:this.state.currentListWordsSt});
        this.setState({checkboxSt:false});
      }
    }, 

    filterWords: function (EO) {
      this.setState({textValueSt:EO.target.value}, ()=> {
      var copyListWordsFilt=[];
      if (this.state.textValueSt ==="") {
        (this.state.checkboxSt===false)?
        this.setState({listWordsSt:this.state.NoSortListWordsSt}):this.setState({listWordsSt:this.state.sortListWordsSt});
      }
      if (this.state.textValueSt !=="") {
        this.setState({listWordsSt:this.props.listWords}, ()=> { 
          this.state.listWordsSt.map(s => {
            var wordsListIndex=s.indexOf(this.state.textValueSt);
            if (wordsListIndex!==-1) {
              copyListWordsFilt.push(s);
            }
          });
          var copyListWordsFiltSort=copyListWordsFilt.slice(0).sort();
          this.setState({currentListWordsSt:copyListWordsFilt, currentListWordsSortSt:copyListWordsFiltSort}, ()=> (this.state.checkboxSt===false)?this.setState({listWordsSt:copyListWordsFilt}):this.setState({listWordsSt:copyListWordsFiltSort}));
        })
      }
      });
    },

    resetFilter: function (EO) {
      this.setState({checkboxSt:false});
      this.setState({listWordsSt:this.props.listWords});
      this.setState({textValueSt:""});
    },
  
    render: function() {

    var wordsListA=this.state.listWordsSt.map( (v,i) =>
        React.DOM.option({key:i}, v),
        );  

      return React.DOM.form( {className:'Filter'},
        React.DOM.input( {className:'CheckboxCl',type:'checkbox', name:'abc', onClick:this.filterAbc,checked:(this.state.checkboxSt===true)}),
        React.DOM.input( {className:'TextCl',type:'text', name:'filterabc',value:this.state.textValueSt,onChange:this.filterWords}),
        React.DOM.input({className:'ButtonCl',type:'button',value:'Reset',onClick:this.resetFilter}),
        React.DOM.br(),
        React.DOM.select({className:'ListCl',name:'wordsList', size:5}, wordsListA),
      );
    },
  
  });