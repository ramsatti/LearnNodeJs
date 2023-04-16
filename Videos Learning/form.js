let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

http.createServer(handleRequest).listen(8080);

// request handler
function handleRequest(req, res) {
    if (req.url == '/register') {
        register(req, res);
    }
    else {
        showForm(req, res);
    }
}

function register(req, res) {
    let form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        let name = fields.name
        let dob = fields.dob
        let email = fields.email
        let cemail = fields.cemail
        let pwd = fields.pwd
        let cpwd = fields.cpwd
        let file2save = `Name: ${name}, Date Of Birth: ${dob}, Email: ${cemail}, Password: ${cpwd}\n`
        if (email != cemail) {
            return res.end("Email & Confirm Email Don't Match. Please Retype Correctly.")
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.end('Invalid Email')
        }
        else if (pwd != cpwd) {
            return res.end("Password & Confirm Password Don't Match. Please Retype Correctly.")
        }
        else if (pwd.length <= 8) {
            return res.end('There are Not Enough Characters In The Password.')
        }
        else if (!/\d/.test(pwd)) {
            return res.end('There are Not Any Numbers.')
        }
        else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd)) {
            return res.end('There are no Special Characters  .')
        }
        fs.appendFile('yesSir.txt', file2save, function (err) {
            if (err) throw err
            console.log('Saved!')
        })
        return res.end('Saved!')
    })
}

function showForm(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<form action="register" method="post" enctype="multipart/form-data">')
    res.write('<strong>Registeration Form</strong><br><br>')
    res.write('Name2: <input type="text" name="name"><br><br>')
    res.write('Date Of Birth: <input type="text" name="dob"><br><br>')
    res.write('Email: <input type="text" name="email"><br><br>')
    res.write('Confirm Email: <input type="text" name="cemail"><br><br>')
    res.write('Password: <input type="text" name="pwd"><br><br>')
    res.write('Confirm Password: <input type="text" name="cpwd"><br><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    return res.end()
}