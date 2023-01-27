class Phone{
    constructor(protected model: string){
        this.model = model;
    }
}

class PhoneFactory{
    models: Phone[];
    constructor(name){
        this.models =[];
    }

    create(name){
        let model = this.models[name];
        if (model) return model;
        else this.models[name] =  new Phone(name);
        return this.models[name];
    }
    getModels(){
        console.table(this.models);
    }
}

const factory = new PhoneFactory("");
const samsung = factory.create('S7');
const samsung2 = factory.create('S7');
const iphone = factory.create('7');

console.log(factory.getModels());