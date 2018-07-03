import React, { Component } from 'react'
import {Form, Button, FormGroup, FormControl,Col,ControlLabel, Checkbox, Modal } from 'react-bootstrap/lib';
import Home from '../Home'
class SignupForm extends Component {


  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }


render(){
  return(

    <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                    <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form horizontal>
                    <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} sm={2}>
                            Email
                            </Col>
                            <Col sm={10}>
                            <FormControl type="text" placeholder="Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                            Email
                            </Col>
                            <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                            Password
                            </Col>
                            <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                            Password Confirm
                            </Col>
                            <Col sm={10}>
                            <FormControl type="password" placeholder="Re-type Password" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                            <Button type="submit">Sign Up</Button>
                            </Col>
                        </FormGroup>
                        </Form>;
                    </Modal.Body>

                    <Modal.Footer>
                    <Button>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
  )
}

}

export default SignupForm