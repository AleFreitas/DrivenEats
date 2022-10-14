/* order object will keep order information like chosen dish,drinks,etc*/
var order = new Object();
order.dish=[];
order.drink=[];
order.dessert=[];
order.price=0;
/*marked variables will keep the last marked product for possible toggle*/
marked_dish="";
marked_drink="";
marked_dessert="";
/*add_dish will add a new dish on order object and mark the selected product*/
function add_dish(item_id,item_name,item_price){
    /*there is no chosen dishes */
    if (marked_dish == ""){
        /*toggles selected item*/
        var dish_sel = document.querySelector("."+item_id);
        dish_sel.classList.toggle("selected");
        marked_dish = item_id;
    /*there is already one chosen dish */
    }else{
        /*toggles already marked dish*/
        var previous_dish = document.querySelector("."+marked_dish);
        previous_dish.classList.toggle("selected");
        /*toggles new dish*/
        var dish_sel = document.querySelector("."+item_id);
        dish_sel.classList.toggle("selected");
        /*new dish becomes marked_dish */
        marked_dish = item_id;
    }
    /*Adding dish name and price to order object */
    order.dish=[item_name,item_price];
    console.log(order);
    /*checking if 3 items have been chosen*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        var order_ready = document.querySelector(".order-disabled");
        var order_text = document.querySelector(".order-disabled p");
        order_ready.classList.add("order-enabled");
        order_ready.classList.remove("order-disabled");
        order_text.innerHTML="Fechar pedido";
    }
}
/*add_drink will add a new drink on order object and mark the selected product*/
function add_drink(item_id,item_name,item_price){
    /*there is no chosen drinks */
    if (marked_drink == ""){
        var drink_sel = document.querySelector("."+item_id);
        drink_sel.classList.toggle("selected");
        marked_drink = item_id;
    /*there is already one chosen drink */    
    }else{
        /*toggles already marked drink*/
        var previous_drink = document.querySelector("."+marked_drink);
        previous_drink.classList.toggle("selected");
        /*toggles new drink*/
        var drink_sel = document.querySelector("."+item_id);
        drink_sel.classList.toggle("selected");
        /*new drink becomes marked_drink */
        marked_drink = item_id;
    }
    /*Adding drink name and price to order object */
    order.drink = [item_name,item_price];
    console.log(order);
    /*checking if 3 items have been chosen*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        var order_ready = document.querySelector(".order-disabled");
        var order_text = document.querySelector(".order-disabled p");
        order_ready.classList.add("order-enabled");
        order_ready.classList.remove("order-disabled");
        order_text.innerHTML="Fechar pedido";
    }
}
/*add_dessert will add a new dessert on order object and mark the selected product*/
function add_dessert(item_id,item_name,item_price){
    /*if : there is no chosen desserts */
    if (marked_dessert == ""){
        var dessert_sel = document.querySelector("."+item_id);
        dessert_sel.classList.toggle("selected");
        marked_dessert = item_id;
    /*else : there is already one chosen dessert */
    }else{
        /*toggles already marked dessert*/
        var previous_dessert = document.querySelector("."+marked_dessert);
        previous_dessert.classList.toggle("selected");
        /*toggles new dessert*/
        var dessert_sel = document.querySelector("."+item_id);
        dessert_sel.classList.toggle("selected");
        /*new dessert becomes marked_dessert */
        marked_dessert = item_id;
    }
    /*Adding dessert name and price to order object */
    order.dessert = [item_name,item_price];
    console.log(order);
    /*checking if 3 items have been chosen*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        var order_ready = document.querySelector(".order-disabled");
        var order_text = document.querySelector(".order-disabled p");
        order_ready.classList.add("order-enabled");
        order_ready.classList.remove("order-disabled");
        order_text.innerHTML="Fechar pedido";
    }
}
/*add_order will end order */
function add_order(){
    /*checking if 3 items are marked before ending*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        order.price = order.dish[1] + order.drink[1] + order.dessert[1];
        console.log(order);
    }
}

