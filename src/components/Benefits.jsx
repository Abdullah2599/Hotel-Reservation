import React from 'react'
import Heading from './CustomHeading'
import { benefits } from "../../data";

function Benefits() {
  return (

    <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <Heading
          heading="Our Benefits"
          title="Benefits"
          subtitle="Explore Our Benefits"
        />
      </div>
      <div className="row g-4">
        {benefits.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded shadow-sm p-3 h-100 d-flex flex-column align-items-center text-center">
              <div className="service-icon bg-transparent border rounded-circle p-3 mb-3">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <item.icon className="text-accent" style={{ fontSize: "2rem" }} />
                </div>
              </div>
              <h5 className="mb-2 text-dark">{item.name}</h5>
              <p className="text-body mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Benefits
