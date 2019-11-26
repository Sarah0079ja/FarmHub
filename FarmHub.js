
// pop up form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById('sendBtn').disabled = true;
 
}

function closeForm(e) {
  document.getElementById("myForm").style.display = "none";
  e.preventDefault();
};

var myIndex = 0;
carousel();

function carousel () {
  var i;
  var x = document.getElementById('.cardInvestors');
  for (i=o; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = i}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}



//form validation

  const name = document.querySelector("#name");
  const name1 = document.querySelector("#name1");
  const email = document.getElementById('email');
  const phonenumber = document.getElementById('phonenumber');
  const password = document.getElementById('password');
  const products = document.getElementById('exampleFormControl1');
  const amount = document.getElementById('amount1');

  //event listeners
  eventListeners();
  function eventListeners() {
    document.addEventListener('DOMContentLoaded', formInit);

    //validateforms
    name.addEventListener('blur', validateField);
    name1.addEventListener('blur', validateField);
    email.addEventListener('blur', validateField);
    phonenumber.addEventListener('blur', validateField);
    password.addEventListener('blur', validateField);
    products.addEventListener('blur', validateField);
    amount.addEventListener('blur', validateField);

    //investment value
    investForm.addEventListener('submit', sendBtn);
  }

    //validate the field
    function validateField() {

      if(name.value === '' && email.value === '' && phonenumber.value === '' && 
      password.value === '' && products.value === '' && amount.value === '' ) {
        if (input[type].length === 0) {
          //button should be enabled
          sendBtn.disabled = false;
        }
      }
    }
    //validate the length of fields 
    // function validateField(field) {
    //   if(field.value.length > 0) {
    //     console.log('correct');
    //   } else {
    //     field.style.borderColor = 'red';
    //     console.log('Not correct');
    //   }
    // }
  
  //form initialisation
  function formInit() {
    sendBtn.disabled = true;
  }

  function investmentVal(e) {
    e.preventDefault();
    //show spinner
    const spinner = document.getElementById('#spinner');
    spinner.style.display = 'block';

    //Hide spinner
    setTimeout(function () {
      spinner.style.display = 'none';
      
    }
  )

  //show the investment result
  function getResult(){
  var theAmount = document.getElementById("myForm");
  var amount1 = theAmount.elements['amount1'];
  var howMuch = 0;
   if(amount1.value !=="" ) {
     howmuch = parseInt(amount1.value);
   } return howMuch;
   
  }};


  document.getElementById("totalPrice").addEventListener("click", myInvest);
  function myInvest() {
    document.getElementById(totalPrice).innerHTML = '(howMuch * 10/100) + howMuch'
  }


  
  // function getTotal () {
  //   const result = document.getElementById('#totalPrice'); 
  //   const div = document.createElement('div');



  //   //   div ;innerHTML = `
  //   //   <p class="howMuch">Total: $ ${price}</p>
  //   //   `;
  //   // }

  //   totalPrice.appendChild(div);
  
