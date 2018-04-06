import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './Main';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main />
        <hr />
        <User name={this.props.user.name}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
