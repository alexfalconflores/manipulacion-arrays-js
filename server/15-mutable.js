const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

let newProducts;
const myProducts = [];

console.log('products');
console.table(products);
console.log("myProducts", myProducts);
console.table(myProducts);
console.log("-".repeat(10));

//Reto
const productIndex = products.findIndex(product => product.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    newProducts = products.filter(product => product !== products[productIndex]);
}
console.log('products');
console.table(newProducts);
console.log("myProducts");
console.table(myProducts);
console.log("-".repeat(10));
//Fin Reto


//Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

//Reto
const productsV3 = productsV2.map(item => {
    if (item.id === update.id) {
        return {
            ...item,
            ...update.changes
        }
    }
    return { ...item }
});
console.log('-------------------------------------');
console.log('productsV3');
console.table(productsV3);
console.log('productsV2');
console.table(productsV2);
//Fin Reto

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes
}
console.log('productsV2');
console.table(productsV2);
