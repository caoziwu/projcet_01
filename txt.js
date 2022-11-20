// fs模块读取文件
const fs = require('fs')
const path = require('path')
const url = path.join(__dirname, './js/txt.txt');
console.log(path.extname(url));
// 调用fs.readFlie()读取文件
// console.log(__dirname.replace("\\", '/') + 'js/txt');
fs.readFile(__dirname + '/js/txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    // console.log(data);
    const arrOld = data.split(' ');
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    // console.log(arrNew);
    const newStr = arrNew.join('\n');
    // console.log(newStr);
    fs.writeFile('tx.txt', newStr, function (err) {
        if (err) {
            console.log('数据写入失败');
        }
        console.log('数据已成功录入！！！！');
        console.log(path.join(__dirname, './js/txt'));
        console.log(path.basename(path.join(__dirname, './js/txt')));
    })

})