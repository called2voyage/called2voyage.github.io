var process = require('process');
var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var blogProxy = httpProxy.createProxyServer({});

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

// about page
let about_data = require('./views/data/about.json')
app.get('/about', function(req, res) {
  res.render('pages/about', {about_data: about_data, branding_data: branding_data});
});

// community agreement page
let agreement_data = require('./views/data/community_agreement.json')
app.get('/agreement', function(req, res) {
	res.render('pages/community_agreement', {agreement_data: agreement_data, branding_data: branding_data});
});

// manifesto page
let manifesto_data = require('./views/data/manifesto.json')
app.get('/manifesto', function(req, res) {
  res.render('pages/manifesto', {manifesto_data: manifesto_data, branding_data: branding_data});
});

// solutions page
let solutions_data = require('./views/data/solutions.json')
app.get('/solutions', function(req, res) {
    res.render('pages/solutions', {solutions_data: solutions_data, branding_data: branding_data});
});

// needs page
let needs_data = require('./views/data/needs.json')
app.get('/needs', function(req, res) {
    res.render('pages/needs', {needs_data: needs_data, branding_data: branding_data});
});

// contact page
let contact_data = require('./views/data/contact.json')
app.get('/connect', function(req, res) {
    res.render('pages/contact', {contact_data: contact_data, branding_data: branding_data});
});

// shiver page
let shiver_data = require('./views/data/shiver.json')
app.get('/shiver', function(req, res) {
	res.render('pages/shiver', {shiver_data: shiver_data, branding_data: branding_data});
});

// story page
let story_data = require('./views/data/story.json')
app.get('/story', function(req, res) {
    res.render('pages/story', {story_data: story_data, branding_data: branding_data});
});

// kickstarter page
let kickstarter_data = require('./views/data/kickstarter.json')
app.get('/kickstarter', function(req, res) {
    res.render('pages/kickstarter', {kickstarter_data: kickstarter_data, branding_data: branding_data});
});
app.get('/kickstarter', function(req, res) {
	res.redirect(301, "/kickstarter");
});

// palestine page
let palestine_data = require('./views/data/palestine.json')
app.get('/palestine', function(req, res) {
    res.render('pages/palestine', {palestine_data: palestine_data, branding_data: branding_data});
});

// Route /papers* to Ghost
app.get("/papers*", function(req, res, next){ 
    blogProxy.web(req, res, { target: 'https://localhost:2368' });
});

// shiver cycle page
app.get("/shiver-cycle" , (req,res) => {
	res.redirect(301, "https://home.bluesharkfriends.com/index.php/s/wNCJ9WCEdTCdqCi");
});

// operating agreement page
app.get("/operating-agreement", (req, res) => {
	res.redirect(301, "https://home.bluesharkfriends.com/index.php/s/qsRND3mx4yik2YM")
});

// invite page
let invite_data = require('./views/data/invite.json')
app.get('/invite', function(req, res) {
	res.render('pages/invite', {invite_data: invite_data, branding_data: branding_data});
});

// contracts congratulations page
let contractCongrats_data = require('./views/data/contracts_congratulations.json')
app.get('/contracts/congratulations', function(req, res) {
	res.render('pages/contracts_congratulations', {contractCongrats_data: contractCongrats_data, branding_data: branding_data});
});
app.get("/contracts/step1" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/7JXH_loVCGI8Iqe0nd6GA");
});
app.get("/contracts/step1/free" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/qYvlrBs9BNWDrtVqEReB_");
});
app.get("/contracts/step1/no-site" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/wCj4hIx1tgvxDfIdLZ8O6");
});
app.get("/contracts/step1/custom" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/7JXH_loVCGI8Iqe0nd6GA");
});
app.get("/contracts/step1/upgraded" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/-tHeyRJvKoUZVJKDHWo9_");
});
app.get("/contracts/step1/basic" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/e-G2SOn_7qEOt1Lsjfdop");
});
app.get("/contracts/step1/alt-basic" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/FqAbUqogbZkjwiwZTiT1m");
});
app.get("/contracts/step2" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/maWFi-0zb300zg73FYmtq");
});
app.get("/contracts/step2/free" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/488XjoW3moLYag7HTd4KW");
});
app.get("/contracts/step2/custom" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/maWFi-0zb300zg73FYmtq");
});
app.get("/contracts/step2/upgraded" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/V4v6316XRxcn66l9yPlsn");
});
app.get("/contracts/step2/basic" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/F4rEnnnCvH2wf_SWpWGfM");
});
app.get("/contracts/step2/alt-basic" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/-wxclKTRLg8YlR--o-518");
});
app.get("/contracts/step3" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/JRHgiGbF-OoZD5cMqtCWD");
});
app.get("/contracts/step3/free" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/uV_JJ4ycGZBpZoL3YgyBS");
});
app.get("/contracts/step4" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/_Fgy3p1TPqluMmLYMUsfv");
});
app.get("/contracts/step4/free" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/_FVEbqgwv9iB9JUR-hLCL");
});
app.get("/contracts/step5" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/OPgdLRx7TgI842-a-wasR");
});
app.get("/contracts/step6" , (req,res) => {
	res.redirect(301, "https://app.documenso.com/d/9UhTYdeF_XZESLqNzKuIs");
});

app.get('/contact', function(req, res) {
    res.redirect(301, "/connect");
});

app.get("/termsofservice" , (req,res) => {
	res.redirect(301, "https://home.bluesharkfriends.com/index.php/s/2yZiAspL3PYK5Bb");
});
app.get("/privacypolicy" , (req,res) => {
	res.redirect(301, "https://home.bluesharkfriends.com/index.php/s/ajkKZYnNMALSRKA");
});
app.get("/trademarkpolicy" , (req,res) => {
	res.redirect(301, "https://home.bluesharkfriends.com/index.php/s/TfyHqqaR9X7AGgW");
});

// hosted sites

var elizabethcasswell_site = require('../departeds.elizabethcasswell/server.js');

app.use('/departeds/elizabethcasswell/', express.static('../departeds.elizabethcasswell'));
app.use('/departeds/elizabethcasswell/', elizabethcasswell_site);

if (process.env.NODE_ENV == 'production') {
	app.listen(9000, "169.197.80.52");
	console.log('[PROD] Server is listening on 169.197.80.52:9000');
}
else {
	app.listen(9000);
	console.log('[DEV] Server is listening on port 9000');	
}
