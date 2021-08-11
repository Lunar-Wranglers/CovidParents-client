import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class SignOut extends Component {
    componentDidMount () {
      const { msgAlert, history, clearUser, user } = this.props
  
      signOut(user)
        .finally(() => msgAlert({
          heading: 'Signed Out Successfully',
          message: messages.signOutSuccess,
          variant: 'success'
        }))
        .finally(() => history.push('/'))
        .finally(() => clearUser())
    }
  
    render () {
      return ''
    }
  }
  
  export default withRouter(SignOut)