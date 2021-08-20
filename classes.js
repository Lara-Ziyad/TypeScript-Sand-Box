var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created : ' + this.name);
    }
    //methods in classes
    User.prototype.register = function () {
        console.log(this.name + 'is new registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid Invoice');
    };
    return User;
}());
// make dependency of the class and call the method
// let layla = new User('layala', 'layla@gmail.com', 13);
// console.log(layla.email)
// layla.register()
//////////////////////////////////
// Making inherited class
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = 
        // super get the properties fro the upper class 
        _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    // inherite the function from the upper one
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var simon = new Member(1, 'simon', 'simon@gmail.com', 39);
simon.payInvoice();
