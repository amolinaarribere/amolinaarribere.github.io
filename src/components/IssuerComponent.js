import React from 'react';
import CertificateComponent from './subcomponents/Certificates/CertificateComponent.js';
import OwnerComponent from './subcomponents/Owners/OwnerComponent.js';
import ProviderPoolComponent from './subcomponents/ProvidersPools/ProviderPoolComponent.js';
import ListPoolsIssuers from './subcomponents/Factory/ListPoolsIssuers.js';
import CreatePoolIssuer from './subcomponents/Factory/CreatePoolIssuer.js';

const ProviderPoolFunc = require("../functions/ProviderPoolFunctions.js");
const BrowserStorageFunctions = require("../functions/BrowserStorageFunctions.js");
const Ownerfunc = require("../functions/OwnerFunctions.js");
const Contracts = require("../functions/Contracts.js");


  class IssuerComponent extends React.Component {
    componentWillMount() {
      if(ProviderPoolFunc.providerAddress != null && ProviderPoolFunc.providerAddress !== "" && ProviderPoolFunc.providerAddress !== "undefined"){
        ProviderPoolFunc.SelectProviderPool(ProviderPoolFunc.providerAddress, this.state.contractType);
      }
   }

   constructor(props) {
    super(props)
    this.refresh = this.refresh.bind(this)
  }
  
  refresh() {
    this.setState({})
  }

    state = {
      contractType : 3
    };
    
    render(){
      return (
        <div>
          <CreatePoolIssuer contract={Contracts.provider}
            contractType={this.state.contractType} 
            refresh={this.refresh}/>
          <br />
          <br />
          <ListPoolsIssuers contract={Contracts.provider}
            contractType={this.state.contractType} 
            Key={BrowserStorageFunctions.providerKey} 
            refresh={this.refresh}/>
          <br />
          {
           (Ownerfunc.isProviderOwner)?(
             <div>
              <CertificateComponent contract={Contracts.provider}
                contractType={this.state.contractType} 
                refresh={this.refresh}
                price={0}/>
              <br />
              <OwnerComponent contract={Contracts.provider}
                contractType={this.state.contractType} 
                refresh={this.refresh}/>
              <br/>
              <ProviderPoolComponent contract={Contracts.provider}
                contractType={this.state.contractType} 
                refresh={this.refresh}/>
            </div>
           ):null}
        </div>
      );
    }
  }
  

export default IssuerComponent;