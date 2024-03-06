//Targets

const productName = document.getElementById('productName');
const productQuantity = document.getElementById('productQuantity');
const productContainer = document.getElementById('productContainer');

//Button click
// add product
const addProduct = () => {
    const getProduct = productName.value;
    const getQuantity = productQuantity.value;
    console.log(getProduct, getQuantity);
    showProduct(getProduct, getQuantity);
    addProductToLocal(getProduct, getQuantity);
    productName.value = '';
    productQuantity.value = '';

}
// Show product
const showProduct = (getProduct, getQuantity) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = `${getProduct} : ${getQuantity}`;
    productContainer.appendChild(newProduct);
}

// get product from local storage

const getProductFromLocal = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// Add product to local

const addProductToLocal = (product, quantity) => {
    const cart = getProductFromLocal();
    cart[product] = quantity;
    console.log(cart);
    const stringifiedCart = JSON.stringify(cart);
    console.log(stringifiedCart);
    localStorage.setItem('cart', stringifiedCart);
}

// Show products from cart

const getCartProducts = () => {
    const products = getProductFromLocal();
    console.log(products);
    for(const product in products){
        const quantity = products[product];
        console.log(`${product} : ${quantity}`);
        showProduct(product, quantity);
    }
}

getCartProducts();