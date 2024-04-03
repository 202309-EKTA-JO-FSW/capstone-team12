import React from 'react'

const Contact = () => {
    return (
        <>
            <title> HILM | Contact</title>

            <div className="container py-5">
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="display-4">Meet The Team</h1>
                    </div>
                </div>
            </div>
            {/* team members */}
            <div className="container">
                <div className="row text-center">

                    {/*  member 1  */}
                    <div className="cards box col-xl-3 col-sm-6 mb-5 ">
                        <div className="  bg-gray-400 rounded shadow-sm py-5 px-4 hvr-grow "><img src="https://media.licdn.com/dms/image/D4E03AQH23Fh4r0ZgVg/profile-displayphoto-shrink_200_200/0/1708276662931?e=1715817600&v=beta&t=_wGYHj5D91LrdGyB9OFCfhEbiPPU3HGZyYj0Osh7XDo" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Mohmmad Al-Smadi</h5><span className="small text-uppercase text-white">Full-stack Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item">Skilled in React,Node.js,Express and MongoDB.Worked in projects implementing features like login,signup,product checkout and profiles.
                                    Focusing on building feature-rich websites. </li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/mohmmad-al-smadi-bb0109249/" target='_blank' className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/mohmmadms" target='_blank' className="social-link"><i className="fab fa-github text-black"  ></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*  member 2  */}
                    <div className="cards col-xl-3 col-sm-6 mb-5">
                        <div className="bg-gray-400 rounded shadow-sm py-5 px-4"><img src="https://picsum.photos/1000/1000" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Lina Zamil</h5><span className="small text-uppercase text-white">Full-stack Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"> I work with React, MongoDB, Express, and Node to create interactive and user-friendly web applications. Ensuring high performance to deliver features
                                    and functionalities that meet the user needs.</li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/lina-zamil/" className="social-link" target='_blank'><i className="fab fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/Lina-zamil" className="social-link" target='_blank'><i className="fab fa-github text-black"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*  member 3 */}
                    <div className="cards col-xl-3 col-sm-6 mb-5" >
                        <div className=" bg-gray-400 rounded shadow-sm py-5 px-4" ><img src="https://avatars.githubusercontent.com/u/129861469?v=4" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Raneem Al-hamarneh</h5><span className="small text-uppercase text-white">Full-stack Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item">Developer specialized in MERN stack. I am deeply engaged in problem-solving and structured approaches. Driven to address complex challenges, I craft effective solutions with a methodical and organized framework. </li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/raneem-alhamarneh/" className="social-link" target='_blank'><i className="fab fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/RaneemHamarneh" className="social-link" target='_blank'><i className="fab fa-github text-black"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*  member 4 */}
                    <div className="cards col-xl-3 col-sm-6 mb-5 ">
                        <div className=" bg-gray-400 rounded shadow-sm py-5 px-4 "><img src="https://picsum.photos/500/500" alt="" width="100" className=" rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Hasan Jabaie</h5><span className="small text-uppercase text-white">Full-stack Developer </span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"> Experience in designing, developing, and maintaining web applications. Proficient in frontend technologies (HTML, CSS, JavaScript) and backend like Express with expertise in web frameworks like React and NextJs.</li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/hasan-jabaie-56533926b/" className="social-link" target='_blank'><i className="fab fa-linkedin "></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/H-jabai92" className="social-link" target='_blank'><i className="fab fa-github text-black"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*  End */}
                </div>
            </div>
            {/* ////////////////////// */}


            {/* ////////////////////// */}
        </>
    )
}
export default Contact