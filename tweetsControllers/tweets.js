/* eslint-disable class-methods-use-this */
import db from '../db/db';

class TweetsController {
  getAllTweets(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Tweets retrieved successfully',
      Tweets: db,
    });
  }

  getTweet(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((tweet) => {
      if (tweet.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'tweet retrieved successfully',
          tweet,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'tweet does not exist',
    });
  }

  createTweet(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    const tweet = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description,
    };
    db.push(tweet);
    return res.status(201).send({
      success: 'true',
      message: 'tweet added successfully',
      tweet,
    });
  }

  updateTweet(req, res) {
    const id = parseInt(req.params.id, 10);
    let tweetFound;
    let itemIndex;
    db.map((tweet, index) => {
      if (tweet.id === id) {
        tweetFound = tweet;
        itemIndex = index;
      }
    });

    if (!tweetFound) {
      return res.status(404).send({
        success: 'false',
        message: 'tweet not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    const newtweet = {
      id: tweetFound.id,
      title: req.body.title || tweetFound.title,
      description: req.body.description || tweetFound.description,
    };

    db.splice(itemIndex, 1, newtweet);

    return res.status(201).send({
      success: 'true',
      message: 'tweet added successfully',
      newtweet,
    });
  }

  deleteTweet(req, res) {
    const id = parseInt(req.params.id, 10);
    let tweetFound;
    let itemIndex;
    db.map((tweet, index) => {
      if (tweet.id === id) {
        tweetFound = tweet;
        itemIndex = index;
      }
    });

    if (!tweetFound) {
      return res.status(404).send({
        success: 'false',
        message: 'tweet not found',
      });
    }
    db.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'tweet deleted successfuly',
    });
  }
}

const tweetController = new TweetsController();
export default tweetController;