import  React from 'react'
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'
import { links, footer } from '../../stylesheets/stylesheet.scss'

const Footer = () => {
  return (
      <Navbar bg='secondary' id='footer'>
        <div className='links'>
          <Link to=''>About</Link>
          <Link to=''>Contact</Link>
          <Link to=''>FAQ</Link>
          <Link to=''>Terms & Conditions</Link>
          <Link to=''>Privacy</Link>
          <Link to=''>Do Not Sell My Personal Info</Link>
        </div>
      </Navbar>
  )
}

export default Footer