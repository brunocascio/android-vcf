var assert = require('assert')
,	AndroidVCF = require('../index')
, path = 'test/prueba.vcf';

describe('AndroidVCF', function(){
  
  describe('#parseFileCSV()', function(done){
    it('The file is correctly parsed', function(){
    	AndroidVCF.parseFileCSV(path, function(res){
    		assert.equal(2, res.length);
    		assert.equal('User One', res[0].name);
    		assert.equal('User Two', res[1].name);
    		assert.equal('+5490123456789', res[0].phone);
    		assert.equal('+5490123456789', res[1].phone);
    	});
    });
  });

  describe('#parseStringCSV()', function(done){
    it('The CSV String is correctly parsed', function(){

    	var str = "BEGIN:VCARD\n"
				+ "VERSION:2.1\n"
				+ "N:User;One;;;\n"
				+ "FN:User One\n"
				+ "TEL;HOME:+5490123456789\n"
				+ "END:VCARD\n"
				+ "BEGIN:VCARD\n"
				+ "VERSION:2.1\n"
				+ "N:User;Two;;;\n"
				+ "FN:User Two\n"
				+ "TEL;HOME:+5490123456789\n"
				+ "END:VCARD\n";

    	AndroidVCF.parseStringCSV(str, function(res){
    		assert.equal(2, res.length);
    		assert.equal('User One', res[0].name);
    		assert.equal('User Two', res[1].name);
    		assert.equal('+5490123456789', res[0].phone);
    		assert.equal('+5490123456789', res[1].phone);
    	});
    });
  });

});