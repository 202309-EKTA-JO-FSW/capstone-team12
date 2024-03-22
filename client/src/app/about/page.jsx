"use client"
import React from 'react'

const About = () => {


    return (
        <>
            <title> HILM | About</title>

            <div className="row mt-4">
                <div className="col-md-12">
                    <div
                        className="bg-picture"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                        }}
                    >
                    </div>
                </div>
            </div>
            {/* ///////////// */}
            <>
                <div className="container mt-5 ">
                    <div className="p-x-15 blur">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-6 p-30 text-center p-5 ">
                                <h4 className="mb-50 fw-bold pt-3">Our Mission</h4>
                                <p>
                                    Discover a vibrant marketplace filled with impactful events like festivals,concerts and more.Designed for connections and shared experiences.
                                    We provide a platform and resources to help event organizers bring their visions to life.
                                    Ensuring everyone attending can find exactly what they are looking for.We believe everyone deserves to experience the joy of events.where event creators and attendees can connect, share experiences, and build lasting relationships.
                                </p>
                            </div>
                            <div className="col-md-6 bg-img"
                                style={{
                                    backgroundImage:
                                        "url(/9.jpg )",
                                    minHeight: 400,
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <br />
            <br />
            {/* //////////////////////// */}
            <>
                <div className="container mt-5">
                    <div className="p-x-15 blur">
                        <div className="row">
                            <div
                                className="col-md-6 bg-img"
                                style={{
                                    backgroundImage:
                                        "url(/2.jpg)",
                                    minHeight: 400,
                                }}
                            >
                            </div>
                            {/* ////////////////// */}
                            <div className="col-md-6 col-md-offset-6 text-center p-5  ">
                                <h5 className="mb-50 fw-bold ">Why Experience Events Here?</h5>
                                <p> Unforgettable Experiences:Find yourself in a selection of events designed for your passions and create lasting memories.
                                    Find Your Tribe:Connect with like-minded individuals who share your interests.
                                    Effortless Event Access:Our user-friendly platform makes it easy to discover events, purchase tickets and manage your event experience with minimal effort.
                                    Variety Awaits:Explore a diverse range of events,from exhilarating concerts and vibrant festivals.
                                    Guaranteed Quality:We partner with trusted event creators to ensure a high-quality experience that meets your expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <br />
            <br />
            {/* ///////////////////////////////// */}
            <>
                <div className="container mt-5 ">
                    <div className="p-x-15 blur">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-6 p-30 text-center p-5 ">
                                <h4 className="mb-50 fw-bold pt-3">How We Make a Difference</h4>
                                <p> We go beyond simply connecting you with events.Your participation on our platform contributes to a positive impact.
                                    When you attend an event, you support local businesses, venues, and artists. Our platform shines a spotlight on local event creators.
                                    We believe in the power of events to bring people together from all walks of life.Our platform promotes a wide range of events and fosters inclusive environments where everyone feels welcome.
                                    We partner with impactful charities and organizations. A portion of proceeds from select events may be used to support causes you care about.
                                </p>
                            </div>
                            <div className="col-md-6 bg-img"
                                style={{
                                    backgroundImage:
                                        "url(/4.jpeg )",
                                    minHeight: 400,
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </>
            {/* /////////////////////////////////// */}
            <br />
            <br />
        </>
    )
}

export default About;