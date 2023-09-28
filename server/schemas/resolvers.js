const { Family, Resident } = require('../models');

const resolvers = {
  //READ operations
  Query: {
    //get ALL residents
    allResidents: async () => {
      return Resident.find()
    },
    //get resident by ID
    resident: async (parent, { _id }) => {
      return Resident.findOne({ _id })
    },

    //get ALL families
    allFamilies: async () => {
      return Family.find()
    },
    //get family by ID
    family: async (parent, { _id }) => {
      return Family.findOne({ _id })
    }
  },
  //END of READ operations

  // START OF MUTATIONS (add)
  Mutation: {
    //ADD operations
    addFamily: async(parent, args) => {
      const family = await Family.create(args);
      return family;
    },

    addResident: async(parent, args) => {
      const resident = await Resident.create(args);
      return resident;
    },

    //UPDATE operations
    updateFamily: async (parent, args) => {
      return await Family.findByIdAndUpdate
    },
    updateResident: async (parent, args) => {
      return await Resident.findByIdAndUpdate
    },

    //DELETE operations
    deleteResident: async(parent, { _id }) => {
      const resident = await Resident.findByIdAndDelete({ _id});
      return resident;
    },

    deleteFamily: async(parent, { _id }) => {
      const family = await Family.findByIdAndDelete({ _id});
      return family;
    },
  }
  //End of Mutations
}

module.exports = resolvers;