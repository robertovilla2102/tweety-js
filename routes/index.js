const express = require('express')
const tweetBank = require('../tweetBank');
const router = express.Router()

router.get('/', (req,res) =>{
    let tweet = tweetBank.list();
    res.render('index.html',{ tweets: tweet, showform:true})
})

// pagina para agregar tweets
 router.post('/agregarTweet' , (req,res) =>{
    let {name, content} = req.body
    tweetBank.add(name, content)
    res.redirect('/')
} ) 

// ruta para cada usuario
router.get('/tweet/:id', (req,res) => {
    let id = parseInt(req.params.id)
    let tweetsUser = tweetBank.find({id : id})
    res.render('index.html',{tweets : tweetsUser})
})

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweet = tweetBank.find( { name: name } );
    res.render( 'index.html', { tweets: tweet,showform : false } );
  });

module.exports = router;