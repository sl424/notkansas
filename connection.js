	var mysql = require('mysql');	
	var pool = mysql.createPool({
		host: 'localhost',
		user : 'blog' ,
		password : 'blogtest',
		database : 'student',
	});

module.exports = {
	pool
}
