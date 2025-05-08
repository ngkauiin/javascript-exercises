const findTheOldest = function(people) {
  const oldestPerson = people
                        .sort((personA, personB) => {
                          calculatePersonAge(personA);
                          calculatePersonAge(personB);
                          if (personA.age > personB.age) {
                            return -1
                          } else {
                            return 1
                          }
                        })
                        .at(0);
  return oldestPerson;
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
