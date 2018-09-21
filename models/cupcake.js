// Dependencies.
let orm = require("../config/orm.js")

let cupcake = {
	selectAll: function(cb) {
		orm.selectAll("cupcakes", function(res) {
			cb(res)
		})
    },
    selectAllEaten: function(cb) {
		orm.selectAll("cupcakes", true, function(res) {
			cb(res)
		})
	},
	insertOne: function(cupcakeName, cb) {
		orm.insertOne("cupcakes", "name", cupcakeName, function(res) {
			cb(res)
		})
	},
	updateOne: function(idNum, cb) {
		orm.updateOne("cupcakes", "devoured", true, "id", idNum, function(res) {
			cb(res)
		})
	},
	deleteOne: function(idNum, cb) {
		orm.deleteOne("cupcakes", "id", idNum, function(res) {
			cb(res)
		})
	}
}

module.exports = cupcake