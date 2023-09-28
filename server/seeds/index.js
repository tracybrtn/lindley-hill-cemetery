const familySeeds = require('./family-seeds');
const residentSeeds = require('./resident-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await familySeeds();
  console.log('\n----- FAMILIES SEEDED -----\n');

  await residentSeeds();
  console.log('\n----- RESIDENTS SEEDED -----\n');

  process.exit(0);
}