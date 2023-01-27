class Shop {
    orderItem(amount: number) {
        const payment = new Payment();
        const packaging = new Packaging();
        const delivery = new Delivery();

        payment.pay();
        packaging.package();
        delivery.send();
    }
}

class Payment {
    pay() {
        console.log('payment process');
    }
}

class Packaging {
    package() {
        console.log('packing process');
    }
}

class Delivery {
    send() {
        console.log('sending process');
    }
}

const shop = new Shop();
shop.orderItem(4);
