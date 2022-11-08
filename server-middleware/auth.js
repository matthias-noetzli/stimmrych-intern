const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt")
const StoryblokClient = require('storyblok-js-client')

const SESSION_SECRET = process.env.SESSION_SECRET;
const HASH = process.env.HASH;

 const StoryblokPublic = new StoryblokClient({
   accessToken: process.env.STORYBLOK_TOKEN
 })


app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: SESSION_SECRET}));


app.post('/login', function(req, res, next){
    if(bcrypt.compareSync(req.body.password, HASH)) {
     req.session.loggedIn = true;
     res.sendStatus(200);
    } else {
        const error = new Error("Invalid credentials!");
        error.statusCode = 401;
        next(error)
    }
 });
 
 app.get('/logout', function(req, res){
    req.session.destroy(function(){});
    res.sendStatus(200);
 });

 app.get('/session', checkSignIn, function(req,res){
    res.sendStatus(200);
 })

function checkSignIn(req, res, next){
   if(req.session.loggedIn){
      next();
   } else {
      const error = new Error("Not logged in!");
      error.statusCode = 401;
      next(error)
   }
}

app.get('/stories', checkSignIn, async function(req, res, next){
   try {
      let result = await StoryblokPublic.get("cdn/stories/"+req.query.path, {cv: +new Date()});
      res.json(result);
   } catch(error) {
      console.log(error);
      next(error);
   }
});


app.get('/settings', async function(req, res, next){
   try {
      let result = await StoryblokPublic.get("cdn/stories/settings", {cv: +new Date()});
      res.json(result);
   } catch(error) {
      console.log(error);
      next(error);
   }
});

module.exports = { path: '/api', handler: app }