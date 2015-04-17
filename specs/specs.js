describe('pizza', function() {
  describe('cost', function() {
    it('returns a price amount if a user orders a pizza, regardless of type', function() {
    var testPizza = Object.create(pizza);
    testPizza.init();
    testPizza.topping = "Cheese";
    testPizza.cost();
    expect(testPizza.price).to.equal(5);
    });
  });
});
