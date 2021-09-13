import React from 'react';
const func = require("../../../functions/TreasuryFunctions.js");

class AssignWithdrawComponent extends React.Component {
    state = {
        amount : 0
      };
    
    handleAssignDividends = async (event) => {
        event.preventDefault();
      await func.AssignDividends();
    };

    handleWithdraw = async (event) => {
        event.preventDefault();
      await func.WithdrawAmount(this.state.amount);
      this.setState({amount: 0});
    };

    render(){
      return (
        <div>
          <p><b>Aggregated Balance :</b> {func.TreasuryAggregatedBalance}</p>
          <br />
          <p><b>Contract Balance :</b> {func.TreasuryBalance}</p>
          <br />
          <p><b>Your current Balance :</b> {func.AccountBalance}</p>
          <form onSubmit={this.handleAssignDividends}>
            <button type="submit">Assign Dividends</button>
          </form>
          <form onSubmit={this.handleWithdraw}>
            <input type="integer" name="Amount" placeholder="amount" 
                        value={this.state.amount}
                        onChange={event => this.setState({ amount: event.target.value })}/>
            <button type="submit">Withdraw Amount</button>
          </form>
          <br />
        </div>
      );
    }
  }
  
export default AssignWithdrawComponent;