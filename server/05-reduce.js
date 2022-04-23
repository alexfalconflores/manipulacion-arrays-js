const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element;
}
console.log('sum', sum);

const rta = totals.reduce((accumulator, element) => accumulator + element, 0); // 0 is the initial value
console.log('rta', rta);