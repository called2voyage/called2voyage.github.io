var express = require('express');
var app = express();

var fs = require('fs');
var path = require('path');
var fm = require('front-matter');
var markdownit = require('markdown-it');
const md = markdownit();
var moment = require('moment');

// set the view engine to ejs
require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/'));

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.get('/', function(req, res) {
res.render('pages/index', {index_data: index_data, branding_data: branding_data});
});

// process blog pages

var blog_pages = (async ()=>{
	try {
		var files = await fs.promises.readdir('./views/pages/posts');
		var pages = [];

		for(var file of files) {
			var data = await fs.promises.readFile(path.join('./views/pages/posts', file), 'utf8');

			var post_data = fm(data);
				
			var post_text = md.render(post_data.body);

			var slug = post_data.attributes.slug;

			pages.push([`/blog/${slug}`, post_data, post_text]);
		}
		return pages;
	}
	catch(e) {
		console.error("Error processing blog files", e);
	}
})();

// blog pages

blog_pages.then((pages) => {
	pages.sort(function(a,b){
		let aMoment = moment.utc(a[1].attributes.date, 'YYYY-MM-DD_hhmmss');
		let bMoment = moment.utc(b[1].attributes.date, 'YYYY-MM-DD_hhmmss');
		if (aMoment.isAfter(bMoment)) {
			return -1;
		}
		else if (bMoment.isAfter(aMoment)) {
			return 1;
		}
		else {
			return 0;
		}
	});

	// blog index
	app.get('/blog', function(req, res) {
		res.render('pages/blog', {index_data: index_data, branding_data: branding_data, posts: pages});
	});

	pages.forEach(([route, post_data, post_text]) => {
		app.get(route, function(req, res) {
			res.render('pages/post', {post_data: post_data, post_text: post_text, branding_data: branding_data});
		});
	});
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