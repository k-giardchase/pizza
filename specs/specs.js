describe('pizza', function() {
  describe('cost', function() {
    it('returns a price amount if a user orders a pizza, regardless of type', function() {
    var testPizza = Object.create(pizza);
    testPizza.cost();
    expect(testPizza.price).to.equal(10);
    });
  });

  describe('cost', function() {
    it('returns a higher price if a user orders a pepperoni pizza than a cheese pizza', function() {
      var testPizza = Object.create(pizza);
      testPizza.topping = 2;
      testPizza.cost();
      expect(testPizza.price).to.equal(12);
    });
  });
});
