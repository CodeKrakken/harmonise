import mongoose from 'mongoose';

mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(r => {});

const ContactSchema = new mongoose.Schema({
    email: String,
    phone: String,
    twitter: String,
    facebook: String,
    instagram: String,
    tiktok: String
})

const PerformerSchema = new mongoose.Schema({
    name: String,
    contact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }]
})

const VenueSchema = new mongoose.Schema({
    name: String,
    contact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
})

const TicketSchema = new mongoose.Schema({
    name: String,
    date: Date,
    performers: [{ type: mongoose.Schema.Types.Array, ref: 'Performer' }],
});

const Contact = mongoose.model('Contact', ContactSchema);
const Performer = mongoose.model('Performer', PerformerSchema);
const Venue = mongoose.model('Venue', VenueSchema);
const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = { Contact, Performer, Venue, Ticket };