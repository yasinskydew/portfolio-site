const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const { sendFeedbackEmail } = require('../emails/feedbackEmail')

app = express()

app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT 

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me'
    })
})

app.get('/contacts', (req, res) => {
    res.render('contacts')
})


app.get('/works', (req, res) => {
    res.render('works')

})

app.post('/test', (req, res) => {
    const emailData = req.body
    sendFeedbackEmail(emailData.user_email, emailData.user_comment)
    res.render('getEmail')
    
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found.'
    })
})


app.listen(port, () => {
    console.log('port on ' + port)
})
