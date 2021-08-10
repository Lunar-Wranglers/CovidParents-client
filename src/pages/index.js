import * as React from "react"
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/stylesheet.scss'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
       <p>
         This is the landing page for VaxFacts currently. There are three branches that have different rough sketches: ID1, JL1, JL2
       </p>
    </Layout>
  )
}

export default IndexPage
