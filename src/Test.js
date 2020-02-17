import React, { Component } from 'react';

import api from './services/api';

import TestUserTable from './TestUserTable';

class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            currentUser: { id: null, name: '', username: '' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshUserTable();
    }

    refreshUserTable() {
        this.usersData = api.get('api')
            .then(response => response.data)
            .then(data => {
                this.setState({ 
                    users: data.data,
                    setUsers: data.data
                });
            });
    }

    render () {
        const { users } = this.state;
        return (
            <div>
                <h5>Users</h5>
                <TestUserTable users={users} />
            </div>
        );
    };
};

export default Test;