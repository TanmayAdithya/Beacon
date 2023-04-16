import React from 'react'

export const WelcomeMessage = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold fs-1 text-body-emphasis">Be connected with your community and<br/>make a difference, together</h1>
    <div className="col-lg-6 mx-auto">
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-warning btn-lg px-4 me-sm-3 act-btn">Volunteer</button>
        <button type="button" className="btn btn-outline-warning btn-lg px-4 act-btn">Seek Aid</button>
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="container px-5">
        <img src="https://i.postimg.cc/V68gqNRD/BEACON-community-2.png" alt="Community image" width="350" height="350"/>
      </div>
    </div>
  </div>
  </div>
  )
}
