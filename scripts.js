/* order object will keep order information like chosen dish,drinks,etc*/
const order = new Object();
order.dish=[];
order.drink=[];
order.dessert=[];
order.price=0;
/*marked variables will keep the last marked product for possible toggle*/
let markedDish="";
let markedDrink="";
let markedDessert="";
/*querySelectors */
const orderReady = document.querySelector(".order-disabled");
const orderText = document.querySelector(".order-disabled p");
/*add_dish will add a new dish on order object and mark the selected product*/
function add_dish(itemId,itemName,itemPrice){
    /*there is no chosen dishes */
    if (markedDish === ""){
        /*toggles selected item*/
        itemId.classList.toggle("selected");
        markedDish = itemId;
    /*there is already one chosen dish */
    }else{
        /*toggles already marked dish*/
        markedDish.classList.toggle("selected");
        /*toggles new dish*/
        itemId.classList.toggle("selected");
        /*new dish becomes markedDish */
        markedDish = itemId;
    }
    /*Adding dish name and price to order object */
    order.dish=[itemName,itemPrice];
    /*checking if 3 items have been chosen*/
    if (markedDish !== "" & markedDrink !== "" & markedDessert !== ""){
        orderReady.classList.add("order-enabled");
        orderReady.classList.remove("order-disabled");
        orderText.innerHTML="Fechar pedido";
    }
}
/*add_drink will add a new drink on order object and mark the selected product*/
function add_drink(itemId,itemName,itemPrice){
    /*there is no chosen drinks */
    if (markedDrink === ""){
        itemId.classList.toggle("selected");
        markedDrink = itemId;
    /*there is already one chosen drink */    
    }else{
        /*toggles already marked drink*/
        markedDrink.classList.toggle("selected");
        /*toggles new drink*/
        itemId.classList.toggle("selected");
        /*new drink becomes markedDrink */
        markedDrink = itemId;
    }
    /*Adding drink name and price to order object */
    order.drink = [itemName,itemPrice];
    /*checking if 3 items have been chosen*/
    if (markedDish !== "" & markedDrink !== "" & markedDessert !== ""){
        orderReady.classList.add("order-enabled");
        orderReady.classList.remove("order-disabled");
        orderText.innerHTML="Fechar pedido";
    }
}
/*add_dessert will add a new dessert on order object and mark the selected product*/
function add_dessert(itemId,itemName,itemPrice){
    /*if : there is no chosen desserts */
    if (markedDessert === ""){
        itemId.classList.toggle("selected");
        markedDessert = itemId;
    /*else : there is already one chosen dessert */
    }else{
        /*toggles already marked dessert*/
        markedDessert.classList.toggle("selected");
        /*toggles new dessert*/
        itemId.classList.toggle("selected");
        /*new dessert becomes markedDessert */
        markedDessert = itemId;
    }
    /*Adding dessert name and price to order object */
    order.dessert = [itemName,itemPrice];
    /*checking if 3 items have been chosen*/
    if (markedDish !== "" & markedDrink !== "" & markedDessert !== ""){
        orderReady.classList.add("order-enabled");
        orderReady.classList.remove("order-disabled");
        orderText.innerHTML="Fechar pedido";
    }
}
/*add_order will end order */
function add_order(){
    /*checking if 3 items are marked before ending*/
    if (markedDish !== "" & markedDrink !== "" & markedDessert !== ""){
        order.price = order.dish[1] + order.drink[1] + order.dessert[1];
        let orderFinalized = document.querySelector(".order-confirmed-back");
        orderFinalized.classList.remove("hidden");
        /*dish name */
        let orderDishName = document.querySelector(".order-dish :nth-child(1)");
        orderDishName.innerHTML=order.dish[0];
        /*dish price*/
        let orderDishPrice = document.querySelector(".order-dish :nth-child(2)");
        orderDishPrice.innerHTML = order.dish[1].toFixed(2).toString().replace(".",",");
        /*drink name */
        let orderDrinkName = document.querySelector(".order-drink :nth-child(1)");
        orderDrinkName.innerHTML = order.drink[0];
        /*drink price*/
        let orderDrinkPrice = document.querySelector(".order-drink :nth-child(2)");
        orderDrinkPrice.innerHTML = order.drink[1].toFixed(2).toString().replace(".",",");
        /*dessert name */
        let orderDessertName = document.querySelector(".order-dessert :nth-child(1)");
        orderDessertName.innerHTML = order.dessert[0];
        /*dessert price*/
        let orderDessertPrice = document.querySelector(".order-dessert :nth-child(2)");
        orderDessertPrice.innerHTML = order.dessert[1].toFixed(2).toString().replace(".",",");
        /*Altera o preco total*/
        let orderPrice = document.querySelector(".order-price :nth-child(2)");
        orderPrice.innerHTML = "R$ " + order.price.toFixed(2).toString().replace(".",",");
    }
}
function cancel_order(){
    let orderFinalized = document.querySelector(".order-confirmed-back");
    orderFinalized.classList.add("hidden");
}
function end_order(){
    whatsapp_message = "Olá, gostaria de fazer o pedido:\n- Prato: " + order.dish[0] + "\n- Bebida: " + order.drink[0] + "\n- Sobremesa: " + order.dessert[0] + "\nTotal: R$ " + order.price.toFixed(2);
    whatsapp_link = "https://wa.me/5561981429388?text="+encodeURIComponent(whatsapp_message);
    window.open(whatsapp_link);
}

