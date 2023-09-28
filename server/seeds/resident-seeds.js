const { Resident } = require('../models')

const residentData = [

]

const residentSeeds = () => Resident.bulkCreate(residentData);

module.exports = residentSeeds;