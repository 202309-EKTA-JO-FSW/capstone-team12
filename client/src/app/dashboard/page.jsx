'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import AddEvent from '../components/AddEvent/AddEvent'
import DeleteEvent from '../components/DeleteEvent/DeleteEvent'
import EditEvent from '../components/EditEvent/EditEvent'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Dashboard = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const imageUrl = `https://picsum.photos/${randomNumber === 0 ? 1000 : randomNumber === 1 ? 501 : 500}/500`;
    const [events, setEvents] = useState(null);
    useEffect(() => {
        const fetchEvents = async () => {

            const response = await fetch('http://localhost:3001/api/events/')
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setEvents(json)

            }
        }
        fetchEvents()

    }, []);

    return (
        <>
            <title>HILM | Dashboard</title>
            <h1 className="h1 text-center " id="pageHeaderTitle"> </h1>

            <div className='dashboard-style'>
                <link href="" />
                <div className="container">
                    <div className=" py-5 px-4 hvr-grow row row-cols-1 row-cols-md-2 row-cols-xl-4  ">
                        <div className="col">
                            <div className="card radius-10   ">
                                <div className="card-body   ">
                                    <div className="d-flex align-items-center   ">
                                        <div className=''>
                                            <p className="mb-0 text-secondary">Total Events</p>
                                            <h4 className="my-1 text-info">4805</h4>
                                            <p className="mb-0 font-13">+2.5% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i className="fa fa-bar-chart
                                        "></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10   ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Revenue</p>
                                            <h4 className="my-1 text-danger">$84,245</h4>
                                            <p className="mb-0 font-13">+5.4% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i className="fa fa-dollar"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //////////////////////////// */}
                        <div className="col">
                            <div className="card radius-10   ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Tickets Sold</p>
                                            <h4 className="my-1 text-danger">84245</h4>
                                            <p className="mb-0 font-13">+6.7% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i className="fa fa-dollar"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //////////////////////////// */}
                        <div className="col">
                            <div className="card radius-10   ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Customers</p>
                                            <h4 className="my-1 text-success">20.3K</h4>
                                            <p className="mb-0 font-13">+4.5% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i className="fa fa-users"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10   border-1  ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src="https://media.licdn.com/dms/image/sync/D4E27AQEKjFM2VSEeFA/articleshare-shrink_800/0/1708751634115?e=2147483647&v=beta&t=57czBdCxGddD2DzgdFyVz7XQQ8sqLw-sCCT0pC-Cjq8"
                                            width={200} height={108} />
                                        <div className=" bg-gradient-bloody text-white ms-auto"><i className=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////// */}

                        {/* //////////////// */}
                        <div className="col">
                            <div className="card radius-10   border-1  ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn.pixabay.com/animation/2023/10/22/03/31/03-31-40-761_512.gif" width={200} height={108} />

                                        <div className=" bg-gradient-bloody text-white ms-auto"><i className=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////// */}
                        <div className="col">
                            <div className="card radius-10   border-1  ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src="https://media.licdn.com/dms/image/sync/D4E27AQEKjFM2VSEeFA/articleshare-shrink_800/0/1708751634115?e=2147483647&v=beta&t=57czBdCxGddD2DzgdFyVz7XQQ8sqLw-sCCT0pC-Cjq8"
                                            width={200} height={108} />
                                        <div className=" bg-gradient-bloody text-white ms-auto"><i className=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////// */}



                        <div className="col">
                            <div className="card radius-10   border-1  ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn.pixabay.com/animation/2023/10/22/03/31/03-31-40-761_512.gif" width={200} height={108} />

                                        <div className=" bg-gradient-bloody text-white ms-auto"><i className=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <AddEvent />
                </div>

            </div>
            <br />
            <h3 className='container col-sm-0'>Recently Added Events</h3>

            {/* ////////////////////////////////////////////////////////////// */}
            {events && events.map((event) => (

                <div key={event._id} className="container " >
                    <div className="text-center mb-5 " >
                        <p className="lead"> </p>
                    </div>
                    <div className="card mb-3  " >
                        <div className="card-body">
                            <div className="d-flex flex-column flex-lg-row">
                                <span className="avatar avatar-text rounded-3 me-4 mb-2 "><img src={imageUrl} className="fill " /></span>
                                <div className="row flex-fill">
                                    <div className="col-sm-5">
                                        <h5 className="h5 ">{event.title}</h5>
                                        <span className="badge text-secondary">{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</span>
                                    </div>
                                    <div className="col-sm-4 py-4 ml-2">
                                        <span className="badge text-dark   ">{event.category}</span>
                                        |<span className="badge  text-dark ">{event.tags}</span>
                                        <span className="badge   text-dark ml-5">| {event.time}</span>

                                    </div>
                                    <div className="col-sm-3 text-lg-end" >
                                        <DeleteEvent event={event} />
                                        <EditEvent event={event} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}
export default Dashboard