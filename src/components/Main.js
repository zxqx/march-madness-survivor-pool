import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        {/* this will render the child routes */}
        {this.props.children}
      </div>
    );
  }
}
