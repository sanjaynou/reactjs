import React, { Component } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

export default class UseRef extends Component {
    userRef = React.createRef();
    UseRefData() {
        this.userRef.current.value = 'Hemant';
    }
    render() {
        return (
            <div>
                <h1>UseRef Function</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={() => this.UseRefData()} variant="outline-secondary">Button</Button>
                    </InputGroup.Prepend>
                    <FormControl ref={this.userRef} aria-describedby="basic-addon1" />
                </InputGroup>

            </div>
        )
    }
}
