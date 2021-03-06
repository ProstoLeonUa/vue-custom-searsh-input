var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = process.env.PORT || 80;

app.listen(port, function () {
	console.log(`Example app listening`);
});

const url = "./items.json";
app.get('/', (req, res) => {

	fs.readFile(url, 'utf-8', (e, file) => {
		res
			.status(200)
			.send(file);
	})

})