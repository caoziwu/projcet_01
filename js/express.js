// 1、引入express
const router = require('./router')
const ex = require('express')
const fs = require('fs')
fs.readFile('./账目.xlsx', (err, data) => {
    if (err) throw err
    console.log(data + 1);
})
// 2、创建应用对象
const app = ex();
const cors = require('cors')
// 3、创建路由规则
// reqest是对请求报文的封装
// response是对响应报文的封装
// app.get('/:id', (reqest, response) => {

//     // 设置响应
//     response.send(reqest.params)
//     // response.send(reqest.query)
//     // response.send('hello AJAX')
// });
app.use(cors())
app.use(router)
// app.get('/', (req, res) => {

// })
// 4、监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中....http://127.0.0.1:8000')
})