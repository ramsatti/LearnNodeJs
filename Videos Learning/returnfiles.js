let http = require('http')
let fs = require('fs')
let url = require('url')

http.createServer(function (req, res) {
    let q = url.parse(req.url, true).query
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile(`${q.name}.html`, function (err, data) {
        if (err) return res.end('not found')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
}).listen(8000) 