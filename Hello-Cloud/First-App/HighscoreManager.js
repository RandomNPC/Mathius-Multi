var Highscore = require('./Highscore.js');
var _MAX_ENTRIES = 10;
var _isHighScore;
var _hs;
var _pos;

function HighscoreManager(){
	_isHighscore = new Boolean('false');
	_pos = -1;
	_hs = null;
}

HighscoreManager.prototype.loadScores = function(){
	return 'loadscores ok';
}

HighscoreManager.prototype.addScore = function(score){
	return 'scores ok ' + score;
}

HighscoreManager.prototype.sortScores = function(){
	return 'sortscores ok';
}

HighscoreManager.prototype.saveScores = function(){
	return 'savescores ok';
}

HighscoreManager.prototype.set_isHighScore = function(state){
	_isHighScore = state;
	return 'set_ishighscore ok';
}
HighscoreManager.prototype.get_isHighScore = function(){
	return _isHighScore + ' getisHighscore ok';
}

HighscoreManager.prototype.instance = function(){
	return _hs;
}

module.exports = HighscoreManager;