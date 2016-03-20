import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PickResultsList from '../components/PickResultsList';

export default class PickResultsPage extends Component {
  render() {
    return <PickResultsList />
  }
}
