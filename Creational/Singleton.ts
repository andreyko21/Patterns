let like;

class User{
static like: User;
[x: string]: any;
    constructor(){
        if(typeof User.like === 'object') {
            return User.like;
        }
        this.count = 0;
        User.like = this;
        return this;
    }

    getLikes(){
        return this.count;
    }
    addLike(){
        return this.count++;
    }
}

const user1 = new User();
const user2 = new User();

user1.addLike();
user2.addLike();

console.log(user1.getLikes())
console.log(user2.getLikes())