var pa = require('./phonetic-alphabet.js');
var should = require('should');

describe('stringToPhonetic', function () {
	it('should be a function', function () {
		pa.stringToPhonetic.should.be.type('function');
	});
	it('should convert a to alpha', function () {
		pa.stringToPhonetic('a').should.equal('alpha');
	});
	it('should convert b to bravo', function () {
		pa.stringToPhonetic('b').should.equal('bravo');
	});
	it('should convert c to charlie', function () {
		pa.stringToPhonetic('c').should.equal('charlie');
	});
	it('should convert d to delta', function () {
		pa.stringToPhonetic('d').should.equal('delta');
	});
	it('should convert e to echo', function () {
		pa.stringToPhonetic('e').should.equal('echo');
	});
	it('should convert f to foxtrot', function () {
		pa.stringToPhonetic('f').should.equal('foxtrot');
	});
	it('should convert g to golf', function () {
		pa.stringToPhonetic('g').should.equal('golf');
	});
	it('should convert h to hotel', function () {
		pa.stringToPhonetic('h').should.equal('hotel');
	});
	it('should convert i to india', function () {
		pa.stringToPhonetic('i').should.equal('india');
	});
	it('should convert j to juliet', function () {
		pa.stringToPhonetic('j').should.equal('juliet');
	});
	it('should convert k to kilo', function () {
		pa.stringToPhonetic('k').should.equal('kilo');
	});
	it('should convert l to lima', function () {
		pa.stringToPhonetic('l').should.equal('lima');
	});
	it('should convert m to mike', function () {
		pa.stringToPhonetic('m').should.equal('mike');
	});
	it('should convert n to november', function () {
		pa.stringToPhonetic('n').should.equal('november');
	});
	it('should convert o to oscar', function () {
		pa.stringToPhonetic('o').should.equal('oscar');
	});
	it('should convert p to papa', function () {
		pa.stringToPhonetic('p').should.equal('papa');
	});
	it('should convert q to quebec', function () {
		pa.stringToPhonetic('q').should.equal('quebec');
	});
	it('should convert r to romeo', function () {
		pa.stringToPhonetic('r').should.equal('romeo');
	});
	it('should convert s to sierra', function () {
		pa.stringToPhonetic('s').should.equal('sierra');
	});
	it('should convert t to tango', function () {
		pa.stringToPhonetic('t').should.equal('tango');
	});
	it('should convert u to uniform', function () {
		pa.stringToPhonetic('u').should.equal('uniform');
	});
	it('should convert v to victor', function () {
		pa.stringToPhonetic('v').should.equal('victor');
	});
	it('should convert w to whiskey', function () {
		pa.stringToPhonetic('w').should.equal('whiskey');
	});
	it('should convert x to x-ray', function () {
		pa.stringToPhonetic('x').should.equal('x-ray');
	});
	it('should convert y to yankee', function () {
		pa.stringToPhonetic('y').should.equal('yankee');
	});
	it('should convert z to zulu', function () {
		pa.stringToPhonetic('z').should.equal('zulu');
	});
	it('should convert strings not just characters', function () {
		pa.stringToPhonetic('abc').should.equal('alphabravocharlie');
	});
	it('should keep spaces in strings', function () {
		pa.stringToPhonetic('a b c').should.equal('alpha bravo charlie');
	});
	it('should keep non-letter characters in strings', function () {
		pa.stringToPhonetic('a-b.c').should.equal('alpha-bravo.charlie');
	});
});

describe('phoneticToString', function () {
	it('should be a function', function () {
		pa.phoneticToString.should.be.type('function');
	});
		it('should convert alpha to a', function () {
		pa.phoneticToString('alpha').should.equal('a');
	});
	it('should convert bravo to b', function () {
		pa.phoneticToString('bravo').should.equal('b');
	});
	it('should convert charlie to c', function () {
		pa.phoneticToString('charlie').should.equal('c');
	});
	it('should convert delta to d', function () {
		pa.phoneticToString('delta').should.equal('d');
	});
	it('should convert echo to e', function () {
		pa.phoneticToString('echo').should.equal('e');
	});
	it('should convert foxtrot to f', function () {
		pa.phoneticToString('foxtrot').should.equal('f');
	});
	it('should convert golf to g', function () {
		pa.phoneticToString('golf').should.equal('g');
	});
	it('should convert hotel to h', function () {
		pa.phoneticToString('hotel').should.equal('h');
	});
	it('should convert india to i', function () {
		pa.phoneticToString('india').should.equal('i');
	});
	it('should convert juliet to j', function () {
		pa.phoneticToString('juliet').should.equal('j');
	});
	it('should convert kilo to k', function () {
		pa.phoneticToString('kilo').should.equal('k');
	});
	it('should convert lima to l', function () {
		pa.phoneticToString('lima').should.equal('l');
	});
	it('should convert mike to m', function () {
		pa.phoneticToString('mike').should.equal('m');
	});
	it('should convert november to n', function () {
		pa.phoneticToString('november').should.equal('n');
	});
	it('should convert oscar to o', function () {
		pa.phoneticToString('oscar').should.equal('o');
	});
	it('should convert papa to p', function () {
		pa.phoneticToString('papa').should.equal('p');
	});
	it('should convert quebec to q', function () {
		pa.phoneticToString('quebec').should.equal('q');
	});
	it('should convert romeo to r', function () {
		pa.phoneticToString('romeo').should.equal('r');
	});
	it('should convert sierra to s', function () {
		pa.phoneticToString('sierra').should.equal('s');
	});
	it('should convert tango to t', function () {
		pa.phoneticToString('tango').should.equal('t');
	});
	it('should convert uniform to u', function () {
		pa.phoneticToString('uniform').should.equal('u');
	});
	it('should convert victor to v', function () {
		pa.phoneticToString('victor').should.equal('v');
	});
	it('should convert whiskey to w', function () {
		pa.phoneticToString('whiskey').should.equal('w');
	});
	it('should convert x-ray to x', function () {
		pa.phoneticToString('x-ray').should.equal('x');
	});
	it('should convert yankee to y', function () {
		pa.phoneticToString('yankee').should.equal('y');
	});
	it('should convert zulu to z', function () {
		pa.phoneticToString('zulu').should.equal('z');
	});
	it('should convert strings not just characters', function () {
		pa.phoneticToString('alphabravocharlie').should.equal('abc');
	});
	it('should keep spaces in strings', function () {
		pa.phoneticToString('alpha bravo charlie').should.equal('a b c');
	});
	it('should keep non-letter characters in strings', function () {
		pa.phoneticToString('alpha-bravo.charlie').should.equal('a-b.c');
	});
});