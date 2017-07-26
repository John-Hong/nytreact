// Import Mongoose
var mongoose = require("mongoose");
// Schema
var Schema = mongoose.Schema;

// Mongoose.Schema 
var ArticleSchema = new Schema({
	title: {
		type: String,
		trim: true
	}, 
	date: {
		type:Date
		default: Date.now
	}, 
	url: {
		type:String
		unique:true
	}
});

//This will create the Model
var Article = mongoose.model("Article", ArticleSchema);

// Export it for use.
module.exports = Article;