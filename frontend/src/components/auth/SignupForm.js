import React, { Component } from 'react'
import {Form, Button, FormGroup, FormControl,Col,ControlLabel, Checkbox, Modal } from 'react-bootstrap/lib';
import { reduxForm, Field} from 'redux-form'
import { renderTextField } from './form_helpers'
import { Link } from 'react-router-dom'

class SignupForm extends Component {
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
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }



render(){
  const {handleSubmit} = this.props
  return(
    <div className="static-modal">
     {this.renderAlert()}
    <Modal.Dialog show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
                    <Modal.Title >Sign Up</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form horizontal onSubmit={handleSubmit}>
                    <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} sm={2}>
                            Name:
                            </Col>
                            <Col sm={10}>
                            <FormControl type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                            Email:
                            </Col>
                            <Col sm={10}>
                            <FormControl type="email"  component={renderTextField} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                            Password:
                            </Col>
                            <Col sm={10}>
                            <FormControl type="password"  component={renderTextField} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                            Confirm Password: 
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
                            <Button type="submit">Sign Up</Button>
                            </Col>
                        </FormGroup>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button> <Link to="/" className="navbar-brand">Close</Link></Button>
                    </Modal.Footer>
                </Modal.Dialog>
    </div>

  )
}
}

const validate = values => {
  const errors = {}

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Passwords must match'
  }

  if (!values.email) {
    errors.email = 'Please enter an email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please confirm your password'
  }

  return errors
}

export default reduxForm({
  form: 'signup',
  validate
}) (SignupForm)
