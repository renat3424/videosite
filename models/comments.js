const mongoose=require("mongoose");


const Schema=mongoose.Schema;

let comments=new Schema(
             { user: {type: Schema.Types.ObjectId, ref:"user"},
             video: {type: Schema.Types.ObjectId, ref:"videos"},
               comment: {type:String, required:true},
               createdAt: {type:String}
                          

               }
);

module.exports=mongoose.model("comments", comments);