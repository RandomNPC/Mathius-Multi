var util = require('util');
var events = require('events');
var db = require('mongojs').connect('localhost/mathiushighscores',['scores']);

var Highscore = require('./Highscore.js');
var MAX = 7;

var HighscoreManager = function(){
	
	/*this.add = function(obj){	
		db.scores.save(obj,function(err, res){
			if(!res || err) console.log('error saving item to server: ' + err);
			db.scores.find({ score : { $lt : obj.score}}).count(function(err,res){
				db.scores.find({}).count(function(err,entries){
					if(res>0 || entries < MAX){
						console.log('we have a high score!');
						db.scores.update({$or: [{mode: 'display'},{mode: 'input'}]},{$set : {mode : 'input'}},function(err){});
						if(entries < MAX){
							console.log('entries: ' + entries);
							return;
						}
					}
					else{
						console.log('we dont have a high score');
						db.scores.update({$or: [{mode: 'display'},{mode: 'input'}]},{$set : {mode : 'display'}},function(err){});
					}
					db.scores.find().sort({score : 1}).limit(1,function(err,res){
						res.forEach(function(sub){
							db.scores.remove(sub);
						});
					});
				});
			});
		});
	}*/
	
	this.add = function(obj){
		db.scores.save(obj,function(err,res){
			if(!res || err) console.log('error saving item to server: ' + err);
			db.scores.find().count(function(err,res){
				if(res < MAX){
					console.log('res: ' + res);
					console.log('we have a high score! Not enough max entries');
					return;
				}
				else{
					db.scores.find().sort({score: 1}).limit(1,function(err,res){
						res.forEach(function(search){
							console.log(search);
							db.scores.remove(search);
						});
						db.scores.find(obj,function(err,res){
							console.log(err);
							console.log(res);
						})
					});
				}
			});
		});
	
	}
	
	this.is
	
	this.create = function(){
		db.scores.drop();
		db.scores.save({mode: 'display'});
		db.scores.save(new Highscore(503,'Pandy'),function(err,res){});
		db.scores.save(new Highscore(243,'Mandy'),function(err,res){});
		db.scores.save(new Highscore(878,'Moore'),function(err,res){});
		db.scores.save(new Highscore(59,'Judy'),function(err,res){});
		db.scores.save(new Highscore(754,'Pat'),function(err,res){});
		db.scores.save(new Highscore(85,'Junkie'),function(err,res){});
	}
}
util.inherits(HighscoreManager,events.EventEmitter);
module.exports = HighscoreManager;