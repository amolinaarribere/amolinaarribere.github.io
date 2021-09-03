import React from 'react';
const func = require("../../../functions/OwnerFunctions.js");

class AddOwnerComponent extends React.Component{
    state = {
      addOwner : ""
    };
    handleAddOwner = async (event) => {
        event.preventDefault();
      await func.AddOwner(this.state.addOwner, "", this.props.contractType)
      this.setState({ addOwner: "" })
    };
  
    render(){
      return(
        <div>
          <form onSubmit={this.handleAddOwner}>
              <input type="text" name="AddOwner" placeholder="address" 
                  value={this.state.addOwner}
                  onChange={event => this.setState({ addOwner: event.target.value })}/>
              <button>Add Owner</button>
          </form>
        </div>
      );
    }
  }

  export default AddOwnerComponent;