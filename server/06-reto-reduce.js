const data = [1, 4, 2, 3, 3, 4, 4, 3, 1, 10, 3, 1, 4, 2, 3, 3, 4, 4, 3, 1, 10, 3, 2, 10, 10, 9, 9, 8, 7, 7, 6, 4, 9, 10, 5];

const rta = data.reduce((obj, item) => {
    if (item >= 1 && item <= 5) obj['1-5']++;
    if (item >= 6 && item <= 8) obj['6-8']++;
    if (item >= 9 && item <= 10) obj['9-10']++;

    return obj;
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
});

console.table(rta);