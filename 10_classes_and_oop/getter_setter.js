class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }


    get email() {
       return this._email.toUpperCase()
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    get password() {
        return `${this._password} is your password`;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

}

const aditya = new User("adi@gmail.com", "adi")
console.log(aditya.email);
console.log(aditya.password);