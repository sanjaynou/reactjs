import React, { PureComponent } from 'react'
import {Button} from 'react-bootstrap'

export default class Profile extends PureComponent {
    state={
        data:10
    }
    render() {
        console.log('click alert');
        return (
            <div>
                <h1>PureComponent {this.state.data}</h1>
                <Button onClick={()=>{this.setState({data:20})}}>Click Me</Button>
            </div>
        )
    }
}
