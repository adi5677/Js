const User = {

    _email: 'adi@adi.com',
    _password: "Adi",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value.toUpperCase()
    }
}

const coffee = Object.create(User)
console.log(coffee.email);