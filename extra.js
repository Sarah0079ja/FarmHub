
function openForm() {
  document.getElementById("myForm").style.display = "block";

 
}

function closeForm(e) {
  document.getElementById("myForm").style.display = "none";

};
const name = document.getElementById('name');
const name1 = document.querySelector('name1');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const products = document.getElementById('produce');
const amount = document.getElementById('amount');
const button3 = document.getElementById('button3');
const totalPrice = document.getElementById('totalPrice');


name.onclick = e => {
  if (name.value === ''){
    alert('name required')
  }
}

button3.onclick = e =>{
  e.preventDefault(e);
let amountValue = +amount.value
let cal = (amountValue * 0.1 + (amountValue));

  totalPrice.innerText = `The value of Investment after 6months ${cal}`
}

