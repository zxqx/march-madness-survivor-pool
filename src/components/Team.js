import React, { Component } from 'react';

export default class Team extends Component {
  render() {
    const { team } = this.props;

    return <li>{team}</li>;
  }
}
