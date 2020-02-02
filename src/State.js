import React from 'react';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Sanjay',
            email: 'sanjay.adhek@gmail.com'
        }

    }
    updateState() {
        this.setState({
            name: "Munazir",
            email: "munazir@gmail.com"
        })
    }
    render() {
        return (
            <>
                <h1>Hello {this.state.name}</h1>
                <p>Your Email is : {this.state.email}</p>
                <button onClick={() => this.updateState()}>Update Button</button>
            </>
        );
    }
}

export default Profile;