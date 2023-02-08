class MessageStatus{
    nextStatus: any;
    name: any;
        constructor(name: any, nextStatus: any){
            this.name = name;
            this.nextStatus = nextStatus;
        }
    
        public next(){
            return new this.nextStatus();
        }
    }
    
    class Connect
     extends MessageStatus{
        constructor(){
            super('waitingToConnect', Sending);
        }
    };
    
    class Sending extends MessageStatus{
        constructor(){
            super('sending', Result);
        }
    };
    
    class Result extends MessageStatus{
        constructor(){
            super('result', Result);
        }
    };
    
    class Message{
    state: Connect;
        constructor(){
            this.state = new Connect();
        }
    
        nextState(){
            this.state = this.state.next();
        }
    }
    
    const myOrder = new Message();
    
    console.log(myOrder.state.name);
    
    myOrder.nextState();
    console.log(myOrder.state.name);
    
    myOrder.nextState();
    console.log(myOrder.state.name);