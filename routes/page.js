var express = require('express');
const pageController=require('../controllers/pageController.js');

const pageRouter = express.Router();
pageRouter.post("/upload-video", pageController.UploadVideo);
pageRouter.get("/back", pageController.Back);
pageRouter.get("/mypage", pageController.MyPage);
module.exports = pageRouter;