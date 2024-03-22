import { useState } from 'react';
import MyModal from '../MyModal/MyModal';

const AddEvent = () => {
    const [eventData, setEventData] = useState({
        title: '',
        time: '',
        location: '',
        price: '',
        category: '',
        numberOfGuests: '',
        startDate: '',
        endDate: '',
        tags: '',
        description: '',
        tickets: [],
    });


    const [error, setError] = useState(null);
    ///
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setEventData({ ...eventData, [key]: value });

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        const response = await fetch("http://localhost:3001/api/events/dashboard/admin", {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${token}`,

            },

        });

        const json = await response.json();


        if (!response.ok) {
            setError(json.error);
            return;
        }

        setError(null);
        setEventData({
            title: '',
            time: '',
            location: '',
            price: '',
            category: '',
            numberOfGuests: '',
            startDate: '',
            endDate: '',
            tags: '',
            description: '',
            tickets: []


        });


        console.log('added new event:', json);

    };

    return (
        <>

            {/* ///////////// */}
            <button className="btn btn-secondary text-bg-dark p-3 font-weight-bold w-200 h-110  " onClick={handleOpenModal}>
                ADD NEW EVENT
            </button>

            {/* /////////////////////////// */}
            <MyModal show={showModal} onClose={handleClose}>
                {/* Your modal content here */}

                <form className="create" onSubmit={handleSubmit}>
                    {/* <h3>Add  New Event</h3> */}
                    <div className=' container col-sm-6'>
                        {/* title */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Title</span>
                            <input type="text"
                                id="title"
                                name="title"
                                onChange={handleChange}
                                value={eventData.title}
                                className="form-control"
                                placeholder="Title" aria-label="Title"
                                aria-describedby="addon-wrapping" />
                        </div>
                        {/* time */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Time</span>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                onChange={handleChange}
                                value={eventData.time}
                                className="form-control"
                                placeholder="time" aria-label="Time"
                                aria-describedby="addon-wrapping"
                            />
                        </div>
                        {/* location */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Location</span>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                onChange={handleChange}
                                value={eventData.location}
                                className="form-control"
                                placeholder="Location" aria-label="Location"
                                aria-describedby="addon-wrapping"
                            />
                        </div>

                        {/* price */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">ticket Price</span>
                            <input
                                type="number"
                                id="pricee"
                                name="price"
                                onChange={handleChange}
                                value={eventData.price}
                                className="form-control"
                                placeholder="TicketPrice" aria-label="price"
                                aria-describedby="addon-wrapping"
                            />
                        </div>

                        {/* Category  */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">
                                Category
                            </span>
                            <select multiple={false}
                                id="category"
                                name="category"
                                value={eventData.category}
                                onChange={handleChange}
                                className="form-control"
                                aria-label="Category"
                            >
                                <option value="">Select Category</option>
                                <option value="Sports">Sports</option>
                                <option value="Theater">Theater</option>
                                <option value="Concerts">Concerts</option>
                                <option value="Festivals">Festivals</option>
                                <option value="Conferences">Conferences</option>
                                <option value="Exhibitions">Exhibitions</option>
                            </select>
                        </div>

                        {/* numberOfGeusts */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">numberOfGuests</span>
                            <input
                                type="number"
                                id="numberOfGuests"
                                name="numberOfGuests"
                                onChange={handleChange}
                                value={eventData.numberOfGuests}
                                className="form-control"
                                placeholder="numberOfGuests" aria-label="numberOfGuests"
                                aria-describedby="addon-wrapping"
                            />
                        </div>
                        {/* startDate */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">startDate</span>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                onChange={handleChange}
                                value={eventData.startDate}
                                className="form-control"
                                placeholder="startDate" aria-label="startDate"
                                aria-describedby="addon-wrapping"
                            />
                        </div>
                        {/* endDate */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">endDate</span>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                onChange={handleChange}
                                value={eventData.endDate}
                                className="form-control"
                                placeholder="endDate" aria-label="endDate"
                                aria-describedby="addon-wrapping"
                            />
                        </div>
                        {/*description  */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Description</span>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                onChange={handleChange}
                                value={eventData.description}
                                className="form-control"
                                placeholder="Description" aria-label="description"
                                aria-describedby="addon-wrapping"
                            />
                        </div>

                        {/* Tags */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">
                                Tags
                            </span>
                            <select multiple={false}
                                id="tags"
                                name="tags"
                                value={eventData.tags}
                                onChange={handleChange}
                                className="form-control"
                                aria-label="tags"
                            >
                                <option value="">Select Tag</option>
                                <option value="HotDeal">Hot Deal</option>
                                <option value="Popular">Popular</option>
                                <option value="RareFind">Rare Find</option>
                                <option value="BudgetFriendly">Budget Friendly</option>
                                <option value="UpComing">Up Coming</option>
                            </select>
                        </div>
                        {error && <div className="error">{error} </div>}

                        {/*//////// tickets ///////// */}
                        <div> {eventData.tickets}</div>
                        <br />

                        {/* ////////////////// */}
                        <button className="btn btn-secondary text-bg-dark my-custom-button ">Add Event</button>
                    </div >
                </form >
                {/* Y///////////////////////// */}


            </MyModal>

        </>
    );
};

export default AddEvent;

