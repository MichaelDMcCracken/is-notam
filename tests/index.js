"use strict";

var mocha = require("mocha")
var chai = require("chai")
var path = require("path")
var isNotam = require(path.resolve(__dirname,"../index.js"))

var describe = mocha.describe
var expect = chai.expect

describe("#isNotam()",function(){

  it("is a function",function(){
    expect(isNotam).to.be.a("function")
  })

  context("validates valid NOTAM",function(){
    assertNotam('!ATL 03/080 ATL RWY 10/28 CLSD 1803120330-1803120700',true)
    assertNotam('!MYR 12/046 (KMYR A0660/17) MYR TWY A2, A3 CLSD 1712172055-1804012200',true)

  })

  context("invalidates NOTAMs with an",function(){

    it("empty string", function(){
      expect(isNotam("")).to.be.false
    })

    it("incomplete string",function(){
      expect(isNotam("!RDU")).to.be.false
    })

    it("fifth char not a space",function(){
      expect(isNotam("!LHZDERPARRYANSUPIDSDFAOSDIJFA")).to.be.false
    })

  })

  it("invalidates without a required keyword", function(){
    expect(isNotam("!DAB 03/012 DAB ILS 07L GP OUT OF SERVICE 1803052234-1803162000EST")).to.be.false
  })

})

function assertNotam(notam,valid){
  it("for "+notam,function(){
    if ( valid ) {
      expect(isNotam(notam)).to.be.true
    }
    else {
      expect(isNotam(notam)).to.be.false
    }
  })
}

//
