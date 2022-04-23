const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break;
    }
}
console.log('for', rta);
//vs

const rta2 = numbers.find(item => item === 30);
console.log('find', rta2);

const products = [
    {
        id: '🍕',
        name: "Pizza",
        price: 12,
    },
    {
        id: '🍔',
        name: "Burger",
        price: 23,
    },
    {
        id: '🌭',
        name: "Hot dog",
        price: 34,
    },
    {
        id: '🥞',
        name: "Hot cakes",
        price: 355,
    },
];

const rt3 = products.find(item => item.id === '🍔');
console.log('find', rt3);

const rt4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex', rt4);

