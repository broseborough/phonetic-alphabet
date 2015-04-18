var PhoneticMap = {
	"alpha": "a",
	"bravo": "b",
	"charlie": "c",
	"delta": "d",
	"echo": "e",
	"foxtrot": "f",
	"golf": "g",
	"hotel": "h",
	"india": "i",
	"juliet": "j",
	"kilo": "k",
	"lima": "l",
	"mike": "m",
	"november": "n",
	"oscar": "o",
	"papa": "p",
	"quebec": "q",
	"romeo": "r",
	"sierra": "s",
	"tango": "t",
	"uniform": "u",
	"victor": "v",
	"whiskey": "w",
	"x-ray": "x",
	"yankee": "y",
	"zulu": "z"
};

var CharacterMap = {};
Object.keys(PhoneticMap).forEach(function (key) {
	var value = PhoneticMap[key];
	CharacterMap[value] = key;
});

exports.stringToPhonetic = function (string) {
	return string.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, function (matched) {
		return CharacterMap[matched];
	});
};

exports.phoneticToString = function (string) {
	return string.replace(/alpha|bravo|charlie|delta|echo|foxtrot|golf|hotel|india|juliet|kilo|lima|mike|november|oscar|papa|quebec|romeo|sierra|tango|uniform|victor|whiskey|x-ray|yankee|zulu/gi, function (matched) {
		return PhoneticMap[matched];
	});
};