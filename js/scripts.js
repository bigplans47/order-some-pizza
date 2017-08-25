// back end
var pizzaArray = [];


function Pizza(topping1, size1) {
  this.topping = topping1;
  this.size = size1;
  this.rawPrice =0
  this.price = 4;
  this.customTopping = "";
  this.customToppingPrice = 0;
};

Pizza.prototype.withCustomTopping = function(myCustomTopping) {
  if (myCustomTopping !== "") {
    this.customTopping = myCustomTopping;
    this.customToppingPrice = parseInt(this.customTopping.length)/2;
  } else {
    this.customToppingPrice=0;
  }
}

Pizza.prototype.theCalculatedPrice = function(topping1, size1) {
  if ((topping1 === "Extra Cheese") || (topping1 === "Pepperoni") || (topping1 === "Veggie") || (topping1 === "Italian Sausage")) {
    this.rawPrice = this.price+ this.size.length+this.customToppingPrice;
    this.price = "$"+Number(this.price+ this.size.length+this.customToppingPrice).toFixed(2);
    // +((this.customTopping.length)/2);
  } else if (topping1 === "Artichoke") {
    this.rawPrice = this.price +1 +this.size.length+this.customToppingPrice;
    this.price = "$"+Number(this.price +1 +this.size.length+this.customToppingPrice).toFixed(2);
  }
};



// front end
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var myTopping = $("#pizzaTopping").val();
    console.log(myTopping);
    var mySize = $("#pizzaSize").val();
    console.log(mySize);
    var myCustomTopping = $("#customTopping").val();
    console.log(myCustomTopping);
    var myPizza = new Pizza(myTopping, mySize);
    // console.log(myPizza);
    myPizza.withCustomTopping(myCustomTopping);
    console.log(myPizza.customToppingPrice);
    myPizza.theCalculatedPrice(myTopping, mySize);
    console.log(myPizza.price);
    console.log(myPizza);
    pizzaArray.push(myPizza.rawPrice);
    console.log(pizzaArray);
    $(".myOrder").text(myPizza.topping+" "+myPizza.customTopping+" "+ myPizza.size+", "+myPizza.price+" ");

    // $(".myOrder").text(JSON.stringify(myPizza));

    var totalPrice = 0
    for (var i = 0; i < pizzaArray.length; i++) {
      console.log(pizzaArray.length);
      console.log(totalPrice);
      totalPrice = pizzaArray[i] + totalPrice;
      console.log(totalPrice);
    }
    $(".myTotalOrderPrice").text("Your Price is $"+totalPrice)
    $(".myTotalOrder").append("<li>"+myPizza.size+" "+myPizza.topping+" "+myPizza.customTopping+ "</li>");
    // pizzaArray.forEach(function() {
    //   totalPrice = pizzaArray.rawPrice;
    // });




  });
});
