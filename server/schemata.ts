import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    unit_number: Number,
    floor_number: Number,
    building_name: String,
    building_number: Number,
    street: String,
    street_secondary: String,
    city: String,
    state: String,
    postal_code: String,
    country: String
})

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

export const Address = mongoose.model('Address', AddressSchema);
export const Contact = mongoose.model('Contact', ContactSchema);
export const Performer = mongoose.model('Performer', PerformerSchema);
export const Venue = mongoose.model('Venue', VenueSchema);
export const Ticket = mongoose.model('Ticket', TicketSchema);