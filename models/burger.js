const orm = require("../config/orm");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb)
    },
    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {devour: true}, condition, cb);
    }
};

module.exports = burger;
