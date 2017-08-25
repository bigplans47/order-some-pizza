// back end
function Pizza(topping1, size1) {
  this.topping = topping1;
  this.size = size1;
  this.price = 0;
};

Pizza.prototype.theCalculatedPrice = function(topping1) {
  if (topping1 === "Extra_Cheese") {
    this.price = 5;
  } else if (topping1 === "Pepperoni") {
    this.price = 6;
  } else if (topping1 === "Artichoke") {
    this.price = 7;
  }
};

// front end
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var myTopping = $("#pizzaTopping").val();
    alert(myTopping);
    console.log(myTopping);
    var mySize = $("#pizzaSize").val();
    console.log(mySize);
    var myPizza = new Pizza(myTopping, mySize);
    console.log(myPizza);
    myPizza.theCalculatedPrice(myTopping);
    console.log(myPizza.price);
    console.log(myPizza);
    // $(".myOrder").val(myPizza);
  });
});
