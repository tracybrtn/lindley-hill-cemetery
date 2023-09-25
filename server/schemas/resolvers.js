const { Family, FamilyName, Resident } = require('../models');

const resolvers = {
  //READ operations
  Query: {
    //get all residents
    allResidents: async () => {
      return Resident.find()
    },
    //get all residents
    allFamilies: async () => {
      return Family.find()
    },
    //get all residents
    allFamilyNames: async () => {
      return FamilyName.find()
    }
  }
}

module.exports = resolvers;