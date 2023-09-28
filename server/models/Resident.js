const { Schema, model } = require('mongoose');

const residentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    // Both last Name and maiden Name are referencing Family Names
    lastName: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Family',
        required: true
      }
    ],
    maidenName: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Family'
      }
    ],
    title: {
      type: String
    },
    nickname: {
      type: String
    },
    dateOfBirth: {
      type: Date,
    },
    dateOfDeath: {
      type: Date
    },
    spouse: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
      }
    ],
    father: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
      }
    ],
    mother: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
      }
    ],
    memorialID: {
      type: Number,
      //required: true
    },
    URL: {
      type: String,
      //required: true
    }
  }
)

const Resident = model('Resident', residentSchema);

module.exports = Resident;