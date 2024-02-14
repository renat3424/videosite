const User=require("C:/Projects/videsite/models/user");
const Videos=require("C:/Projects/videsite/models/videos");
const Comments=require("C:/Projects/videsite/models/comments");
const formidable = require("formidable");
const fileSystem = require("fs");
exports.ToUser=function(req, res){
     	     
         
                           

                      User.findOne({_id: req.params.user}).exec(function(error, user) {
                      	
                                     
                                    
                                   
                                Videos.find({user: req.params.user}).exec(function(error, videos) {

                                    res.render("mypage1", {
                                        "user": user,
                                    	"videos": videos});
                                });
                      });



            }


exports.DoComment=function (request, result) {
			console.log("entered");

			if (request.session.user_id) {
				 let comment = new Comments(
                        {
                       user: request.session.user_id,
                       video: request.body.videoId,
                       comment: request.body.comment,
                       createdAt: new Date().getTime()
                   }
				 	);
				

                  comment.save(function(err){
                                   	

                                   	if (err) {
                                   	console.log(err);
                                   }

                                  User.findOne({ _id:  request.session.user_id}, function(error, user){
                                 result.json({
							"status": "success",
							"message": "Comment has been posted",
							"user": {
                                "name": user.name,
                                "photo":user.photo


							},
								
							"comment": comment
						});
                                }
                               )

                               })
			} else {
				result.json({
					"status": "danger",
					"message": "Please login to perform this action."
				});
			}
		}

exports.ChangePicture=function (request, result) {
if (request.session.user_id) {
           let formData = new formidable.IncomingForm();
           formData.parse(request, function (error1, fields, files) {
				
					let oldPath = files.image.path;
					let newPath = "public/profiles/" + request.session.user_id + "-" + files.image.name;
					fileSystem.rename(oldPath, newPath, function(error) {
						console.log(error);
						 User.findOne({ _id:  request.session.user_id}, function(error, user){

console.log(error);
						 	  user.photo=newPath;
						 	  user.save(function(err) {
                            	result.redirect("mypage");
                            });

						 	  console.log(user.photo);
						 });
					});
});
}
}


exports.ChangeInfo=function (req, res) {

User.findOne({ _id: req.session.user_id }, function(error, user){


      user.info=req.body.info;
user.pageinfo=req.body.infopage;
 console.log("this is"+req.body.info);
user.save(function(err) {
	                        
                            	res.redirect("mypage");
                            });

})
             





  }