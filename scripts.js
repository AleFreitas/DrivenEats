/* order object will keep order information like chosen dish,drinks,etc*/
let order = new Object();
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
        item_id.classList.toggle("selected");
        marked_dish = item_id;
    /*there is already one chosen dish */
    }else{
        /*toggles already marked dish*/
        marked_dish.classList.toggle("selected");
        /*toggles new dish*/
        item_id.classList.toggle("selected");
        /*new dish becomes marked_dish */
        marked_dish = item_id;
    }
    /*Adding dish name and price to order object */
    order.dish=[item_name,item_price];
    console.log(order);
    /*checking if 3 items have been chosen*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        let order_ready = document.querySelector(".order-disabled");
        let order_text = document.querySelector(".order-disabled p");
        order_ready.classList.add("order-enabled");
        order_ready.classList.remove("order-disabled");
        order_text.innerHTML="Fechar pedido";
    }
}
/*add_drink will add a new drink on order object and mark the selected product*/
function add_drink(item_id,item_name,item_price){
    /*there is no chosen drinks */
    if (marked_drink == ""){
        item_id.classList.toggle("selected");
        marked_drink = item_id;
    /*there is already one chosen drink */    
    }else{
        /*toggles already marked drink*/
        marked_drink.classList.toggle("selected");
        /*toggles new drink*/
        item_id.classList.toggle("selected");
        /*new drink becomes marked_drink */
        marked_drink = item_id;
    }
    /*Adding drink name and price to order object */
    order.drink = [item_name,item_price];
    console.log(order);
    /*checking if 3 items have been chosen*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        let order_ready = document.querySelector(".order-disabled");
        let order_text = document.querySelector(".order-disabled p");
        order_ready.classList.add("order-enabled");
        order_ready.classList.remove("order-disabled");
        order_text.innerHTML="Fechar pedido";
    }
}
/*add_dessert will add a new dessert on order object and mark the selected product*/
function add_dessert(item_id,item_name,item_price){
    /*if : there is no chosen desserts */
    if (marked_dessert == ""){
        item_id.classList.toggle("selected");
        marked_dessert = item_id;
    /*else : there is already one chosen dessert */
    }else{
        /*toggles already marked dessert*/
        marked_dessert.classList.toggle("selected");
        /*toggles new dessert*/
        item_id.classList.toggle("selected");
        /*new dessert becomes marked_dessert */
        marked_dessert = item_id;
    }
    /*Adding dessert name and price to order object */
    order.dessert = [item_name,item_price];
    console.log(order);
    /*checking if 3 items have been chosen*/
    if (marked_dish != "" & marked_drink != "" & marked_dessert != ""){
        let order_ready = document.querySelector(".order-disabled");
        let order_text = document.querySelector(".order-disabled p");
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
        let order_finalized = document.querySelector(".order-confirmed-back");
        order_finalized.classList.remove("hidden");
        /*dish name */
        let order_dish_name = document.querySelector(".order-dish :nth-child(1)");
        order_dish_name.innerHTML=order.dish[0];
        /*dish price*/
        let order_dish_price = document.querySelector(".order-dish :nth-child(2)");
        order_dish_price.innerHTML = order.dish[1].toFixed(2);
        /*drink name */
        let order_drink_name = document.querySelector(".order-drink :nth-child(1)");
        order_drink_name.innerHTML = order.drink[0];
        /*drink price*/
        let order_drink_price = document.querySelector(".order-drink :nth-child(2)");
        order_drink_price.innerHTML = order.drink[1].toFixed(2);
        /*dessert name */
        let order_dessert_name = document.querySelector(".order-dessert :nth-child(1)");
        order_dessert_name.innerHTML = order.dessert[0];
        /*dessert price*/
        let order_dessert_price = document.querySelector(".order-dessert :nth-child(2)");
        order_dessert_price.innerHTML = order.dessert[1].toFixed(2);
        /*Altera o preco total*/
        let order_price = document.querySelector(".order-price :nth-child(2)");
        order_price.innerHTML = "R$ " + order.price.toFixed(2);
    }
}
function cancel_order(){
    let order_finalized = document.querySelector(".order-confirmed-back");
    order_finalized.classList.add("hidden");
}
function end_order(){
    whatsapp_message = "Olá, gostaria de fazer o pedido:\n- Prato: " + order.dish[0] + "\n- Bebida: " + order.drink[0] + "\n- Sobremesa: " + order.dessert[0] + "\nTotal: R$ " + order.price.toFixed(2);
    console.log(whatsapp_message);
    whatsapp_link = "https://wa.me/5561981429388?text="+encodeURIComponent(whatsapp_message);
    window.open(whatsapp_link);
}

