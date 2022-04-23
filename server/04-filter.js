const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'happy',  ];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArray.push(element);
    }
}

console.log('newArray', newArray);
console.log('words', words);

const rta = words.filter(word => word.length >= 6);

console.log('newArray', newArray);
console.log('words', words);
console.log('');

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
    },
    {
        customerName: 'Ignacio',
        total: 600,
        delivered: true,
    }
];

const rta2 = orders.filter(order => order.delivered === true && order.total >= 300);
console.log('rta2');
console.table(rta2);
console.log('orders');
console.table( orders);

const search = (query) => {
    return orders.filter(order => order.customerName.toLowerCase().includes(query.toLowerCase()));
};
console.log('search');
console.table(search('Ig'));
