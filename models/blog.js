var mongoose    =require("mongoose");

var blogSchema=new mongoose.Schema({
  title:String,
  image:String,
  text:String,
  comments:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
  }],
  author:{
      id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User"
      },
      img:{image:Buffer,contentType:String,path:String},
      username:String
  },
  likes:{type:Number,default:0}


});
module.exports  =mongoose.model("Blog",blogSchema);