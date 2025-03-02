import React from 'react'
import "./contact.css"
import ComputerModelContainer from '../services/computer/ComputerModelContainer'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="cSectionl">
        <form>
          <h1 className="cTitle">Contact with me:</h1>
          <div className="formItem">
            <label>Name</label>
            <input type="text" placeholder="Enter your name..." />

          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com" />
            
          </div>
          <div className="formItem">
            <label>Message</label>
          <textarea rows={12} placeholder="Enter your message..."></textarea>
            
          </div>
          <button className='formbtn'>Send</button>
        </form>
      </div>
      <div className="cSectionr">
      <ComputerModelContainer/>
      </div>
    </div>
  )
}

export default Contact