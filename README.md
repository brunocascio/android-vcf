# Android-vcf

[Android-vcf](https://github.com/brunocascio/android-vcf) is a parser for android .vcf files.

## How to use

AndroidVCF has 2 methods:

`parseFileCSV(filePath, cb);`

or

`parseStringCSV(StringBuffer, cb);`



```
var AndroidVCF = require('android-vcf');

AndroidVCF.parseFileCSV('/path/to/file.csv', function(json){
	// json response format: 
	/*
		[ 
			{ 
				name:string, 
				phone:string 
			},
		]
	*/
});

var CSVString = '...';

AndroidVCF.parseStringCSV(CSVString, function(json){
	// json response format: 
	/*
		[ 
			{ 
				name:string, 
				phone:string 
			},
		]
	*/
});
```

## How to contribute

- Clone this repo
- `npm install`
- `npm install -g mocha`
- `npm test`


NOTE: For test, i using [mochajs](http://mochajs.org/).

## Licence

The MIT License (MIT)

Copyright (c) 2015 Bruno Cascio <brunocascio@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
