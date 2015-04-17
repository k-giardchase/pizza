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
debugger;

$(document).ready(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();

    var inputtedTopping = parseInt($('select#topping').val());

    var newPizza = Object.create(pizza);
    newPizza.init();
    newPizza.topping = inputtedTopping;
    newPizza.cost();

    $('.total').text(newPizza.price);
    $('#order_confirmation').show();
  });
});
