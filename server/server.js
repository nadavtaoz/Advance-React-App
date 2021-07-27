const app = require('express')();
const http = require('http').Server(app);
const port = 4005;

let users = [
	{
		name: 'name',
		id: 1,
		status: 'status',
		address: 'address'
	},
	{
		name: 'name1',
		id: 2,
		status: 'status',
		address: 'address'
	},
	{
		name: 'name2',
		id: 3,
		status: 'status',
		address: 'address'
	}
];

app.use(function(req, res, next){

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Content-Type', 'application/json');
	next();
});

app.get('/users', function (req, res) {
	return res.status(200).json(users);
})

http.listen(port, function () {
	console.log('listening on ' + port);
});









