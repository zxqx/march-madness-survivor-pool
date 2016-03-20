import React, { Component } from 'react';
import Team from './Team';

export default class TeamList extends Component {
  render() {
    const { teams } = this.props;

    return (
      <ul>
        {teams.map(team => <Team key={team} team={team} />)}
      </ul>
    );
  }
}
