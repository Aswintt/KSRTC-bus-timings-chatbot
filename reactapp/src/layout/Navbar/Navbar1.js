import React from "react";

const Navbar1 = () => {
    return (
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">occ.ksrtc@kerala.gov.in</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>1800-599-4011</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </section>
    )
};

export default Navbar1;