import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted pt-3 ">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>unforgettable experiences
                                </h6>
                                <p>
                                    Hilm is your one-stop shop for booking tickets to all the events you crave.We have something for everyone.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p><a href="/" className="text-reset">Category</a></p>
                                <p><a href="/events" className="text-reset">Events</a> </p>
                                <p><a href="/contact" className="text-reset">Contact</a></p>
                                <p><a href="/about" className="text-reset">About</a> </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4"> OTHERS</h6>
                                <p><a href="/events" className="text-reset">View Events</a> </p>
                                <p><a href="/events" className="text-reset">Tickets</a></p>
                                <p><i className="fas fa-phone me-3"></i> FAQs</p>
                                <p><i className="fas fa-print me-3"></i> Help</p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                <p><i className="fas fa-home me-3"></i> Jordan, Amman</p>
                                <p><i className="fas fa-envelope me-3"></i>
                                    events@hilm.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" >
                    &copy;Copyright {currentYear} - HILM.COM - All Rights Reserved
                </div>
            </footer >
        </>
    )
}

export default Footer