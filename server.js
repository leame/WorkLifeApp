var express = require('express');		//Creates an express object
var mysql = require('./connect.js');	//Creates connect object (to connect Node to SQL)
var app = express();					//Calls the express constructor
var request = require('request');

app.set('port', 3909);					//Listens to any traffic at port 17941

var bodyParser = require('body-parser'); //module allows parsing of forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


//sessions - can't get sessions to persist between page loads
/*var session = require('express-session')		//sessions
app.use(session({						
  secret: 'key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: null,
	expires: false,
    httpOnly: false,
	secure: false
  },
}));*/

var bcrypt = require("bcrypt");			//module allows hashing of passwords

//GET request MySQL table employees
app.get('/getTable', function(req, res, next) {

		mysql.pool.query('SELECT * FROM employees', function(err, rows, fields) {
			if(err) {
				next(err);
				return;
			}
		
			var results = JSON.stringify(rows);
			res.header('Access-Control-Allow-Origin', '*');
			res.send(results);
		});
});


//GET request MySQL table workContacts
app.get('/getWorkContacts', function(req, res, next) {

		mysql.pool.query('SELECT * FROM workContacts', function(err, rows, fields) {
			if(err) {
				next(err);
				return;
			}
		
			var results = JSON.stringify(rows);
			res.header('Access-Control-Allow-Origin', '*');
			res.send(results);
		});
});

//POST send form to MySQL table employees
app.post('/employee_create', function(req, res, next) {
	JSON.stringify(req.body.co_password);
	var hash = bcrypt.hashSync(req.body.co_password, 10);
	var company_name;
	
	mysql.pool.query('SELECT company from company where co_id=?', [req.body.co_id],
	
	function(err, results, field){
	if(err) {
		next(err);
		return;
	}
	
	company_name = results[0].company;
	
		mysql.pool.query('INSERT INTO employees(`co_id`, `fname`, `lname`, `company`, `dept`, `position`, `email`,`phone`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.body.co_id, req.body.fname, req.body.lname, company_name, req.body.dept, req.body.position, req.body.email, req.body.phone, hash],
		function(err, results){
			if(err) {
				next(err);
				return;
			}
			
		res.header('Access-Control-Allow-Origin', '*');	
		res.send(results);	
		});
	});
	
});

//POST send form to MySQL table company
app.post('/company_create', function(req, res, next){
	JSON.stringify(req.body.co_password);
	var hash = bcrypt.hashSync(req.body.co_password, 10);
	
	mysql.pool.query('INSERT INTO company(`co_id`, `company`, `domain_name`, `password`) VALUES (?, ?, ?, ?)', [req.body.co_id, req.body.co_name, req.body.domain_name, hash],
	function(err, results){
		if(err) {
			next(err);
			return;
		}
		
	res.header('Access-Control-Allow-Origin', '*');	
	res.send(results);
	})
});

//POST query company/employees table to login
app.post('/login', function(req, res, next){
	var pass = req.body.co_password;
	var hash;
	var user;
	
	
	if (req.body.user_type == 'company')
	{
		mysql.pool.query('SELECT * from company where co_id=?', [req.body.username],
		function(err, results, field){
			if(err) {
				next(err);
				return;
			}
			
			hash = results[0].password;
			user = results[0].co_id;
			
			bcrypt.compare(pass, hash, function(err,response){
				if (response){
					//log company in
					/*req.session.regenerate(function(){
						req.session.user = user;
						console.log(req.session);
						req.session.save();
						res.header('Access-Control-Allow-Origin', '*');	
						res.send(response);
						console.log(req.session);
					})*/
				}
				res.header('Access-Control-Allow-Origin', '*');	
				res.send(response);	
			});
		})
	}
	
	else
	{
		mysql.pool.query('SELECT * from employees where email=?', [req.body.username],
		function(err, results, field){
			if(err) {
				next(err);
				return;
			}
			
			hash = results[0].password;
			user = results[0].id;
			
			bcrypt.compare(pass, hash, function(err,response){
				if (response){
					//log user in
					/*
					req.session.regenerate(function(){
						req.session.user = user;
					})*/
				}
				res.header('Access-Control-Allow-Origin', '*');	
				res.send(response);
			});

		})
	}
	
});


//Error handling: 404
app.use(function(req, res) {
	res.status(404);
	res.header('Access-Control-Allow-Origin', '*');
	res.send('404');
		
});


//Error handling: 500
app.use(function(req, res) {
	console.error(err.stack);
	res.status(500);
	res.header('Access-Control-Allow-Origin', '*');
	res.send('500');
});


//Outputs to console how to terminate session.
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
