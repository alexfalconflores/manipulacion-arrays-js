const matrix = [
    [1, 2, 3, 4, 5], //0
    [6, 7, 8, 9, 10, [50, 60, [70, 80]]], //1
    [11, 12, 13, 14, 15] //2
];

let newArray = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

const rta = matrix.flat(3);
console.log('flat', rta);
console.log('');

const myFlatWithFor = (array, depth) => {
    if (depth === undefined) {
        depth = 1;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (Array.isArray(item) && depth > 0) {
            newArray = newArray.concat(myFlatWithFor(item, depth - 1));
        } else {
            newArray.push(item);
        }
    }
    return newArray;
}

const myFlatWithForIn = (array, depth) => {
    if (depth === undefined) {
        depth = 1;
    }
    let newArray = [];
    for (const item in array) {
        if (Array.isArray(array[item]) && depth > 0) {
            newArray = newArray.concat(myFlatWithForIn(array[item], depth - 1));
        } else {
            newArray.push(array[item]);
        }
    }
    return newArray;
}

const myFlatWithForOf = (array, depth) => {
    if (depth === undefined) {
        depth = 1;
    }
    let newArray = [];
    for (const item of array) {
        if (Array.isArray(item) && depth > 0) {
            newArray = newArray.concat(myFlatWithForOf(item, depth - 1));
        } else {
            newArray.push(item);
        }
    }
    return newArray;
}

const myFlatWithForEach = (array, depth) => {
    if (depth === undefined) {
        depth = 1;
    }
    let newArray = [];
    array.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            newArray = newArray.concat(myFlatWithForEach(item, depth - 1));
        } else {
            newArray.push(item);
        }
    });
    return newArray;
}

const myFlatWithReduce = (array, depth) => {
    if (depth === undefined) {
        depth = 1;
    }
    return depth > 0 ?
        array.reduce((accumulator, item) => accumulator.concat(Array.isArray(item) ?
            myFlatWithReduce(item, depth - 1) : item), []) :
        array.slice();
};

const myFlatWithGenerator = (array, depth) => {
    function* Generator(array, depth) {
        if (depth === undefined) {
            depth = 1;
        }
        for (const item of array) {
            if (Array.isArray(item) && depth > 0) {
                yield* Generator(item, depth - 1);
            } else {
                yield item;
            }
        }
    }
    return [...Generator(array, depth)];
}

console.log('myFlatWithFor', myFlatWithFor(matrix));
console.log('myFlatWithFor', myFlatWithFor(matrix, 2));
console.log('myFlatWithFor', myFlatWithFor(matrix, Infinity));
console.log('myFlatWithForIn', myFlatWithForIn(matrix, 2));
console.log('myFlatWithForOf', myFlatWithForOf(matrix, 2));
console.log('myFlatWithForEach', myFlatWithForEach(matrix, 3));
console.log('myFlatWithReduce', myFlatWithReduce(matrix, Infinity));
console.log('myFlatWithGenerator', myFlatWithGenerator(matrix, 2));


