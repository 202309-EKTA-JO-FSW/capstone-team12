'use client'
import React from 'react'
import Popper from '@popperjs/core';
import { useState, useEffect } from 'react'
import AddEvent from '../components/AddEvent/AddEvent'
import DeleteEvent from '../components/DeleteEvent/DeleteEvent'
// import EditEvent from '../components/EditEvent/EditEvent'
// import AddTicket from '../components/AddTicket/AddTicket'
// import DeleteTicket from '../components/DeleteTicket/DeleteTicket'
// import EventControls from '../components/EventControls/EventControls'


const Dashboard = () => {
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
    // 
    // const [tickets, setTickets] = useState(null);
    // useEffect(() => {
    //     const fetchTickets = async () => {

    //         const response = await fetch('http://localhost:3001/api/tickets/getTickets')
    //         const TicketsJson = await response.json()
    //         console.log(TicketsJson)
    //         if (response.ok) {
    //             setTickets(TicketsJson)

    //         }
    //     }
    //     fetchTickets()
    // }, []);
    // 
    return (
        <>
            <title>HILM | Dashboard</title>
            <h1 className="h1 text-center " id="pageHeaderTitle"> </h1>


            {/* <EditEvent /> */}
            {/* < AddTicket /> */}

            {/* {events && events.map((e) => (
                <>
                    <DeleteEvent key={e._id} event={e} />
                </>
            ))} */}
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
                            <div className="card radius-10  ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Orders</p>
                                            <h4 className="my-1 text-warning">8.4K</h4>
                                            <p className="mb-0 font-13">+20% from last wee</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-shopping-cart"></i>
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
                                        <img src="https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif" width={200} height={115} />

                                        <div className=" bg-gradient-bloody text-white ms-auto"><i className=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //////////////// */}
                        <div className="col">
                            <div className="card radius-10   border-1  ">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <img src="https://cdn.dribbble.com/users/870415/screenshots/2746862/linegraph.gif" width={200} height={115} />

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
                                        <img src="https://camo.githubusercontent.com/56476e24648bc4866d8599da2689e578514da26835e47d19df0c19f870b2189b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64636c706f7a6a67612f696d6167652f75706c6f61642f76313537363438333533302f4847726170685f736e7a6f786c2e676966"
                                            width={200} height={115} />
                                        <div className=" bg-gradient-bloody text-white ms-auto"><i className=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////// */}
                        {/*  add event///////////// */}

                    </div>
                    <AddEvent />

                </div>















                {/* ///////////// */}
            </div>
            {/*  evets lists /////////////////////////////// */}

            {events && events.map((e) => (
                <div key={e._id}>
                    <DeleteEvent event={e} />
                </div>
            ))}

            {/* {events && events.map((e) => (
                <div key={e._id}>
                    <DeleteEvent event={e} />
                </div>
            ))} */}

            {/* /////////////////////////////// */}

            {/* {tickets && tickets.map((ticket) => (
                <>
                    <AddTicket key={ticket._id} ticket={ticket} />

                </>
            ))} */}

        </>
    )
}
export default Dashboard
