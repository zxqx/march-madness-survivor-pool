import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTeamList } from '../actions/teams';
import TeamList from '../components/TeamList';

@connect(state => ({
  teams: state.teams
}))
export default class TeamListPage extends Component {
  componentWillMount() {
    this.props.dispatch(getTeamList());
  }

  render() {
    const { teams } = this.props;
    return <TeamList teams={teams} />
  }
}
