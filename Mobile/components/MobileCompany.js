import React from 'react';
import PropTypes from 'prop-types';

import Client from './Client';
import EditClient from './Client';
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
    delClients:[],
    modeClients:0, //0-все, 1-активные, 2-заблокированные
    modeCard:10,   //10-ничего, 20-добавить, 30-редоктировать
    clientInfo:null,
  };

  componentDidMount = () => {
    mobileEvents.addListener('DelClicked',this.clientDel);
    mobileEvents.addListener('EditClicked',this.clientEdit);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('DelClicked',this.clientDel);
    mobileEvents.removeListener('EditClicked',this.clientEdit);
  };

  clientDel= (code) => {
    this.state.delClients.push(code);
    let clientsNew=this.state.clients.slice();
    clientsNew=clientsNew.filter( v => v.id !==code);
    this.setState({clients:clientsNew}, ()=>console.log(this.state.clients));
  }

  clientsAll= () => {
    let addClients;
    let allClients=this.state.clients.slice();
    console.log(allClients);
    if (this.state.modeClients===0)
      return;
    if (this.state.modeClients===1) {
      addClients=this.props.clients.filter( v => v.balance<=0 && !this.state.delClients.some(s=>s===v.id))
    }
    if (this.state.modeClients===2) {
      addClients=this.props.clients.filter( v => v.balance>0 && !this.state.delClients.some(s=>s===v.id))
    }
    allClients=allClients.concat(addClients);
    this.setState({clients:allClients, modeClients:0});
  };

  clientsActive= () => {
    let activeClients=this.props.clients.slice();
    activeClients=activeClients.filter( v => v.balance>0 && !this.state.delClients.some(s=>s===v.id));
    this.setState({clients:activeClients, modeClients:1});
  };

  clientsBlocked= () => {
    let blockedClients=this.props.clients.slice();
    blockedClients=blockedClients.filter( v => v.balance<=0 && !this.state.delClients.some(s=>s===v.id));
    this.setState({clients:blockedClients, modeClients:2});
  };

  clientEdit= (code) => {
    console.log(code);
    let clientsNew=this.state.clients.slice();
    let editClient=clientsNew.find(el => el.id===code);
    console.log(editClient);
    this.setState({clientInfo:editClient, modeCard:30});
  };
  
  render() {
    console.log(this.state.clients);

    console.log("MobileCompany render");
    let newClients=this.state.clients.map(client =>
        <Client key={client.id}
          info={client}/>
    )

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
      </div>
    )
    ;

  }

}

export default MobileCompany;