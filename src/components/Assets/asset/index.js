import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { asset: { _id } } = this.props;
    axios.get('http://localhost:4000/assets/delete/' + _id)
      .then()
      .catch((error) => {
        throw error;
      });
  }

  render() {
    const { asset } = this.props;
    return (
      <tr>
        <td>{asset.createrName}</td>
        <td>{asset.assetName}</td>
        <td>{asset.assetNumber}</td>
        <td>
          <Link to={'/edit/' + asset._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button type="button" onClick={this.handleDelete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  asset: PropTypes.objectOf(PropTypes.object)
};

export default TableRow;
