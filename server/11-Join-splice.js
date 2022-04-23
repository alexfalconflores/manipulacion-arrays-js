const elements = ['Fire', 'Air', 'Water', 'Earth'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    index === elements.length - 1 ? rtaFinal += element : rtaFinal += element + separator;
}

console.log('for', rtaFinal);

//vs

const rta = elements.join('--');
console.log('join', rta);

const title = 'Curso de manipulacion de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log('split', urlFinal);