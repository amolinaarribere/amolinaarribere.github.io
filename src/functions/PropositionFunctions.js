// Proposition
const Aux = require("./AuxiliaryFunctions.js");


export var ManagerPropositionLifeTime = "";
export var ManagerPropositionThresholdPercentage = "";
export var ManagerMinWeightToProposePercentage = "";
export var TreasuryPropositionLifeTime = "";
export var TreasuryPropositionThresholdPercentage = "";
export var TreasuryMinWeightToProposePercentage = "";
export var PCPropositionLifeTime = "";
export var PCPropositionThresholdPercentage = "";
export var PCMinWeightToProposePercentage = "";

export var PendingManagerPropositionLifeTime = "";
export var PendingManagerPropositionThresholdPercentage = "";
export var PendingManagerMinWeightToProposePercentage = "";
export var PendingTreasuryPropositionLifeTime = "";
export var PendingTreasuryPropositionThresholdPercentage = "";
export var PendingTreasuryMinWeightToProposePercentage = "";
export var PendingPCPropositionLifeTime = "";
export var PendingPCPropositionThresholdPercentage = "";
export var PendingPCMinWeightToProposePercentage = "";

export var PendingManagerProp = "";
export var PendingTreasuryProp = "";
export var PendingPCProp = "";

export var ContractName = ""
export var ContractVersion = ""

export async function UpgradeProposition(NewPropositionLifeTime, NewPropositionThresholdPercentage, NewMinWeightToProposePercentage, contract){
  await Aux.CallBackFrame(contract.methods.updateProp(NewPropositionLifeTime, NewPropositionThresholdPercentage, NewMinWeightToProposePercentage).send({from: Aux.account }));
    /*if(contractType == 1){
      await Aux.CallBackFrame(Contracts.certificatePoolManager.methods.updateProp(NewPropositionLifeTime, NewPropositionThresholdPercentage, NewMinWeightToProposePercentage).send({from: Aux.account }));
    }
    else if(contractType == 2){
      await Aux.CallBackFrame(Contracts.Treasury.methods.updateProp(NewPropositionLifeTime, NewPropositionThresholdPercentage, NewMinWeightToProposePercentage).send({from: Aux.account }));
    }
    else if(contractType == 3){
      await Aux.CallBackFrame(Contracts.PriceConverter.methods.updateProp(NewPropositionLifeTime, NewPropositionThresholdPercentage, NewMinWeightToProposePercentage).send({from: Aux.account }));
    }*/
  }
  
  export async function VoteProposition(Vote, contract){
    await Aux.CallBackFrame(contract.methods.voteProposition(Vote).send({from: Aux.account }));
    /*if(contractType == 1){
      await Aux.CallBackFrame(Contracts.certificatePoolManager.methods.voteProposition(Vote).send({from: Aux.account }));
    }
    else if(contractType == 2){
      await Aux.CallBackFrame(Contracts.Treasury.methods.voteProposition(Vote).send({from: Aux.account }));
    }
    else if(contractType == 3){
      await Aux.CallBackFrame(Contracts.PriceConverter.methods.voteProposition(Vote).send({from: Aux.account }));
    }*/
  }

  export async function VotePropositionOnBehalfOf(voter, PropID, Vote, nonce, deadline, signature, contract){
    await Aux.CallBackFrame(contract.methods.votePropositionOnBehalfOf(voter, PropID, Vote, nonce, deadline, signature).send({from: Aux.account }));
    /*if(contractType == 1){
      await Aux.CallBackFrame(Contracts.certificatePoolManager.methods.votePropositionOnBehalfOf(voter, PropID, Vote, nonce, deadline, signature).send({from: Aux.account }));
    }
    else if(contractType == 2){
      await Aux.CallBackFrame(Contracts.Treasury.methods.votePropositionOnBehalfOf(voter, PropID, Vote, nonce, deadline, signature).send({from: Aux.account }));
    }
    else if(contractType == 3){
      await Aux.CallBackFrame(Contracts.PriceConverter.methods.votePropositionOnBehalfOf(voter, PropID, Vote, nonce, deadline, signature).send({from: Aux.account }));
    }*/
  }
  
  export async function RetrievePendingProposition(contract){
    let response = await contract.methods.retrievePendingPropConfig().call();
    PendingPropositionLifeTime = response[0];
    PendingPropositionThresholdPercentage = response[1];
    PendingMinWeightToProposePercentage = response[2];
    PendingProp = response[3];

    /*if(contractType == 1){
      let response = await Contracts.certificatePoolManager.methods.retrievePendingPropConfig().call();
      PendingManagerPropositionLifeTime = response[0];
      PendingManagerPropositionThresholdPercentage = response[1];
      PendingManagerMinWeightToProposePercentage = response[2];
      PendingManagerProp = response[3];
    }
    else if(contractType == 2){
      let response = await Contracts.Treasury.methods.retrievePendingPropConfig().call();
      PendingTreasuryPropositionLifeTime = response[0];
      PendingTreasuryPropositionThresholdPercentage = response[1];
      PendingTreasuryMinWeightToProposePercentage = response[2];
      PendingTreasuryProp = response[3];
    }
    else if(contractType == 3){
      let response = await Contracts.PriceConverter.methods.retrievePendingPropConfig().call();
      PendingPCPropositionLifeTime = response[0];
      PendingPCPropositionThresholdPercentage = response[1];
      PendingPCMinWeightToProposePercentage = response[2];
      PendingPCProp = response[3];
    }*/
  }
  
  export async function RetrieveProposition(contract){
    let response = await contract.methods.retrievePropConfig().call();
      PropositionLifeTime = response[0];
      PropositionThresholdPercentage = response[1];
      MinWeightToProposePercentage = response[2];

    /*if(contractType == 1){
      let response = await Contracts.certificatePoolManager.methods.retrievePropConfig().call();
      ManagerPropositionLifeTime = response[0];
      ManagerPropositionThresholdPercentage = response[1];
      ManagerMinWeightToProposePercentage = response[2];
    }
    else if(contractType == 2){
      let response = await Contracts.Treasury.methods.retrievePropConfig().call();
      TreasuryPropositionLifeTime = response[0];
      TreasuryPropositionThresholdPercentage = response[1];
      TreasuryMinWeightToProposePercentage = response[2];
    }
    else if(contractType == 3){
      let response = await Contracts.PriceConverter.methods.retrievePropConfig().call();
      PCPropositionLifeTime = response[0];
      PCPropositionThresholdPercentage = response[1];
      PCMinWeightToProposePercentage = response[2];
    }*/
  }
