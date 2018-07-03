import React, { Component } from 'react'
import {Form, Button, FormGroup, FormControl,Col,ControlLabel, Checkbox, Modal } from 'react-bootstrap/lib';
import { renderTextField } from './form_helpers'


class LoginForm extends Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }
  
  
  render() {
    const {handleSubmit} = this.props

    return (   
    

      <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>


<Form horizontal>
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

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Log In</Button>
    </Col>
  </FormGroup>
</Form>

</Modal.Body>

<Modal.Footer>
<Button onClick={this.handleHide}>Close</Button>
</Modal.Footer>
</Modal.Dialog>
</div>

    );
  }
}

export default LoginForm