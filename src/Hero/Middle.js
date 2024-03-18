
import { faCheckCircle, faFilePowerpoint } from '@fortawesome/free-regular-svg-icons'
import { faHouseFloodWaterCircleArrowRight, faMagnifyingGlassArrowRight, faWater } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Middle() {
  return (
    <div>
        <div className='container-left'>
         <div className='content-top'>
         <h1 className='hiring-h1'>Power Up Your Hiring</h1>
         <h1 className='rework-h1'>with Rework .</h1>
         <p>Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire</p> 
         </div>
         <button className='fst-btn-demo'>Book A Demo</button>
         <div className='para-icon'>
         <p><FontAwesomeIcon icon={faCheckCircle}/>   No credit Required</p>
         <p><FontAwesomeIcon icon={faCheckCircle}/>  Streamlined Recruitment Process</p>
         </div>         
        </div>

        <div className='container-right'>
        <img className='hero-img' src='https://s3-alpha-sig.figma.com/img/cbc4/bcab/7039bf1b1e8a3c8413f8f58e7992df66?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frJ0ZKjUTO5pgIhBE9QpXJnlUnRonEdDR4W~Sa4AmCVeC0um29gHWx-gWlpNuTiwUx4Xd-vgAK6G0LGQuif-5j5MCycgAgew~g7Nx0xUdtPIfx7lqx9WjyFkyRSdFFOy2Z0VoELEPandD8fIlnVJaWOY6YaxQekjEF4mAXo7cT~qd-sSdPF8BcjqN~0HTiSGS4AhqmEo5eSOFH3oY73YFgnqQA65NZx61zfYgwXU6Ocv48WNVH6-84NCaj~8Rs7n0M1F~2aWcpBsBJrGaMqZsyYkdFLsTDEjM~WEVHPkl-ArdnrBRK0CXOh5~oZko90l-hxbQPQdVsxDhCybyox0cw__'></img>
        <div className='box-hero'>
         <div className='logo-box'> <FontAwesomeIcon className='box-icon' icon={faHouseFloodWaterCircleArrowRight}/> </div>
         <h1 className='box-h1'>+10k</h1>
         <p className='box-para'>Happy Companies</p>
        </div>
        <div className='box-hero2'>
         <div className='logo-box'> <FontAwesomeIcon className='box-icon' icon={faHouseFloodWaterCircleArrowRight}/> </div>
         <h1 className='box-h1'>+10k</h1>
         <p className='box-para'>Happy Companies</p>
        </div>
        </div>
        
      
    </div>
  )
}

export default Middle
