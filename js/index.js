// ITERATION 1

function updateSubtotal(product) {
  // Steps 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // Step 3
  const subtotal = Number(price * quantity);
  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');
  // Step 5
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productList = document.querySelectorAll('.product');

  let total = 0;
  productList.forEach((singleProduct) => {
    total += updateSubtotal(singleProduct);
  });

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeChildVar = target.parentNode.parentNode;
  const parent = removeChildVar.parentNode;

  parent.removeChild(removeChildVar);
  //  calculateAll();
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector('#newProduct');
  let productPrice = document.querySelector('#newPrice');

  const addProduct = document.getElementById('tbody');
  addProduct.innerHTML += `
  <tr class="product">
  <td class="name">
  <span>${productName.value}</span>
</td>
<td class="price">$<span>${productPrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>
`;

  productName.value = 'Enter Product Name';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => (button.onclick = removeProduct));

  // Button Code

  const addButton = document.getElementById('create');
  addButton.addEventListener('click', createProduct);
});
