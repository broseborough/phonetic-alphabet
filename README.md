# Phonetic Alphabet #
A very simple node module to convert between latin characters and the phonetic alphabet  
For more information on the phonetic alphabet visit http://en.wikipedia.org/wiki/NATO_phonetic_alphabet

## Usage ##

### Installation ###
To install run `npm install phonetic-alphabet`

… then …

```
	var PhoneticAlphabet = require('phonetic-alphabet');
	
	…

	PhoneticAlphabet.stringToPhonetic('a b c'); // will return 'alpha bravo charlie'

	…

	PhoneticAlphabet.phoneticToString('alpha bravo charlie'); // will return 'a b c'

```