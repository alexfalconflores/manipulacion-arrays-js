const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for', newArray);

//vs
//Immutable
const rta = elements.concat(othersElements);
console.log('concat', rta);

const rta2 = [...elements, ...othersElements];
console.log('spread', rta2);

const rta3 = [...elements, ...'random'];
console.log('spread + String', rta3);

//Mutable
elements.push(...othersElements);
console.log('elements', elements);