import React, { Component } from 'react';
import {Form, Button, FormGroup, FormControl, Col,ControlLabel, Checkbox, Modal } from 'react-bootstrap/lib';
import { reduxForm, Field } from 'redux-form'
import { renderTextField } from './form_helpers'
import { Link } from 'react-router-dom'


class SigninForm extends Component {

constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Sorry: </strong>{this.props.errorMessage}
      </div>
    }
  }
  
  
  render() {
    const {handleSubmit} = this.props

    return (   

      <div className="static-modal">
      {this.renderAlert()}

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>


<Form horizontal onSubmit={handleSubmit}>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Username
    </Col>
    <Col sm={10}>
    <FormControl type="text"  component={renderTextField} />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
    <FormControl type="password"  component={renderTextField} />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
    <Button type="submit">Sign In</Button>
    </Col>
  </FormGroup>
</Form>

</Modal.Body>

<Modal.Footer>

<Button> <Link to="/" className="navbar-brand">Close</Link></Button>


</Modal.Footer>
</Modal.Dialog>
</div>

    );
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm)