var util = require('util');
var events = require('events');
var db = require('mongojs').connect('localhost/mathiushighscores',['scores']);

var Highscore = require('./Highscore.js');


var HighscoreManager = function(){
	
	this.add = function(obj){	
		db.scores.save(obj,function(err, res){
			if(!res || err) console.log('error saving item to server: ' + err);
			db.scores.find({ score : { $lt : obj.score}}).count(function(err,res){
				console.log(res);
			});
		});
	}
}
util.inherits(HighscoreManager,events.EventEmitter);
module.exports = HighscoreManager;