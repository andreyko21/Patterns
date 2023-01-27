"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        this.data = [];
    }
    return User;
}());
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.user = new User();
    }
    UserInfo.prototype.bFirstName = function () {
        this.user.data.push('FirstName');
        return this;
    };
    UserInfo.prototype.bLastName = function () {
        this.user.data.push('LastName');
        return this;
    };
    UserInfo.prototype.bAgo = function () {
        this.user.data.push('Age');
        return this;
    };
    UserInfo.prototype.getResult = function () {
        return this.user;
    };
    return UserInfo;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.construct = function () {
        return new UserInfo()
            .bFirstName()
            .bLastName()
            .bAgo()
            .getResult();
    };
    return Director;
}());
var User1 = Director.construct();
console.log(User1.data);
