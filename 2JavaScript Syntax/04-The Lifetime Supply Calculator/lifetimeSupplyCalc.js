var item = {age:38, maxAge:118, food:"chocolate", foodPerDay:0.5};
var item1 = {age:20, maxAge:87, food:"fruits", foodPerDay:2};
var item2 = {age:16, maxAge:102, food:"nuts", foodPerDay:1.1};
var items = [item, item1, item2];

for (var i = 0; i < items.length; i++) {
  calcSupply(items[i]);
}

function calcSupply(item){
    var supply = (item.maxAge - item.age) * 365 * item.foodPerDay;
    console.log(supply+'kg of ' +item.food+' would be enough until I am '+item.maxAge+' years old.');
}