import React, { Component } from 'react'

class CCC extends Component{
constructor(){
    super();
}
componentDidMount(){
    console.warn('constructor called');
}
    render(){
        return(
            <div>
                <h1>Class component with constructor</h1>
            </div>
        );
    }
}

export default CCC;