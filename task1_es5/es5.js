'use strict'

function Produc(name, price) {
    this.name = name;
    this.price = price;
}

Produc.prototype.make25PercentDiscount = function () {
    alert(this.price * 0.75)
}

const milk = new Produc('Moloko', 100)
milk.make25PercentDiscount()