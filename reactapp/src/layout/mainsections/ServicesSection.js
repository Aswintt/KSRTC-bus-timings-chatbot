import React from "react";

const ServicesSection  = () => {
    return (
        <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bx-phone-call"></i></div>
              <h4 className="title"><a href="">Helpline Online Reservation</a></h4>
              <p className="description">
                0471-1234567 <br/>
                0481-7654321  <br/> 
                0987654321          
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-envelope"></i></div>
              <h4 className="title"><a href="">Email</a></h4>
              <p className="description">
                rsnksrtc@kerala.gov.in <span></span>(Online reservation) <br/>
                occ.ksrtc@kerala.gov.in <span></span>(General Enquiry) <br/>
                ld.ksrtc@kerala.gov.in <span></span>(Long Distance Schedules)

              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4 className="title"><a href="">Notifications</a></h4>
              <p className="description">Recent Notifications about invites and applications of various tenders and projects and more. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">Customer Support</a></h4>
              <p className="description">
                Customer Relations: cr.ksrtc@kerala.gov.in <br/>
                Social Media Cell: 9876543210 <br/>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default ServicesSection