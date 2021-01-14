const connection = require("./connection");

function printQuestionMarks(num) {
    var array = [];

    for (var i=0; i<num; i++) {
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
    getAll: function( )
}