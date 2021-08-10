import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      firstName: '',
      lastName: '',
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {}

  // This will reset all the fields when the modal is closed. We can easily change this if we want.
  handleClose = () => this.setState({
    isOpen: false,
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: ''
  })
  handleShow = () => this.setState({ isOpen: true })

  render () {
    const { firstName, lastName, email, emailConfirmation, password, passwordConfirmation, isOpen } = this.state

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
            Sign Up
        </Button>

        <Modal show={isOpen} onHide={this.handleClose}>
          <Modal.Dialog>
            <Modal.Body>
              <Modal.Header className="container" closeButton>
                <Col>
                  <Modal.Title>Sign Up</Modal.Title>
                  Sign up to post, comment, and message
                </Col>
              </Modal.Header>
              <Form onSubmit={this.onSignUp}>
                <Row>
                  <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      value={firstName}
                      // placeholder="Enter name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={lastName}
                      // placeholder="Enter name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Row>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={email}
                    // placeholder="Enter name"
                    onChange={this.handleChange}
                  />
                <Form.Text muted>
                  ex. name@email.com
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="emailConfirmation">
                  <Form.Label>Re-enter email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="emailConfirmation"
                    value={emailConfirmation}
                    // placeholder="Enter name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      name="password"
                      value={password}
                      // placeholder="Enter name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="passwordConfirmation">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      // placeholder="Enter name"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Text muted>
                    Must contain at least 8 characters. Uppercase and lowercase letters, numbers and only ! @ # * symbols are allowed.
                  </Form.Text>
                </Row>
                <div className="centered">
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default SignUp
