import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleAction, exampleActionTwo } from '../actions/example'

class firstPage extends Component {
    state = {
        test: true,
    };


    render() {

        return (
            <div className="center-component">
                firstPage
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    add: value => dispatch(exampleAction(value)),
    minus: value => dispatch(exampleActionTwo(value))
});

const mapStateToProps = (state) => ({
    counter: state.example.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(firstPage);
