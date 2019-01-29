import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleAction, exampleActionTwo } from '../actions/example'

const withRedux = (WrappedComponent) => {

    class HOC extends Component {

        onAdd = () => this.props.add(5);

        onMinus = () => this.props.minus(5);

        render() {
            return <WrappedComponent {...this.props} onAdd={this.onAdd} onMinus={this.onMinus}  />;
        }
    }
    const mapDispatchToProps = (dispatch) => ({
        add: value => dispatch(exampleAction(value)),
        minus: value => dispatch(exampleActionTwo(value))
    });

    const mapStateToProps = (state) => ({
        counter: state.example.counter,
        lastAdded: state.example.lastAdded,
        lastMinus: state.example.lastMinus,
    });

    return connect(mapStateToProps, mapDispatchToProps)(HOC)
};

const testComponent = props => (
    <div>
        <p>counter: {props.counter}</p>
        <p>Last added number: {props.lastAdded}</p>
        <p>Last deducted number: {props.lastMinus}</p>
        <p><button onClick={props.onAdd}>Add 5</button></p>
        <p><button onClick={props.onMinus}>Subtract 5</button></p>
    </div>
);

const WrappedComponent = withRedux(testComponent);

const fourthPage = () => (
    <div className="center-component">
    <p>
        <a
            href='https://reactjs.org/docs/higher-order-components.html'
            target='_blank'
        >Source</a> of the example and theory
    </p>
        <WrappedComponent />
    </div>
);


export default fourthPage;
