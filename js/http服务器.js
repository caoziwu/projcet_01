const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()
server.on('request', (req, res) => {
    // 获取url地址
    const url = req.url
    const flie = path.join(__dirname, '../', url)
    var content = "<h1>404 NOT FOUND</h1>"
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (url != '/favicon.ico') {
        fs.readFile(flie, function (err, data) {
            if (err) {
                return '<h1>404 NOT FOUND</h1>'
            }
            res.end(data)
        })
    }
    // res.end(content)
})
server.listen(8080, function () {
    console.log('web服务器已启动，80端口监听中.....http://127.0.0.1:8080');
})