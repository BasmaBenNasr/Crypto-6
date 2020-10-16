import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Crypto 6</a>
        <form className="form-inline">
          <button className="btn btn-outline-success" type="button" name="Login" onClick={this.props.hundlePage}>
            Login
          </button>{' '}
          <button className="btn btn-outline-success" type="button" name='Start' onClick={this.props.hundlePage}>
           Start
          </button>{' '}
        </form>
      </nav>
    );
  }
}
