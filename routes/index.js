import express from "express";
import db from "../db/db";
import tweetController from '../tweetsControllers/tweets';


const router = express.Router();

router.get('/api/v1/tweets', tweetController.getAllTweets);
router.get('/api/v1/tweets/:id', tweetController.getTweet);
router.post('/api/v1/tweets', tweetController.createTweet);
router.put('/api/v1/tweets/:id', tweetController.updateTweet);
router.delete('/api/v1/tweets/:id', tweetController.deleteTweet);


export default router;
