const assert = require('chai').assert;


describe("Random Tests", function() {
    it("Should add return a number" , function(){
        assert.equal(2 + 6, 8);
    })
    it("That is it is ok",  function(){
        // assert.fail(3, 3, "It should fail if actual is !== expected");
        assert.isOk(2 === 2, "This is false");
    })
    it("Should check if password is greater than 12", function() {
        assert.isAbove(14, 12);
    })
    it("Should check if the value is a number", function() {
        assert.isNaN(NaN, "Not a Number");
    })
    it("Is it a function?", function() {
        assert.isFunction(function hello(){});
    })
    it("Regex match", function() {
        assert.match("herityjohnny14@gmail.com", /^\w+\D{1}[a-z]{1,}\D{1}[a-z]{2,}$/gi);
    })
})