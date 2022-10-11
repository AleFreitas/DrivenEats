function add_dish(item_name,item_price){
    var dish = [item_name,item_price];
    alert(dish);
}
function add_drink(item_name,item_price){
    var drink = [item_name,item_price];
    alert(drink);
}
function add_dessert(item_name,item_price){
    var dessert = [item_name,item_price];
    alert(dessert);
}
function add_order(){
    let sum = dish[1] + drink[1] + dessert[1];
    var order = [dish[0],drink[0],dessert[0],sum];
    alert(order);
}

