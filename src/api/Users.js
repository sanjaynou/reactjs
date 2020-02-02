import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


export default class Users extends Component {

        state = {
            users: null
        }
    
    componentDidMount() {
        axios.get('https://reqres.in/api/users')
            .then((res) => {
                const results = res.data;
                this.setState({ users: results.data })
            })
    }
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users ?
                                this.state.users.map((user, i) =>
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                                : null
                        }


                    </tbody>
                </Table>
            </div>
        )
    }
}
