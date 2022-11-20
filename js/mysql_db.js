var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'my_database'
});
var msg
connection.connect();
// const user = { id: 4, name: "郁科琴", age: 22 }
// const sqlStr = "INSERT INTO `my_database`.`user` (`id`, `username`, `userage`) VALUES (?,?,?);"
// connection.query(sqlStr, [user.id, user.name, user.age], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
// });
connection.query('select *from user', (error, results, fields) => {
    if (error) throw error;
    msg = results
    console.log(fields);
    for (var i = 0; i < msg.length; i++) {
        console.log('你好！我是' + msg[i].username + '，我今年' + msg[i].userage + '岁,我的职工id是：' + msg[i].id);
    }
})
connection.end();