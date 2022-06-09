

class Produc {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        alert(this.price * 0.75);
    }
}


const milk = new Produc('Moloko', 100)
milk.make25PercentDiscount()

//с заданием 2.1 не справилась, прошу понять и простить. Другие даже трогать не стала. очень отстаю))