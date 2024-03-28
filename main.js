const formulario = document.getElementById("myForm");
const product = document.getElementById("product");
const valueProduct = document.getElementById("value");
const description = document.getElementById("description");
const opcaoYes = document.getElementById("opcaoYes");
const opcaoNo = document.getElementById("opcaoNo");
const btn = document.getElementById("buttonSubmit");
const ulProduct = document.getElementById("ulProduct");
const inputsAll = document.querySelectorAll('input');


formulario.addEventListener('submit', cadastrarProduto);

function cadastrarProduto(event) {
    event.preventDefault();

    const productName = product.value;
    const productValue = valueProduct.value;
    const descriptionValue = description.value;
    const opcaoYesValue = opcaoYes.checked ? "sim" : "não";

    if (!productName || !productValue || !descriptionValue || (!opcaoYes.checked && !opcaoNo.checked)) {
        formulario.style.backgroundColor = "#EA658A";
        formulario.style.backgroundImage = "none";
        inputsAll.forEach(input => {
            input.style.backgroundColor = "#DDDFE6";
            input.style.color = "#000000";

        });
        alert ('preencha todos os campos!')
        return;
    }

    inputsAll.forEach(input => {
        input.style.backgroundColor = "";
        input.style.color = ""; 
    });
    
    formulario.style.backgroundColor = "";
    formulario.style.backgroundImage = "";

    const novoProduto = document.createElement("li");
    novoProduto.innerHTML = `<strong>Name: ${productName}</strong> <br> <strong>Value: ${productValue}</strong> <br> <strong>Description: ${descriptionValue}</strong><br><strong>Is sale: ${opcaoYesValue}</strong><br> ----------------`;

    ulProduct.appendChild(novoProduto);

    product.value = "";
    valueProduct.value = "";
    description.value = "";
    opcaoYes.checked = false;
    opcaoNo.checked = false;
}
