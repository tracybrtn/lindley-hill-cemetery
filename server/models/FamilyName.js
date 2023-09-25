const { Schema, model } = require('mongoose');

const familyNameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  }
)

const FamilyName = model('FamilyName', familyNameSchema);

module.exports = FamilyName;