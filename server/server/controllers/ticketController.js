const Ticket = require('../models/ticketModel');

//create ticket
const createTicket = async (req, res) => {
    const { numberOfTickets, eventDate, price, ticketType } = req.body
    try {
        const ticketCreation = await Ticket.create({
            numberOfTickets, eventDate, price, ticketType
        })
        const savedTicket = await ticketCreation.save();
        res.status(200).json(savedTicket)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//getAllTickets
const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find()
            .populate('userId', ['name', 'location']).populate('eventId', ['title', ' time', ' location']);
        res.status(200).json(tickets, { error: error.message });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

// single ticket
const getTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findById(id)
            .populate('userId', ['name', ' location'])
            .populate('eventId', ['title', ' time', ' location']);
        if (!ticket) {
            return res.status(404).json('the ticket is not avaliable ');
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete ticket  
const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(id);
        if (!deletedTicket) {
            return res.status(404).json({ error: error.message });
        }
        res.status(200).json(deletedTicket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update ticket  
const updateTicket = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: error.message })
    }
    const ticketUpdate = await Ticket.findOneAndUpdate({ _id: id },
        { ...req.body },
        { new: true });
    if (!ticketUpdate) {
        return res.status(400).json({ error: error.message })
    }
    res.status(200).json(ticketUpdate)
}


module.exports = {
    createTicket,
    getTickets,
    getTicket,
    deleteTicket,
    updateTicket,
};
