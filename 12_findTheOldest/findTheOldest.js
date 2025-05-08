const findTheOldest = function(people) {
  const oldestPerson = people.sort((personA, personB) => {
    calculatePersonAge(personA);
    calculatePersonAge(personB);

  })
};

function calculatePersonAge(person) {
  if ('yearOfDeath' in person) {
    person['age'] = person.yearOfDeath - person.yearOfBirth;
  } else {
    person['age'] = Date.getFullYear() - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
