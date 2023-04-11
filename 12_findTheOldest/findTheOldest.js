const findTheOldest = function(people) {

    const oldestPerson = people
      .map(person => {
        if (!person.yearOfDeath) {
          person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
        return person;
      })
      .reduce((oldest, current) => (current.age > oldest.age ? current : oldest));
  
    return { name: oldestPerson.name, age: oldestPerson.age };
      
      
};

// Do not edit below this line
module.exports = findTheOldest;
