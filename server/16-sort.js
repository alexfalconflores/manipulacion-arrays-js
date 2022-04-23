const months = ["March", "Jan", "Feb", "Dec", "Jan"];
months.sort((a, b) => {
    return (
        new Date(`${a} 2022`) - new Date(`${b} 2022`)
    )
});
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log(words);
// Internet Explorer
// words.sort((a, b) => a.localeCompare(b));
// console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2020, 0, 5),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2020, 0, 2),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2020, 0, 6),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2020, 0, 4),
    },
];
orders.sort((a, b) => a.date - b.date);
console.table(orders);