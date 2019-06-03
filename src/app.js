const express = require('express')
const path = require('path')
const hbs = require('hbs')

app = express()

const port = process.env.PORT || 3000

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

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found.'
    })
})


app.listen(port, () => {
    console.log('server is up on port ' + port)
})
