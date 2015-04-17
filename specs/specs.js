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

  describe('init', function() {
    it('returns a price for a cheese pizza, regardless if another pizza object prototype was created for pepperoni', function() {
      var testPizza1 = Object.create(pizza);
      testPizza1.init();
      var testPizza2 = Object.create(pizza);
      testPizza2.init();

      testPizza1.topping = 0;
      testPizza1.cost();
      testPizza2.topping = 2;
      testPizza2.cost();

      expect(testPizza1.price).to.equal(10);
    });
  });
});
