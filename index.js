// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, driversName) {
  return array.filter((drivers) => {
    return drivers.toLowerCase() === driversName.toLowerCase()
  })
}
findMatching(drivers, "Bobby");

function fuzzyMatch (array, driverLetters) {
  return array.filter((drivers) => {
    return drivers.startsWith(driverLetters)
  })
}
fuzzyMatch(drivers, "Bob")

const newDrivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(array, driverName) {
  return array.filter((drivers) => {
    return driverName === drivers.name
  })
}
matchName(newDrivers, "Bob")
