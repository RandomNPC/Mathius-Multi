module.exports=function() {
	/*
	 * Module dependencies.
	 */
	var express=require('express');
	var http=require('http');
	var mongo = require('mongojs').connect('localhost/Mathius',['scores']);

	var app=express();
	
	function Score(username,score){
		this.username = username;
		this.score = score;
	}

	app.configure(function() {
		app.set('port', process.env.PORT||3000);
		app.set('views', __dirname+'/views');
		app.engine('html', require('ejs').renderFile);
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use('/', express.static(__dirname+"/public/images"));
	});

	app.get('/', function(req, res) {
		res.render('stable.html');
	});


	http.createServer(app).listen(app.get('port'), function() {
		console.log('Express server listening on port '+app.get('port'));
	});
	
	app.get('/gameover/*',function(req,res){
		console.log('I made it');
		console.log('Final score ' + req.params[0]);
		//check to see if in top 10
		//if in top 10, ask for input name
		//have mongodb save the score
		
		
	});

};