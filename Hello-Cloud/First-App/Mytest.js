var HighscoreManager = require('./HighscoreManager');
var Highscore = require('./Highscore.js');

var test = new HighscoreManager();

test.add(new Highscore(42,'Ed'));
//test.create();