var order = new Object();
order.dish=[];
order.drink=[];
order.dessert=[];
order.price=0;
marked_dish="";
marked_drink="";
marked_dessert="";
function add_dish(item_id,item_name,item_price){
    if (marked_dish == ""){
        var dish_sel = document.querySelector("."+item_id);
        dish_sel.classList.toggle("selected");
        marked_dish = item_id;
    }else{
        var previous_dish = document.querySelector("."+marked_dish);
        previous_dish.classList.toggle("selected");
        var dish_sel = document.querySelector("."+item_id);
        dish_sel.classList.toggle("selected");
        marked_dish = item_id;
    }
    order.dish=[item_name,item_price];
    console.log(order);
}
function add_drink(item_id,item_name,item_price){
    if (marked_drink == ""){
        var drink_sel = document.querySelector("."+item_id);
        drink_sel.classList.toggle("selected");
        marked_drink = item_id;
    }else{
        var previous_drink = document.querySelector("."+marked_drink);
        previous_drink.classList.toggle("selected");
        var drink_sel = document.querySelector("."+item_id);
        drink_sel.classList.toggle("selected");
        marked_drink = item_id;
    }
    order.drink = [item_name,item_price];
    console.log(order);
}
function add_dessert(item_id,item_name,item_price){
    if (marked_dessert == ""){
        var dessert_sel = document.querySelector("."+item_id);
        dessert_sel.classList.toggle("selected");
        marked_dessert = item_id;
    }else{
        var previous_dessert = document.querySelector("."+marked_dessert);
        previous_dessert.classList.toggle("selected");
        var dessert_sel = document.querySelector("."+item_id);
        dessert_sel.classList.toggle("selected");
        marked_dessert = item_id;
    }
    order.dessert = [item_name,item_price];
    console.log(order);
}
function add_order(){
    order.price= order.dish[1] + order.drink[1] + order.dessert[1];
    console.log(order);
}

