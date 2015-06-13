var assert = require('assert')
,	AndroidVCF = require('../index')
, path = 'test/prueba.vcf';

describe('AndroidVCF', function(){

  describe('#parseFileCSV()', function(done){
    it('The file is correctly parsed', function(){
    	AndroidVCF.parseFileCSV(path, function(res){
    		assert.equal(3, res.length);
    		assert.equal('User One', res[0].name);
    		assert.equal('User Two', res[1].name);
        assert.equal('Lu León', res[2].name);
    		assert.equal('+5490123456789', res[0].phone);
    		assert.equal('+5490123456789', res[1].phone);
        assert.equal('+423452367547', res[2].phone);
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
				+ "END:VCARD\n"
        + "BEGIN:VCARD\n"
        + "VERSION:2.1\n"
        + "N;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:=4C=65=C3=B3=6E;=4C=75;;;\n"
        + "FN;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:=4C=75=20=4C=65=C3=B3=6E\n"
        + "TEL;HOME:+423452367547\n"
        + "END:VCARD;\n";

    	AndroidVCF.parseStringCSV(str, function(res){
    		assert.equal(3, res.length);
        assert.equal('User One', res[0].name);
    		assert.equal('User Two', res[1].name);
        assert.equal('Lu León', res[2].name);
    		assert.equal('+5490123456789', res[0].phone);
    		assert.equal('+5490123456789', res[1].phone);
        assert.equal('+423452367547', res[2].phone);
    	});
    });
  });

});
