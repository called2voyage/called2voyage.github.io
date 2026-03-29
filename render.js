var express = require('express');
var app = express();

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

// about page
let about_data = require('./views/data/about.json')
app.render('pages/about', {about_data: about_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/about.html')
        fs.writeFile(__dirname + '/about.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// manifesto page
let manifesto_data = require('./views/data/manifesto.json')
app.render('pages/manifesto', {manifesto_data: manifesto_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/manifesto.html')
        fs.writeFile(__dirname + '/manifesto.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// community agreement page
let agreement_data = require('./views/data/community_agreement.json')
app.render('pages/agreement', {agreement_data: agreement_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/community_agreement.html')
        fs.writeFile(__dirname + '/community_agreement.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// solutions page
let solutions_data = require('./views/data/solutions.json')
app.render('pages/solutions', {solutions_data: solutions_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/solutions.html')
        fs.writeFile(__dirname + '/solutions.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// needs page
let story_data = require('./views/data/needs.json')
app.render('pages/needs', {needs_data: needs_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/needs.html')
        fs.writeFile(__dirname + '/needs.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// contact page
let contact_data = require('./views/data/contact.json')
app.render('pages/contact', {contact_data: contact_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/contact.html')
        fs.writeFile(__dirname + '/contact.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// story page
let story_data = require('./views/data/story.json')
app.render('pages/story', {story_data: story_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/story.html')
        fs.writeFile(__dirname + '/story.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// palestine page
let palestine_data = require('./views/data/palestine.json')
app.render('pages/palestine', {palestine_data: palestine_data, branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/palestine.html')
        fs.writeFile(__dirname + '/palestine.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

// contracts congratulations page
app.render('pages/palestine', {branding_data: branding_data}, (err, res) =>{
    if (err) {
        console.error('Error rendering');
    } else {
        console.log(__dirname + '/contracts/congratulations.html')
        fs.writeFile(__dirname + '/contracts/congratulations.html', res, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
    }
});

console.log('Static files generated.');