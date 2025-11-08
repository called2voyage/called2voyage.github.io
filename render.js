var express = require('express');
var app = express();

var path = require('path');
var fm = require('front-matter');
var markdownit = require('markdown-it');
const md = markdownit();
var moment = require('moment');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

const fs = require('fs');

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.render('pages/index', {index_data: index_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/index.html')
        fs.writeFile(__dirname + '/index.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
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

  // make blog dir
  try {
    fs.mkdirSync(__dirname + `/blog`);
  } catch (error) {
    console.error(`Directory blog already exists.`);
  }

  // blog index
  app.render('pages/blog', {index_data: index_data, branding_data: branding_data, posts: pages}, (err, res) =>{
      if (err) {
          console.error('Error rendering');
      } else {
          console.log(__dirname + '/blog/index.html')
          fs.writeFile(__dirname + '/blog/index.html', res, err => {
              if (err) {
                console.error(err);
              } else {
                // file written successfully
              }
            });
      }
  });

	pages.forEach(([route, post_data, post_text]) => {
    app.render('pages/post', {post_data: post_data, post_text: post_text, branding_data: branding_data}, (err, res) =>{
        if (err) {
            console.error('Error rendering');
        } else {
            var slug = post_data.attributes.slug;
            console.log(__dirname + `/blog/${slug}.html`)
            fs.writeFile(__dirname + `/blog/${slug}.html`, res, err => {
                if (err) {
                  console.error(err);
                } else {
                  // file written successfully
                }
              });
        }
    });
	});
});

// end of pages

console.log('Static files generated.');