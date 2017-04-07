for (var i = 5; i < 120; i = i + 10) {
	console.log(i);
}

for (var j = 4096; j >= 1; j = j / 2) {
	console.log(j);
}

var presidents = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe', 'John Q Adams', 'Andrew Jackson'];

for (var x = 0; x < presidents.length; x += 1 ) {
	console.log('President # ' +  (parseInt(x) + 1) + ' was ' + presidents[x]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var y in antSpecies) {
	console.log(y);
}
