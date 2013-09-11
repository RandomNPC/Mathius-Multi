module.exports=function() {
	/*
	 * Module dependencies.
	 */
	 var MAX = 7;
	 
	if(process.env.VCAP_SERVICES){
		var env = JSON.parse(process.env.VCAP_SERVICES);
		var mongo = env['mongodb-2.2'][0]['credentials'];
	}
	
	var express=require('express');
	var http=require('http');
	
	var create_URL = function(obj){
		obj.hostname = (obj.hostname || 'localhost');
		obj.port = (obj.port || 27017);
		obj.db = (obj.db || 'test');
		console.log("mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db + "?auto_reconnect=true");
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db + "?auto_reconnect=true";
	}
	
	var db = require('mongojs').connect(create_URL(mongo),['scores']);

	var app=express();
	
	function Highscore(score,name){
		this.score = score;
		this.name = name;
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
	
	app.get('/gameover/*',function(req,result){
	/*	var obj = new Highscore(req.params[0],'Jill');
		
		db.scores.save(obj,function(err,res){
			if(!res || err) console.log('error saving item to server: ' + err);
			db.scores.find().count(function(err,res){
				if(res < MAX){
					//console.log('res: ' + res);
					//console.log('we have a high score! Not enough max entries');
					return;
				}
				else{
					db.scores.find().sort({score: 1}).limit(1,function(err,res){
						res.forEach(function(search){
							//console.log(search);
							db.scores.remove(search);
						});
						db.scores.find(obj,function(err,res){
							if(!res) result.render('lose.html');
							else result.render('win.html');
						})
					});
				}
			});
		});
	});*/
};