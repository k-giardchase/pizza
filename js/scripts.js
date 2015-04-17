var pizza = {
  topping: 0,
  price: 0,
  cost: function() {
    this.price = 10 + this.topping;
  },
  init: function() {
    this.topping = 0;
    this.price = 0;
  }
};
