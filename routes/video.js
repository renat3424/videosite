var express = require('express');
const videoController=require('../controllers/videoController.js');

const videoRouter = express.Router();
videoRouter.post("/change-profile-picture", videoController.ChangePicture);
videoRouter.post("/change-info", videoController.ChangeInfo);
videoRouter.post("/do-comment", videoController.DoComment);
videoRouter.get("/to-user/:user", videoController.ToUser);
module.exports = videoRouter;