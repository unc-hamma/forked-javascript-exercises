const findTheOldest = function(people) {
    return people.sort( (personA, personB) => {
        const currentYear = new Date().getFullYear();
        let ageA = personA.yearOfDeath - personA.yearOfBirth;
        let ageB = personB.yearOfDeath - personB.yearOfBirth;
        if(typeof personA.yearOfDeath === "undefined") ageA = currentYear - personA.yearOfBirth;
        if (typeof personB.yearOfDeath === "undefined") ageB = currentYear -personB.yearOfBirth;
        return ageB - ageA
    }).shift();
};

// Do not edit below this line
module.exports = findTheOldest;
