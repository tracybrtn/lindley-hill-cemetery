const { Schema, model } = require('mongoose');

const familySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    //Residents who have this last name
    residents:  [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

//Residents with same last name number count 
familySchema.virtual('residentCount').get(function() {
  return this.residents.length
});

const Family = model('Family', familySchema);

module.exports = Family;