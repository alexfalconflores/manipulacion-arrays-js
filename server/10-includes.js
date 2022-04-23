const pets = ['cat', 'dog', 'fish', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('includeInArray', includeInArray);

//vs

const rta = pets.includes('dog');
console.log('includes', rta);