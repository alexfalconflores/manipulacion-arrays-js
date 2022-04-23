const orders = [
    {
        customerName: 'Igor',
        total: 100,
        delivered: false,
    },
    {
        customerName: 'Vladimir',
        total: 200,
        delivered: true,
    },
    {
        customerName: 'Sergei',
        total: 300,
        delivered: false,
    },
    {
        customerName: 'Anastasia',
        total: 400,
        delivered: true,
    },
    {
        customerName: 'Lucia',
        total: 500,
        delivered: false,
    }
];

const rta = orders.map(item => item.total);
console.log('rta', rta);
console.log('original', orders);

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });
// console.log('rta2', rta2);
// console.log('original', orders);

const rta3 = orders.map(item => {
    return {
        ...item,
        tax : .19,
    };
});
console.log('rta3', rta3);
console.log('original', orders);