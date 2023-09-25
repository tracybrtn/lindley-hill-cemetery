const { Schema, model } = require('mongoose');

//all of these need to reference already existing people in the database
const familySchema = new Schema(
  {
    spouse: {
      type: String
    },
    father: {
      type: String
    },
    mother: {
      type: String
    }
  }
)

const Family = model('Family', familySchema);

module.exports = Family;