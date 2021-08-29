const express =           require('express')
const dotenv =            require('dotenv')
const morgan =            require('morgan')
const bodyParser =        require('body-parser')
const path =              require('path')
const session =           require('express-session')
// const sassMiddleware =    require('node-sass-middleware')
const cookieParser =      require('cookie-parser')
const connectDB =         require('./app/server/database/connection')

const app = express()

dotenv.config({path: 'config.env'})

const PORT = process.env.PORT || 8080

// Log request
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Database connection
connectDB()

// Parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser())


// Set view engine
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'app/views'))

// Styles
// app.use(sassMiddleware({
//   src: __dirname + '/app/assets',
//   dest: __dirname + '/app/assets',
//   indentedSyntax: false, // true = .sass and false = .scss
//   includePaths: [path.join(__dirname), 'node_modules'],
//   // debug: true,
//   outputStyle: 'compressed'
// }))

// Load assets
app.use(express.static(path.join(__dirname, 'app/assets')))
// app.use('/stylesheets', express.static(path.resolve(__dirname, 'assets/stylesheets')))
// app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
// app.use('/js', express.static(path.resolve(__dirname, 'app/assets/js')))
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.use(session({
  secret: process.env.TOKEN_SECRET,
  resave: false,
  saveUninitialized: true
}))

// Load routers
app.use('/', require('./app/server/routes/router'))

app.listen(3000, () => {
  console.log(`Server running on ${PORT}`)
})