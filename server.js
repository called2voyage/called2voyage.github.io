var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.get('/', function(req, res) {
  res.render('pages/index', {index_data: index_data, branding_data: branding_data});
});

// end of pages

if (process.env.NODE_ENV == 'production') {
	app.listen(9100, "169.197.80.52");
	console.log('[PROD] Server is listening on 169.197.80.52:9100');
}
else {
	app.listen(9100);
	console.log('[DEV] Server is listening on port 9100');	
}