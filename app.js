const express = require('express')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const app = express()

//usando nunjucks
app.engine('html',nunjucks.render)
app.set(' view engine' , 'html') // seteamos el view engine como html
nunjucks.configure('views', {noCache: true});


// utlizimaos esto para parsear el http
app.use(express.urlencoded({extended : false}))

app.use(morgan('dev'))

app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl)
//    console.log(req)
    next()
})


// segundo middlewar
app.use( '/special', function(req,res,next){
    
})




/* RUTAS */
app.use(require('./routes/index'))


/* STATICS FILES */
app.use(express.static('./public'))

// servidor
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () =>{
    console.log('El servido ya anda!' , app.get('port'))
})


