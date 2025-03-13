class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const adi = new User("adi")
// console.log(adi.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const android = new Teacher("android", "And@gmail.com")
// android.logMe()
// console.log(android.createId())



