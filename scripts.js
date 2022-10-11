var order = new Object();
order.dish=[]
order.drink=[]
order.dessert=[]
order.price=0
function add_dish(item_name,item_price){
    order.dish=[item_name,item_price];
    console.log(order);
}
function add_drink(item_name,item_price){
    order.drink = [item_name,item_price];
    console.log(order);
}
function add_dessert(item_name,item_price){
    order.dessert = [item_name,item_price];
    console.log(order);
}
function add_order(){
    order.price= order.dish[1] + order.drink[1] + order.dessert[1];
    console.log(order);
}

