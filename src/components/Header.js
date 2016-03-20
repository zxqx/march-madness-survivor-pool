import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from '../style/header.css';

@CSSModules(styles)
export default class Header extends Component {
  render() {
    const { styles } = this.props;

    return (
      <div>
        <h2 className={styles.h2}>March Madness Survivor Pool</h2>

        <Link to={'/'}>Home Page</Link> -&nbsp;
        <Link to={'/another'}>Another Page</Link>
      </div>
    );
  }
}
