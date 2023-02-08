
interface PaymentMethod {
    setNext(paymentMethod: PaymentMethod): PaymentMethod;

    pay(request: string): string;
}

abstract class AbstractPaymentMethod implements PaymentMethod
{
    private nextPaymentMethod!: PaymentMethod;

    public setNext(paymentMethod: PaymentMethod): PaymentMethod {
        this.nextPaymentMethod = paymentMethod;
        return paymentMethod;
    }

    public pay(request: string): string {
        if (this.nextPaymentMethod) {
            return this.nextPaymentMethod.pay(request);
        }
        return '';
    }
}

class CardMethod extends AbstractPaymentMethod {
    public pay(method: string): string {
        if (method === 'card') {
            return `Pay wiht ${method}`;
        }
        return super.pay(method);
    }
}

class CashMethod extends AbstractPaymentMethod {
    public pay(method: string): string {
        if (method === 'cash') {
            return `Pay with ${method}.`;
        }
        return super.pay(method);
    }
}

class CreditMethod extends AbstractPaymentMethod {
    public pay(method: string): string {
        if (method === 'credit') {
            return `Pay with ${method}.`;
        }
        return super.pay(method);
    }
}

function clientCode(paymentMethod: PaymentMethod) {
    const methods = ['credit', 'card', 'cash'];

    for (const method of methods) {
        console.log(`Client: Who wants a ${method}?`);

        const result = paymentMethod.pay(method);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${method} was left untouched.`);
        }
    }
}

const card = new CardMethod();
const cash = new CashMethod();
const credit = new CreditMethod();

clientCode(card);
console.log('');
clientCode(cash);
