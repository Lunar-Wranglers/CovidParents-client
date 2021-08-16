import * as React from "react"
import Layout from '../components/layout/layout'
import Vaccine from '../components/layout/vaccine'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/stylesheet.scss'

const VaccinePage = () => {
  return (
    <Layout pageTitle='Vaccine' className='vaccine'>
      <Vaccine />
    </Layout>
  )
}

export default VaccinePage