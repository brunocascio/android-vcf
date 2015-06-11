var fs = require('fs');
var mimelib = require('mimelib');

function parse(buffer, cb) {
	var res  = [];
	var contact  = {};

	buffer.split("\n").forEach(function(line) {
	    if ( line.indexOf('FN') === 0 ) {
	        line = line.split(':').pop().trim();
	        contact.name = mimelib.decodeQuotedPrintable(line);
	    } else if ( line.indexOf('TEL') === 0 ) {
	        contact.phone = line.replace(/[^0-9+]/g,'');
	        res.push(contact);
	    } else if ( line.indexOf('END') === 0 ) {
	        contact = {};
	    }
	});

	cb(res);
}

module.exports = {
	parseFileCSV: function(vcf, cb) {
		if(!vcf) 
			throw new Error('Not file specified');

		var buffer = fs.readFileSync(vcf, 'utf8');

	    parse(buffer, cb);
	},
	parseStringCSV: function(buffer, cb) {
		if (!buffer || buffer === '')
			throw new Error('String is empty');			
	    parse(buffer, cb);
	}
}