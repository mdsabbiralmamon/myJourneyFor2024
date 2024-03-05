//Targets

const productName = document.getElementById('productName');
const productQuantity = document.getElementById('productQuantity');

//Button click

const addProduct = () => {
    const getProduct = productName.value;
    const getQuantity = productQuantity.value;
    console.log(getProduct, getQuantity);
    productName.value = '';
    productQuantity.value = '';
}