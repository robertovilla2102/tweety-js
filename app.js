// Todos los require para tener las librerias activas
const express = require('express')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const app = express()

//usando nunjucks, para que reconozca los html
app.engine('html',nunjucks.render)
app.set(' view engine' , 'html') // seteamos el view engine como html
nunjucks.configure('views', {noCache: true});

// utlizimaos esto para parsear el http
app.use(express.urlencoded({extended : false}))

// 1er Middlewar, tambien utilizamos morgan
app.use(morgan('dev'))
app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl)
    next()
})

// Rutas 
app.use(require('./routes/index'))


/* STATICS FILES */
app.use(express.static('./public'))

// servidor montado
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () =>{
    console.log('El servido ya anda!' , app.get('port'))
})


