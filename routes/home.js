var express = require('express');
const homeController=require('../controllers/homeController.js');

const homeRouter = express.Router();
homeRouter.post("/find-videos", homeController.FindVideo);
homeRouter.get("/", homeController.Index);
homeRouter.post("/signup", homeController.SignUp);
homeRouter.post("/login", homeController.Login);
homeRouter.get("/logout", homeController.LogOut);
homeRouter.get("/watch/:watch", homeController.WatchVideo);

module.exports = homeRouter;