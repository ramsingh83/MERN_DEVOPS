import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;
    axios.get('http://localhost:4000/assets/edit/' + id)
      .then((response) => {
        this.setState({
          createrName: response.data.createrName,
          assetName: response.data.assetName,
          assetNumber: response.data.assetNumber
        });
      })
      .catch((error) => {
        throw error;
      });
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
      history,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    const {
      createrName,
      assetName,
      assetNumber
    } = this.state;
    const obj = { createrName, assetName, assetNumber };
    axios.post('http://localhost:4000/assets/update/' + id, obj)
      .then();

    history.push('/list');
  }

  render() {
    const {
      createrName,
      assetName,
      assetNumber
    } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update assets</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="author">
              Creater Name:
              <input
                type="text"
                id="author"
                className="form-control"
                value={createrName}
                onChange={this.handleOnChangeCreaterName} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Asset Name:
              <input
                type="text"
                id="name"
                className="form-control"
                value={assetName}
                onChange={this.handleOnChangeAssetName} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="number">
              Asset Number:
              <input
                type="text"
                id="number"
                className="form-control"
                value={assetNumber}
                onChange={this.handleOnChangeAssetNumber} />
            </label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update assets"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

Edit.propTypes = {
  history: PropTypes.objectOf(PropTypes.object),
  match: PropTypes.objectOf(PropTypes.object)
};
