const mongoose=require("mongoose");


const Schema=mongoose.Schema;

let videos=new Schema(
             { user: {type: Schema.Types.ObjectId, ref:"user"},
               filePath:  {type:String, required:true},
				createdAt: {type:Number, required:true},
									
									
									minutes: {type:Number, required:true},
									seconds: {type:Number, required:true},
									hours: {type:Number, required:true},
                                     title: {type:String, required:true},
									description: {type:String},
                                    thumbnail: {type:String, required:true}

               }
);

module.exports=mongoose.model("videos", videos);