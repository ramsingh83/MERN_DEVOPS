import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../asset';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { assets: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/assets')
      .then((response) => {
        this.setState({ assets: response.data });
      })
      .catch((error) => {
        throw error;
      });
  }

  tabRow() {
    const { assets } = this.state;
    return assets.map(object => <TableRow asset={object} key={object.assetNumber} />);
  }

  render() {
    return (
      <div>
        <h3 align="center">Asset List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Creater</th>
              <th>Asset</th>
              <th>Asset Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }
}
