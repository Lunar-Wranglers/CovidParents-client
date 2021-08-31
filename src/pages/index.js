import * as React from "react"
import Layout from '../components/layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/stylesheet.scss'

import VideoPlayer from '../components/hooks/videoPlayer/video.js'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <div className='homePage'>
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
           <VideoPlayer />
         </div>
       </div>
       <div className='d-flex justify-content-between mb-2' id='lowguard'>
         <div className='covidStats' id='graphics'>
           Graph data supporting ol information
         </div>
         <div className='covidStats'>
          <div className='stats' id='stat1'>
          </div>
          <div className='stats' id='stat2'>
          </div>
          <div className='stats' id='stat3'>
          </div>
          <div className='stats' id='stat4'>
          </div>
        </div>
       </div>
      </div>
    </Layout>
  )
}

export default IndexPage
