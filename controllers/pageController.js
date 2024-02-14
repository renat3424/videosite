const User=require("C:/Projects/videsite/models/user");
const Videos=require("C:/Projects/videsite/models/videos");
const Comments=require("C:/Projects/videsite/models/comments");


exports.MyPage=function(req, res){
             
                   
                       

     User.findOne({_id: req.session.user_id}).exec(function(error, user) {
                      	
                                     
                                    
                                   
                                Videos.find({user: req.session.user_id}).exec(function(error, videos) {

                                    res.render("mypage", {
                                        "user": user,
                                    	"videos": videos});
                                });
                      });
                  
            

         }
exports.Back=function(req, res){
             
                      
                      res.redirect("/");
                  
            

         }
exports.UploadVideo=function (req, res) {
			if (req.session.user_id) {
				let formData = new formidable.IncomingForm();
				formData.maxFileSize = 1000 * 1024 * 1204;
				formData.parse(req, function (error1, fields, files) {
				
					let oldPath = files.video.path;
					let newPath = "public/video/" + new Date().getTime() + "-" + files.video.name;

					let title = fields.title;
					let description = fields.description;
				
					let videoId = fields.videoId;
					

					let oldPathThumbnail = files.thumbnail.path;
					let thumbnail = "public/images/" + new Date().getTime() + "-" + files.thumbnail.name;

					fileSystem.rename(oldPathThumbnail, thumbnail, function (error2) {
						console.log("thumbnail upload error = ", error2);
					});

					fileSystem.rename(oldPath, newPath, function (error2) {
						getUser(req.session.user_id, function (user) {
							
							
							let currentTime = new Date().getTime();
                            
							getVideoDurationInSeconds(newPath).then((duration) => {

							let Hours = Math.floor(duration / 60 / 60);
								let Minutes = Math.floor(duration / 60) - (Hours * 60);
								let Seconds = Math.floor(duration % 60);

							     
                          
                              let video=new Videos({

                                      user: user._id,
                                     filePath:  newPath,
				                       createdAt: currentTime,
									
									
									minutes: Minutes,
									seconds: Seconds,
									hours: Hours,
                                     title: title,
									description: description,
                                     thumbnail: thumbnail

                              });

                                   video.save(function(err) {
                                   	if (err) {
                                   	console.log(err);
                                   }
                            	res.redirect("/");
                            });  
							});

                          

						});
					});
				});
			} else {
				res.redirect("/");
			}
		}