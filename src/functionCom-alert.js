import React from "react";

function Profile(prop){
    const red=()=>{
        alert('red function alert');
    }
    return(<div>
        <h1 onClick={red}>{ prop.text }</h1>
    </div>);
}

export default Profile;