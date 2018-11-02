import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    // initialize state
    this.state = {
      customers: []
    };
  }

  //lifecycle method runs auto once the component is mounted.
  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      // set state once response is obtained
      .then(customers =>
        this.setState({ customers }, () =>
          console.log("Customers fetched..", customers)
        )
      ); //{customers: customers}
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
