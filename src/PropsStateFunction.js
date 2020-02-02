import React from 'react';


const Profile=(prop)=>
{
    return (<div>
        <h1>{prop.text.name}</h1>
        <h1>{prop.data}</h1>
    </div>);
}

export default Profile;

