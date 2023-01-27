var like;
var User = /** @class */ (function () {
    function User() {
        if (typeof User.like === 'object') {
            return User.like;
        }
        this.count = 0;
        User.like = this;
        return this;
    }
    User.prototype.getLikes = function () {
        return this.count;
    };
    User.prototype.addLike = function () {
        return this.count++;
    };
    return User;
}());
var user1 = new User();
var user2 = new User();
user1.addLike();
user2.addLike();
console.log(user1.getLikes());
console.log(user2.getLikes());
