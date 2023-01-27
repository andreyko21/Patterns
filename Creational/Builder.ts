export {};

class User {
    data: string[] = [];
}

interface IUserDataBuild {
    bFirstName(): this;
    bLastName(): this;
    bAgo(): this;
    getResult(): User;
}

class UserInfo implements IUserDataBuild {
    user: User;

    constructor() {
        this.user = new User();
    }

    bFirstName() {
        this.user.data.push('FirstName');
        return this;
    }

    bLastName() {
        this.user.data.push('LastName');
        return this;
    }

    bAgo() {
        this.user.data.push('Age');
        return this;
    }

    getResult() {
        return this.user;
    }
}

class Director {

    static construct() {
        return new UserInfo()
            .bFirstName()
            .bLastName()
            .bAgo()
            .getResult();
    }
}

const User1 = Director.construct();
console.log(User1.data);