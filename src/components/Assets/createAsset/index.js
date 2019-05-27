import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeCreaterName = this.handleOnChangeCreaterName.bind(this);
    this.handleOnChangeAssetName = this.handleOnChangeAssetName.bind(this);
    this.handleOnChangeAssetNumber = this.handleOnChangeAssetNumber.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      createrName: '',
      assetName: '',
      assetNumber: ''
    };
  }

  handleOnChangeCreaterName(e) {
    this.setState({
      createrName: e.target.value
    });
  }

  handleOnChangeAssetName(e) {
    this.setState({
      assetName: e.target.value
    });
  }

  handleOnChangeAssetNumber(e) {
    this.setState({
      assetNumber: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const {
      history
    } = this.props;
    const {
      createrName,
      assetName,
      assetNumber
    } = this.state;
    const assetObj = { createrName, assetName, assetNumber };
    axios.post('http://localhost:4000/assets/add', assetObj)
      .then(history.push('/list'))
      .catch();
  }

  render() {
    const {
      createrName,
      assetName,
      assetNumber
    } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add New Assets</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="cName">
              Creater Name:
              <input
                type="text"
                id="cName"
                className="form-control"
                value={createrName}
                onChange={this.handleOnChangeCreaterName} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="aName">
              Asset Name:
              <input
                type="text"
                id="aName"
                className="form-control"
                value={assetName}
                onChange={this.handleOnChangeAssetName} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="aNumber">
              Asset Number:
              <input
                type="text"
                id="aNumber"
                className="form-control"
                value={assetNumber}
                onChange={this.handleOnChangeAssetNumber} />
            </label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              id="save"
              value="Register Asset"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  history: PropTypes.objectOf(PropTypes.object)
};
