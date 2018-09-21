// Dependencies.
let express = require("express")
let router = express.Router()

let cupcake = require("../models/cupcake.js")

// Gets all the cupcakes.
router.get("/", function(req, res) {
	cupcake.selectAll(function(data) {
		res.render("index", { cupcakes: data })
	})
})

// Adds a new cupcake.
router.post("/", function(req, res) {
	console.log(req.body)
	cupcake.insertOne(req.body.name, function() {
		res.redirect("/")
	})
})

// Updates a cupcake entry.
router.put("/cupcake/:id", function(req, res) {
	console.log(req.body)
	cupcake.updateOne(req.params.id, function() {
        res.status(200).end()
	})
})

// Deletes a cupcake.
router.delete("/cupcake/:id", function(req, res) {
	cupcake.deleteOne(req.params.id, function() {
		res.status(200).end()
	})
})

module.exports = router