const connection = require("./connection");

function printQuestionMarks(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
};

function objToSql(obj) {
    var array = [];

    for (var key in obj) {
        array.push(key + "=" + obj[key])
    }

    return array.toString();
};

const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        // console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) { throw err }
            cb(res);
        })
    },

    insertOne: function (table, columns, values, cb) {
        console.log(vals)
        // INSERT INTO <TABLE NAME> (COLUMNS) VALUES (?)
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
        // console.log(queryString);

        connection.query(queryString, values, function (err, res) {
            if (err) { throw err };
            cb(res);
        })

    },

    updateOne: function (table, columnValues, condition, cb) { 
        // UPDATE <TABLE NAME> SET <COLUMNVALUES> WHERE CONDITION (is true)
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(columnValues);
        queryString += " WHERE ";
        queryString += condition;
        // console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) {throw err};
            cb (res);
        });
    },
}

module.exports = orm;