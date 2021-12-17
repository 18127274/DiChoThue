class User {
    constructor(Id, Email, Phone) {
        this.id = Id;
        this.email = Email;
        this.phone = Phone;
        this.toJSON = "{" +
            "\"id\":\"" + this.id + "\"," +
            "\"email\":" + this.email + "," +
            "\"phone\":\"" + this.phone + "\"," +
            "}"
    }
}



module.exports = {
    user: User
}

module.exports.jsonToObject = function (json) {
    var obj = JSON.parse(json);
    return new User(obj.id, obj.email, obj.phone);
}
