//Targets

const productName = document.getElementById('productName');
const productQuantity = document.getElementById('productQuantity');
const productContainer = document.getElementById('productContainer');

//Button click

const addProduct = () => {
    const getProduct = productName.value;
    const getQuantity = productQuantity.value;
    console.log(getProduct, getQuantity);
    showProduct(getProduct, getQuantity);
    productName.value = '';
    productQuantity.value = '';

}

const showProduct = (getProduct, getQuantity) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = `${getProduct} : ${getQuantity}`;
    productContainer.appendChild(newProduct);
}