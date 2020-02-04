describe("my FizzBuzz game", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("Check number", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
    });

});