import React, { Component } from 'react';
import qs from 'querystring';

import api from './services/api';

import UserTable from './components/table/UserTable';
import EditUserForm from './components/forms/EditUserForm';
import AddUserForm from './components/forms/AddUserForm';

import { Link } from "react-router-dom";

class App extends Component {

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

    addUser = user => {
        api.post('api', qs.stringify(user))
            .then(res => {
                this.refreshUserTable();
            });
    };

    deleteUser = id => {
        api.delete(`api/${id}`)
            .then(res => {
                this.refreshUserTable();
            });
    };

    updateUser = (id, user) => {
        api.put(`api/${id}`, qs.stringify(user))
            .then(res => {
                this.refreshUserTable();
            });
        this.setState({ 
            currentUser: { id: null, name: '', username: '' }
        });
        this.setEditing(false);
    };

    editRow = user => {
        this.setState({ 
            currentUser: { id: user.id, name: user.name, username: user.username }
        });
        this.setEditing(true);
    };

    setEditing = isEditing => {
        this.setState({ editing: isEditing });
    };

    render () {
        const { users } = this.state;
        return (
            <div>
                {
                    this.state.editing ? (
                        <div>
                            <h4>Edit User</h4>
                            <EditUserForm 
                                editing={this.state.editing}
                                setEditing={this.setEditing}
                                currentUser={this.state.currentUser}
                                updateUser={this.updateUser} 
                            />
                        </div>
                    ) : (
                        <div>
                            <h4>Add user</h4>
                            <AddUserForm addUser={this.addUser} />
                        </div>
                    )
                } 
                <div>
                    <h5>Users</h5>
                    <UserTable users={users} editRow={this.editRow} deleteUser={this.deleteUser} />
                </div>

                <Link to="/test">Test</Link>
            </div>
        );
    };
};

export default App;