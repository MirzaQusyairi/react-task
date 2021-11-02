import React from 'react'
import profile from '../assets/img/matthew.jpg'

export default function Home() {
  return (
    <div>
      <div className="container-fluid background">
        <div className="container align-items-center">
          <div className="row align-items-center justify-content-center profile">
            <div className="col-xl-4">
              <div className="text-center">
                <img className="rounded-circle img-profile" src={profile} alt="" />
              </div>
            </div>
            <div className="col-xl-6 data">
              <h4 className="text-blue fs-25 line1">Hi, my name is</h4>
              <h1 className="text-blue fs-85 fw-700 line2">Anne Sullivan</h1>
              <h3 className="text-blue fs-35 line3">I build things for the web</h3>
              <div className="line4">
                <button type="button" className="btn btn-primary btn-orange mt-3 line4">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
