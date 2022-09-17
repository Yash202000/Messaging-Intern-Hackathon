const express  = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//https://medium.com/@gairikaluni/gitlab-repository-rest-api-using-javascript-67fc20146872

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.DB_URL;

mongoose.connect(uri,{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('database connectino established successfully.....');
})


const projectsop = require('./routes/projects')
const signin = require('./routes/signin')
const signup = require('./routes/signup')
const home = require('./routes/home')
const test = require('./routes/test')




app.use('/projects',projectsop)
app.use('/signin',signin)
app.use('/signup',signup)
app.use('/home',home)
app.use('/remote_mirrors',mirror)
app.use('/test',test)

app.use('/list',projectlist)




app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})