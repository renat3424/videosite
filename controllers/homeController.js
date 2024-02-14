const User=require("C:/Projects/videsite/models/user");
const Videos=require("C:/Projects/videsite/models/videos");
const Comments=require("C:/Projects/videsite/models/comments");



exports.FindVideo=function(req, res){
            
                console.log(req.body.searchfield);
              Videos.find({}, function (error1, videos) {
                videos1=[];
                for (var j=0; j<videos.length; j++) {
                if (videos[j].title.toLowerCase().includes(req.body.searchfield.toLowerCase())){

                       videos1.push(videos[j]);
              } 
                    }
               res.render("index", {
               	 "isLogin": req.session.user_id ? true : false,
               	 "videos": videos1
               });
                 
                 }).sort({createdAt: -1});

         }

exports.Index=function(req, res){
            
           
              Videos.find({}, function (error1, videos) {
               
               res.render("index", {
                 "isLogin": req.session.user_id ? true : false,
                 "videos": videos
               });

                 }).sort({createdAt: -1});

         }
exports.SignUp=function(req, res){
             
           
              User.findOne({ name: req.body.name }, function(error, user){
                   
                   if(user==null){
                             
                            let newUser=new User( { 
                              name: req.body.name,
                                email: req.body.email,
                                password: req.body.password,
                                                    });
                            
                            newUser.save(function(err) {
                              res.redirect("/");
                            });
                   }else{
                    res.send("user already exists");
                   }


              });



         }
exports.Login=function(req, res){
             
           
               User.findOne({ name: req.body.name }, function(error, user){
                   
                    if(user==null){

                            res.send("user does not exist");
                   }else{
                          
                           if(user.password==req.body.password){
                                   
                                   req.session.user_id=user._id;
                                   res.redirect("/");
                                   console.log("entered as "+req.body.name);
                           }else{

                            res.send("password is incorrect");
                           }
                   }


              });

            

         }

exports.LogOut=function(req, res){
             
                       req.session.destroy();
                       res.redirect("/");
                  
            

         }

exports.WatchVideo=function(req, res){
           
                Videos.findOne({
                  createdAt: parseInt(req.params.watch)
                }, function (error, video) {
                  if(video==null){

                    res.send("video doesn't exist")
                  }else{
                           
                        Comments.find({video: video._id}).populate("user").exec(function (error1, comments) {
                   
               res.render("videopage/index", {
                 "video": video,
                 "comments": comments
                 
               });

                 })
                  }
                });
                           





            }



