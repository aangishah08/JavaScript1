var users;
(function (users) {
    var customer = /** @class */ (function () {
        function customer() {
        }
        customer.prototype.setName = function (name) {
            return this.name = name;
        };
        return customer;
    }());
    users.customer = customer;
})(users || (users = {}));
