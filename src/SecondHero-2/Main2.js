import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleDown, faArrowCircleUp, faDashboard, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class Main2 extends Component {
  render() {
    return (
      <div className='Main2-container'>
         <div className='main2-h1'>
            <h1>How Our System <span>Operates</span></h1>
        </div>

<div className='main2-cards'>
       
   <div className="card-group">
    <div className="card">
    <div className="card-body">
      <FontAwesomeIcon className='left-icon' icon={faArrowAltCircleUp}/>
      <h5 className="card-title-main2">Upload Documents</h5>
      <p className="card-text-main2 mt-9"> Shortlist the most qualified candidate and upload their details for the top companies</p>
      <p className="card-text">
      </p>
    </div>
  </div>
  <div className="card bg-secondary-subtle">
    <div className="card-body">
      <h5 className="card-title-main2-middle">Sign Up</h5>
      <p className="card-text-main2-middle mt-9">Follow the link below to sign up and get access of the current job postings</p>
      <FontAwesomeIcon className='left-icon' icon={faArrowAltCircleUp}/> 
      <p className="card-text">
      </p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
    <FontAwesomeIcon className='left-icon' icon={faArrowAltCircleUp}/> 
      <h5 className="card-title-main2">Get Rewards</h5>
      <p className="card-text-main2 mt-9"> Shortlist the most qualified candidate and upload their details for the top companies</p>
      <p className="card-text"/>
    </div>
  </div>
</div>

   </div>
   <button className='main2-btn'>Get Started</button>

      </div>
    )
  }
}

export default Main2
