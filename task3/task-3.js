const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function priceSale(sale) {
    console.log(sale.price * 0.85);

}

products.forEach(priceSale)


