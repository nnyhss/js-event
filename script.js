var modal = document.getElementById("createModal");

var pName = document.getElementById("pname");
var pQuantity = document.getElementById("pquantity");
var pPrice = document.getElementById("price");
var pImage = document.getElementById("pimage");

function setModal(toggle) {
  modal.style.display = toggle;
}

var id = 1;

function addProduct() {
  var name = pName.value;
  var quantity = parseInt(pQuantity.value);
  var price = parseInt(pPrice.value);

  var productImage = "./default.webp";
  if (pImage.value) {
    productImage = pImage.value;
  }

  var pTotal = price * quantity;

  var item = `
<tr>
  <th scope="row">${id}</th>
  <td class="item-img">
    <img
      src="${productImage}"
      alt="img"
      style="width: 50px"
    />
  </td>
  <td>${name}</td>
  <td id="price-${id}">${price}đ</td>
  <td>
    <input class="form-control" id="quantity-${id}" value="${quantity}" onkeyup="onKeyUp(${id})"  />
  </td>
  <td class="total" id="total-${id}">${pTotal}đ</td>
</tr>`;

  document.getElementById("tbody").insertRow().innerHTML = item;

  id++;
  clearAll();
}

function onKeyUp(id) {
  var sum;
  var price = parseInt(document.getElementById(`price-${id}`).innerHTML);
  var quantity = document.getElementById(`quantity-${id}`).value;
  sum = price * quantity;

  var total = document.getElementById(`total-${id}`);
  total.innerHTML = sum + "đ";
}
