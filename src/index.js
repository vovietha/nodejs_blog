const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

//connect to db
db.connect()


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended : true})) ///POST form html
app.use(express.json())  //POST XMLhttpRequest, fetch, axios,...

//HTTP logger
app.use(morgan('combined'))


//templates-engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}))
app.set("view engine", '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))


//route init
route(app)

app.listen(port, () => {
  console.log(`Blog_node app listening on port ${port}`)
})