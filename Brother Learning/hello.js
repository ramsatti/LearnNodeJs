let http = require('http')
let fs = require('fs')
let formidable = require('formidable')
let url = require('url')

http.createServer(function (req, res) {
    let q = url.parse(req.url, true).query;
    // if (req.url == '/something') {
    //     let name = fields.name
    // }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write('Name: <input type="text" name="name"><br><br>')
    res.end(`Hello ${q.name}`)
}).listen(8001)