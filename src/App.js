import React, { Component } from 'react';
import './App.css';
import SubTotal from './Components/Subtotal/Subtotal';
import PickupSaving from './Components/PickupSaving/PickupSaving';
import TaxeesFee from './Components/TaxeesFee/TaxeesFee';
import EstimatedTotal from './Components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './Components/ItemDetails/ItemDetails';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      pickupSaving: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }
  }

  render() {
    return (
      <div className="purchase-card-container">
        <div className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSaving price={this.state.pickupSaving} />
          <TaxeesFee taxes={this.state.taxes.toFixed(2)} />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
        </div>
      </div >
    )
  }
}

export default App;
