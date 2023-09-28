const Surname = require('./Surname')
const Resident = require('./Resident');

//Associations
//Surname associations 
Surname.hasMany(Resident, {
  foreignKey: 'surname_id'
});

Resident.hasOne(Surname, {
  foreignKey: 'resident_id'
});

module.exports = { Family, Resident, Surname }