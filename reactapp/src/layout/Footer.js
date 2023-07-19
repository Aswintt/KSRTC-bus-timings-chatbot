import React from "react";

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>KSRTC<span>.</span></h3>
                                <p>
                                    Trivandrum,Kerala 678 123<br />
                                    India <br /><br />
                                    <strong>Phone:</strong> +91 9876543210<br />
                                    <strong>Email:</strong> rsnksrtc@kerala.gov.in<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">e-Ticketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Tenders</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Tour packages</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Keypeople</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Fare</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>ksrtc</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">

                    </div>
                </div>
            </footer>
            <a className="gotopbtn" href="#"><i className="bi bi-box-arrow-up"></i></a>
            {/* <div id="preloader"></div> */}
            {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
        </div>
    )
}

export default Footer
