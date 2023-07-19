import React from "react";

const ContactSection = () => {
    return (
            <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                    <h3><span>Contact Us</span></h3>
                    <p>You can contact us.</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-map"></i>
                            <h3>Our Address</h3>
                            <p>Trivandrum,Kerala 678 123<br />
                                    India </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>contact@example.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>

                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6 ">
                    <div className="col-lg-12">
                        <div className="info-box mb-4"> 
                            <p><br/><br/><br/>
                            <i className="bx bx-tachometer"></i>
                            <br/><br/><br/><h3>Thankyou...</h3>
                            <br/><br/><br/><q>Out of the mountain of despair,a stone of hope.</q>-<small>Martin Luther King,Jr.</small></p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6">
                        <form role="form" className="php-email-form">
                            <div className="row">
                                <div className="col form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ContactSection