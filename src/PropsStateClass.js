import React from 'react';


class Profile extends React.Component{
    render(){
        return(
            <>
            <h1>{this.props.data}</h1>
            <h1>{this.props.text.name}</h1>
            </>
        );
    }
}

export default Profile;
