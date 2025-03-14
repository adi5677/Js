function User(email, password) {
    this.email = email;
    this.password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },

        set: function() {
            this._email = email.toUpperCase()
        }

    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        },

        set: function() {
            this._password = password.toUpperCase()
        }
    })

}

const chai = new User("chai@chhai.com", "chai")
console.log(chai.email);
