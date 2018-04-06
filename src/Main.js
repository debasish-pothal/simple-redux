import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDefault, setName } from '../src/actions';

class Main extends Component {
    render() {
        return(
            <div>
                <h2>Main Component</h2>
                <button className="btn btn-primary" onClick={() => this.props.changeName('REACT')}>Change Name</button>
                <button className="btn btn-success" onClick={() => this.props.defaultName()}>Default</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch(setName(name))
        },

        defaultName: () => {
            dispatch(setDefault())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);