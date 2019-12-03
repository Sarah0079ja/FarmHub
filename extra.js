
function openForm() {
  document.getElementById("myForm").style.display = "block";
  // button3.disabled = true;

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


function myForm() {
  if (name.value == "" || name1.value == "" || email == "" ||
    phonenumber == "" || password == "" || produce == "" || amount == "") {
    alert("Fill all fields !");
  } else {
    alert("Form validated")
  }

  //navigation bar
  $(document).ready(function () {

    $('.first-button').on('click', function () {

      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

      $('.animated-icon3').toggleClass('open');
    });
  });


}

$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});


button3.onclick = e => {
  e.preventDefault(e);
  let amountValue = +amount.value
  let cal = (amountValue * 0.1 + (amountValue));

  totalPrice.innerText = `The value of Investment after 6months ${cal} Naira`
}



"https://newsapi.org/v2/top-headlines?country=ng&apiKey=6645fe84739346829e721803d38ff1d1"

window.onload = function () {
  const output = document.querySelector("#output");
  output.innerHTML = "";

  fetch(
    "https://newsapi.org/v2/top-headlines?country=de&category=agriculture&apiKey=5c49070b63254918ba7af41d02afc424"   
    
  )
    .then(res => res.json())
    .then(function (res) {
      const articles = res.articles.slice(1, 2);
      articles.forEach(function (article) {
        output.innerHTML += `
                        
<div class="flex-container">
<div>
  <img src="${article.urlToImage}" alt="" width="300px" height="200px" />
</div>
5c49070b63254918ba7af41d02afc424
<div>
  <h5 class="title">${article.title}</h5>
  <p class="description">${article.description}</p>
  <p class="content">${article.content}</p>
  <a href="${article.url}" class="read-more">Read More</a>
</div>
</div>

        
        `;
      });
    })
    .catch(err => console.log(err));
};





