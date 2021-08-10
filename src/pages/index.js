import * as React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
       <div id='vacReq'>
         <h3>Vaccine Requirements</h3>
         <p>
           Information about vaccines
         </p>
         <ul>
           <li>
             requirements
           </li>
         </ul>
       </div>
       <div id='videoPlayer'>
         video goes here
       </div>
       <div id='covidStats'>
         <ol>
           <li>
             stats
           </li>
         </ol>
         <div id='graphics'>
           Graph data supporting ol information
         </div>
       </div>
    </Layout>
  )
}

export default IndexPage
