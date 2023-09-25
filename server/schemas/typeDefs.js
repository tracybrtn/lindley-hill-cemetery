// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs

const typeDefs = gql`
  type Resident {
    _id:ID
    name: String
    lastName: [FamilyName]
    maidenName: [FamilyName]
    title: String
    nickname: String
    dateOfBirth: String
    dateOfDeath: String
    family: [Family]
    memorialID: Int
    URL: String
  }

  type FamilyName {
    name: String
  }

  type Family {
    spouse: String
    father: String
    mother: String
  }

  type Query {
    allResidents: [Resident]
    allFamilies: [Family]
    allFamilyNames: [FamilyName]
  }
`;
// export the typeDefs
module.exports = typeDefs;