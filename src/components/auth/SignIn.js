import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class SignIn extends Component {
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

  onSignIn = event => {}

  // This will reset all the fields when the modal is closed. We can easily change this if we want.
  handleClose = () => this.setState({
    isOpen: false,
    email: '',
    password: ''
  })
  handleShow = () => this.setState({ isOpen: true })

  render () {
    const { email, password, isOpen } = this.state

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
            Sign In
        </Button>

        <Modal show={isOpen} onHide={this.handleClose}>
          <Modal.Dialog>
            <Modal.Body>
              <Modal.Header className="container" closeButton>
                <Col>
                  <Modal.Title>Sign In</Modal.Title>
                </Col>
              </Modal.Header>
              <Form onSubmit={this.onSignIn}>
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
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    value={password}
                    // placeholder="Enter name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <div className="centered">
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    Sign In
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

export default SignIn
