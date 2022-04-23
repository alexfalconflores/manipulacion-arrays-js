const items = [1, 4, 2, 3, 3, 4, 4, 3, 1, 10, 3];

const rta = items.reduce((obj, item) => {
    //Option 1
    !obj[item] ? obj[item] = 1 : obj[item]++;
    //Option 2
    // obj[item] = (obj[item] || 0) + 1;
    //Option 3
    // if (!obj[item]) {
    //     obj[item] = 1;
    // } else {
    //     obj[item]++;
    // }
    return obj;
}, {});

console.table(rta);

const data = [
    { name: 'John', level: 'low' },
    { name: 'Alex', level: 'hight' },
    { name: 'Andrea', level: 'medium' },
    { name: 'Lucia', level: 'low' },
    { name: 'Joan', level: 'hight' },
    { name: 'Alexia', level: 'medium' },
    { name: 'Johanna', level: 'low' },
]

const rta2 = data.map(item => item.level)
    .reduce((obj, item) => {
        !obj[item] ? obj[item] = 1 : obj[item]++;
        return obj;
    }, {})
console.table(rta2);
