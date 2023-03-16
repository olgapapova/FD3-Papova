import React from 'react';
import PropTypes from 'prop-types';

import Client from './Client';
import EditClient from './EditClient';
import {mobileEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    activClients:null,
    blockedClients:null,
    delClients:[],
    modeClients:0, //0-все, 1-активные, 2-заблокированные
    modeCard:10,   //10-ничего, 20-добавить, 30-редоктировать
    clientInfo:null,
    maxCodeClient:null,
  };

  componentDidMount = () => {
    mobileEvents.addListener('DelClicked',this.clientDel);
    mobileEvents.addListener('EditClicked',this.clientEdit);
    mobileEvents.addListener('SaveClicked',this.clientSave);
    mobileEvents.addListener('CencelClicked',this.clientCencel);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('DelClicked',this.clientDel);
    mobileEvents.removeListener('EditClicked',this.clientEdit);
    mobileEvents.removeListener('SaveClicked',this.clientSave);
    mobileEvents.removeListener('CencelClicked',this.clientCencel);
  };

  clientDel= (code) => {
    this.state.delClients.push(code);
    let clientsNew=this.state.clients.slice();
    clientsNew=clientsNew.filter( v => v.id !==code);
    this.setState({clients:clientsNew});
  };

  clientsAll= () => {
    if (this.state.modeClients===0)
      return;
    let allCl=this.state.clients.slice();
    this.setState({clients:allCl, modeClients:0});
  };

  clientsActive= () => {
    let activeClients=this.state.clients.slice();
    activeClients=activeClients.filter( v => v.balance>0 && !this.state.delClients.some(s=>s===v.id));
    this.setState({modeClients:1, activClients:activeClients});
  };

  clientsBlocked= () => {
    let blockedClients=this.state.clients.slice();
    blockedClients=blockedClients.filter( v => v.balance<=0 && !this.state.delClients.some(s=>s===v.id));
    this.setState({modeClients:2, blockedClients:blockedClients});
  };

  clientEdit= (code) => {
    let clientsNew=this.state.clients.slice();
    let editClient=clientsNew.find(el => el.id===code);
    this.setState({clientInfo:editClient, modeCard:30});
  };

  newClient= () => {
    let maxCode=this.state.clients.reduce((r,v)=> {return ((v.id>r)?v.id:r)},0);
      this.setState({maxCodeClient:maxCode+1}, ()=>{let newClient={id:this.state.maxCodeClient, fam:"", im:"", otch:"", balance:0};
      this.setState({clientInfo:newClient, modeCard:20});});
  };

  clientSave= (el) => {
    let clientsNew=this.state.clients.slice();
    if (this.state.modeCard===20) {
      clientsNew.push(el);
    }
    if (this.state.modeCard===30) {
      let clientIndex=clientsNew.findIndex(v=> v.id===el.id);
      let newClient={...clientsNew[clientIndex], fam:el.fam, im:el.im, otch:el.otch, balance:el.balance};
      clientsNew[clientIndex]=newClient;
    }
    this.setState({clients:clientsNew, modeCard:10});
  };

  clientCencel= (code) => {
    this.setState({modeCard:10});
  };
  
  render() {
    
    let newClients;
    console.log("MobileCompany render");
    if (this.state.modeClients===1) {
      newClients=this.state.activClients.map(client =>
        <Client key={client.id}
          info={client}/>
    )
    }
    if (this.state.modeClients===2){
      newClients=this.state.blockedClients.map(client =>
        <Client key={client.id}
          info={client}/>
    )
    }
    if (this.state.modeClients===0){
      newClients=this.state.clients.map(client =>
        <Client key={client.id}
          info={client}/>)
    }

    return (
      <div className='MobileCompany'>
        <div className="Button">
          <input type="button" value="Все" onClick={this.clientsAll} />
          <input type="button" value="Активные" onClick={this.clientsActive} />
          <input type="button" value="Заблокированные" onClick={this.clientsBlocked} />
        </div>
        <table>
          <thead></thead>
          <tbody></tbody>
          <tfoot>
            {newClients}
          </tfoot>
        </table>
        <input className="Button" type="button" value="Добавить клиента" onClick={this.newClient} />
        {
          (this.state.modeCard===30) &&
          <EditClient key={this.state.clientInfo.id} 
          modeCard={this.state.modeCard}
          clientInfo={this.state.clientInfo}/>
        }
        {
          (this.state.modeCard===20) &&
          <EditClient key={this.state.clientInfo.id}
          clientInfo={this.state.clientInfo} 
          modeCard={this.state.modeCard}/>
        }
      </div>
    );

  }

}

export default MobileCompany;