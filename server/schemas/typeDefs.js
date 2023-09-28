// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs

const typeDefs = gql`
  type Family {
    _id: ID
    lastName: String
    alpha_id: Int
  }

  type Resident {
    _id: ID
    name: String
    lastName: String
  }

  type Query {
    allResidents: [Resident]
    resident(_id: ID!): Resident
    allFamilies: [Family]
    family(_id: ID!): Family
  }
  
  type Mutation {
    addFamily(lastName: String!, alpha_id: Int): Family
    addResident(name: String!, lastName: String!): Resident
    updateFamily(lastName: String!): Family
    updateResident(name: String!, title: String, nickname: String, dateOfBirth: String, dateOfDeath: String, family: String, memorialID: Int!, URL: String): Resident
    deleteFamily(_id: ID!): Family
    deleteResident(_id: ID!): Resident
  }
`;

// export the typeDefs

//    addResident(name: String!, title: String, nickname: String, dateOfBirth: String, dateOfDeath: String, family: String, memorialID: Int!, URL: String): Resident
//  type Resident {
//   _id:ID
//   name: String
//   lastName: String
//   maidenName: [Family]
//   title: String
//   nickname: String
//   dateOfBirth: String
//   dateOfDeath: String
//   memorialID: Int
//   URL: String
// }
module.exports = typeDefs;