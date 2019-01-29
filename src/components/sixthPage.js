import React, { Component } from 'react';

class List extends React.PureComponent {
    render() {
        return (
            <ul>
                {this.props.list.map(point => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        );
    }
}

const List2 = ({ list }) => (
    <ul>
        {list.map(point => (
            <li key={point}>{point}</li>
        ))}
    </ul>
);

class sixthPage extends Component {
    state = {
        list: [0,1,2,3],
    };

    addNew = () => this.setState(prevState => {
        const last = prevState.list[prevState.list.length - 1] + 1;
        return { list: [...prevState.list, last] }
    })

    render() {
        const { list } = this.state;
        return (
            <div className="center-component">
                <p>
                    <a
                        href='https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b'
                        target='_blank'
                    >Source</a> of the example and theory
                </p>
                <button onClick={this.addNew}>Add new</button>
                <List list={list} />
                <List2 list={list} />
            </div>
        );
    };
};

export default sixthPage;
