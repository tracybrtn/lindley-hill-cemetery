const FamilyName = require('./FamilyName')
const Resident = require('./Resident');

//Associations
FamilyName.hasMany(Resident, {
  foreignKey: 'FamilyName_id'
});

Resident.hasOne(FamilyName, {
  foreignKey: 'resident_id'
});

module.exports = { Resident, FamilyName }