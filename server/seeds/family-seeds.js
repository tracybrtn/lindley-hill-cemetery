const { FamilyName } = require('../models')

const familyNameData = [

]

const familySeeds = () => FamilyName.bulkCreate(familyNameData);
module.exports = familySeeds