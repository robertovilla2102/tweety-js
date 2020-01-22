const express = require('express')
const tweetBank = require('../tweetBank');
const router = express.Router()

// creamos la pagina principal, usando la funcion list() e=de tweetBank
router.get('/', (req,res) =>{
    let tweet = tweetBank.list();
    res.render('index.html',{ tweets: tweet, showform:true})
})

// pagina para agregar  nuevos tweets, usando la funcion add() de tweetyBank
 router.post('/agregarTweet' , (req,res) =>{
    let {name, content} = req.body
    tweetBank.add(name, content)
    res.redirect('/')
} ) 

// ruta para cada twitt, solo para que aparezca ese
router.get('/tweet/:id', (req,res) => {
    let id = parseInt(req.params.id)
    let tweetsUser = tweetBank.find({id : id})
    res.render('index.html',{tweets : tweetsUser})
})

// ruta para todos los ttwitss de la misma persona
router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweet = tweetBank.find( { name: name } );
    res.render( 'index.html', { tweets: tweet,showform : false } );
  });

// esto no me acuerdo de que es
module.exports = router;