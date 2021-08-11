import * as React from "react"
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/stylesheet.scss'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page' className='homePage'>
       <div class='topguard'>
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
        </div>
        <div className='d-flex justify-content-between mb-2' id='midguard'>
         <div className='humit' id='sdi'>
           Social Distancing info
         </div>
         <div className='humit' id='videoPlayer'>
           video goes here
         </div>
       </div>
       <div id='covidStats'>
         <div id='graphics'>
           Graph data supporting ol information
         </div>
         <ol>
           <li>
             stats
           </li>
         </ol>

       </div>
    </Layout>
  )
}

export default IndexPage
