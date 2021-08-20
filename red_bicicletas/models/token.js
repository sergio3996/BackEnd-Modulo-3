const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const  TokenSchema = new Schema ({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' },
    createdAt: { type: Date, required: true, default: Date.now, exxpires: 43200 }
});

module.exports = mongoose.model('Token', TokenSchema);