interface Canal {
    subscribe(subscriber: Subscriber): void;
    unSubscribe(subscriber: Subscriber): void;
    notify(): void;
}
class ConcreteCanal implements Canal {
    private subscribers: Subscriber[] = [];

    public subscribe(subscriber: Subscriber): void {
        const isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            return console.log('The user is already subscribed');
        }
        console.log(`${subscriber.name} subscribed`);
        this.subscribers.push(subscriber);
    }
    public unSubscribe(subscriber: Subscriber): void {
        const observerIndex = this.subscribers.indexOf(subscriber);
        if (observerIndex === -1) {
            return console.log(`${subscriber.name} not subscribed`);
        }

        this.subscribers.splice(observerIndex, 1);
        console.log(`${subscriber.name} unsubscribed`);
    }
    public notify(): void {
        console.log('Notifying subscribers...');
        for (const subscriber of this.subscribers) {
            subscriber.update(this);
        }
    }
    public newMessage(): void {
        console.log('You have unread news');
        this.notify();
    }
}

interface Subscriber {
    update(canal: Canal): void;
    name: string;
}
class ConcreteSubscriber1 implements Subscriber {
    constructor(public name: string){};
    public update(canal: Canal): void {
            console.log(`${this.name} Reacted to the news.`);
    }
}

class ConcreteSubscriber2 implements Subscriber {
    constructor(public name: string){};
    public update(canal: Canal): void {
            console.log(`${this.name} Reacted to the news.`);
    }
}

const canal = new ConcreteCanal();
const subscriber1 = new ConcreteSubscriber1('Andrey');
canal.subscribe(subscriber1);
canal.unSubscribe(subscriber1);
canal.unSubscribe(subscriber1);
const subscriber2 = new ConcreteSubscriber2('Oleg');
canal.subscribe(subscriber2);
canal.newMessage();
canal.unSubscribe(subscriber2);