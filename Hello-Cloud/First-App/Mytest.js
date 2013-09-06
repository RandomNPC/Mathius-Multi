var List = require('./List.js');

var foo = new List();

foo.add(1);
foo.add(2);
foo.add(3);
foo.add(4);
foo.add(5);
foo.add(6);
foo.add(7);

//console.log(foo.length());

for(var i = 0; i < foo.length(); i++){
	console.log(foo.contentsAt(i));
}
console.log('...removing a 7');
foo.remove(7);
console.log('The results are...');
for(var i = 0; i < foo.length(); i++){
	console.log(foo.contentsAt(i));
}
