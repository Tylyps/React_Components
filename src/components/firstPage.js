import React, { Component } from 'react';

const USERS = [{ name: 'Jakub' }, { name: 'Konrad' }];

const Users = props => (        //presentational component
    <ul>
        {props.users.map((user, id) => (
            <li
                onClick={() => props.onClick(id)}
                key={user.name}
                style={props.activeUser === id ? ({ color: 'red' }) : {}}
            >{user.name}</li>
        ))}
    </ul>
);



class UserContainer extends Component {         //container components
    constructor(props) {
        super(props);
        this.state = {
            users: [{ name: 'Test' }],
            activeUser: null,
        };
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ users: USERS });
        }, 2000)
    };

    onUserClick = id => this.setState({ activeUser: id });

    render() {
        const { users, activeUser } = this.state;
        return <Users users={users} onClick={this.onUserClick} activeUser={activeUser} />;
    };
};



const firstPage = () => (
            <div className="center-component">
            <p>
                <a
                    href='https://flaviocopes.com/react-presentational-vs-container-components/'
                    target='_blank'
                >Source</a> of the example and theory
            </p>
            <UserContainer />
            </div>
);

export default firstPage;
