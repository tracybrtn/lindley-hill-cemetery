// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs

const typeDefs = gql`
  type Family {
    _id: ID
    name: String
  }

  type Resident {
    _id:ID
    name: String
    lastName: [Family]
    maidenName: [Family]
    title: String
    nickname: String
    dateOfBirth: String
    dateOfDeath: String
    memorialID: Int
    URL: String
  }

  type Query {
    allResidents: [Resident]
    resident(_id: ID!): Resident
    allFamilies: [Family]
    family(_id: ID!): Family
  }
  
  type Mutation {
    addFamily(name: String!): Family
    addResident(name: String!, title: String, nickname: String, dateOfBirth: String, dateOfDeath: String, family: String, memorialID: Int!, URL: String): Resident
    updateFamily(name: String!): Family
    updateResident(name: String!, title: String, nickname: String, dateOfBirth: String, dateOfDeath: String, family: String, memorialID: Int!, URL: String): Resident
    deleteFamily(_id: ID!): Family
    deleteResident(_id: ID!): Resident
  }
`;

// export the typeDefs
module.exports = typeDefs;