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
            Launch demo modal
        </Button>

        <Modal show={isOpen} onHide={this.handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>

            <Modal.Body>
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
                  <Button
                    variant="primary"
                    type="submit"
                    className="signUp-btn"
                  >
                    Submit
                  </Button>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default SignUp
