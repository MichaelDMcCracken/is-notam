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

  context("valid NOTAMs",function(){
    it("validates set",function(){
      expect(isNotam("!RDU")).to.be.true
    })
  })

  context("invalid NOTAMs",function(){
    it("empty string", function(){
      expect(isNotam("")).to.be.false
    })
  })

})
