const mongoose=require("mongoose");


const Schema=mongoose.Schema;

let user=new Schema(
             { name: {type:String, required:true},
               email: {type:String, required:true},
               password: {type:String, required:true},
               photo: {type:String},
               info: {type:String},
               pageinfo: {type:String}
                                 

               }
);

module.exports=mongoose.model("user", user);