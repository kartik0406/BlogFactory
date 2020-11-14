var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    author: {
        id: {                                                
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    text: String,
    username: String,
    timestamp: {
        day: Number,
        month: Number,
        year: Number
    }
})
module.exports = mongoose.model("Comment", commentSchema);