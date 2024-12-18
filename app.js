var express = require('express')
var hotelRouter = require('./hotel/hotelController') 
var mongoose = require('mongoose')
var path = require('path')
var http = require('http')

var app = express()

// Middlewares
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig')
app.use(express.json())

// Routes
app.use('/hotels', hotelRouter)

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/TESTNODE', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected!')
    })
    .catch((error) => {
        console.error("Error connecting to DB: ", error)
    })

var server = http.createServer(app)

const PORT = process.env.PORT || 5000  

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`)
})
