const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  whatsapp: {
    type: String,
    required: [true, 'Please provide your WhatsApp number'],
    trim: true,
  },
  country: {
    type: String,
    default: 'UAE',
    trim: true,
  },
  plan: {
    type: String,
    default: 'Not sure yet — help me choose',
    trim: true,
  },
  parents: {
    type: String,
    required: [true, 'Please provide parents details and Aligarh locality'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'intro_scheduled', 'subscribed', 'closed'],
    default: 'new',
  },
  notes: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
