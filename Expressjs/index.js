const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));

//Get request is used to get the webpage
app.get('/', (req, res) => {
    console.log('get request')
    res.send('Hello World!')
})

//Get request is used to get the webpage
app.get('/path2', (req, res) => {
    console.log('get request')
    res.send('Hello Path2!')
})

//Post request is usually used by forms or javascript to send information to the server and get a response on what to do next.
app.post('/', (req, res) => {
    console.log(req.body)
    console.log('post request')
    res.send('hello ' + req.body.name)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})