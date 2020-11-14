var mongoose                 =require('mongoose');
var passportLocalMongoose    =require("passport-local-mongoose");


var userSchema = new mongoose.Schema({
 likedBlogs:[
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
     }
 ],
 Blogs:[
     {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Blog"
     }
 ],
 username:String,
 passport:String,
 about:String,
 img:{image:Buffer,contentType:String,path:String}

});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);