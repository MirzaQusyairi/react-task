import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="row">
        <div className="col-xl-4 p-0">
          <div className="container left-bg">
            <div className="container logo" />
            <div className="overlay" />
          </div>
        </div>
        <div className="col-xl-8">
          <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <form className="needs-validation" action="" noValidate>
                  <h3 className="text-blue">Contact Us</h3>
                  <div className="mb-3 mt-3">
                    <label htmlFor="fullname" className="form-label text-blue fs-20">Full Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="fullname" placeholder="Your Full Name Here..." required />
                    <div className="invalid-feedback">
                      Full name cannot be empty
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-blue fs-20">Email Address<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" placeholder="example@domain.com" required />
                    <div className="invalid-feedback">
                      Email address cannot be empty
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone-number" className="form-label text-blue fs-20">Phone Number<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="phone" placeholder="08573890xxxxx" required />
                    <div className="invalid-feedback">
                      Phone number cannot be empty
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nationality" className="form-label text-blue fs-20">Nationality</label>
                    <select id="nationality" className="form-select">
                      <option value selected>Selected</option>
                      <option value="Indonesian">Indonesian</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="form-label text-blue fs-20">Message</label>
                    <textarea className="form-control" id="message" rows={4} defaultValue={""} />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary btn-orange" onclick="FormStorage();">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
