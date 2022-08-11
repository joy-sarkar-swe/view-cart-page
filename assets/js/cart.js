// get id function
function getId(id) {
    return document.getElementById(id);
}

// get class
function getClass(className) {
    return document.getElementsByClassName(className);
}


const remove_product = getId("remove_product");
const view_cart_message = getClass("view_cart_message");
// console.log(view_cart_message);

/* get notification after remove product from cart */
remove_product.addEventListener("click", () => {
    view_cart_message[0].classList.remove('d-none');
});