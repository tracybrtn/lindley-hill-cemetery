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
        ref: 'FamilyName'
      }
    ],
    maidenName: [
      {
        type: Schema.Types.ObjectId,
        ref: 'FamilyName'
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
    family: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Family'
      }
    ],
    memorialID: {
      type: Number,
      required: true
    },
    URL: {
      type: String,
      required: true
    }
  }
)

const Resident = model('Resident', residentSchema);

module.exports = Resident;