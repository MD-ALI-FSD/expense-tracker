const eamount = document.querySelector("#eamount");
const discrip = document.querySelector("#discrp");
const ecategory = document.querySelector("#ecategory");
const ssubmit = document.querySelector(".submit");
const form = document.querySelector(".form");

var data = [];
ssubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const amntvalue = eamount.value;
  const discripvalue = discrip.value;
  const catvalue = ecategory.value;
  let dstring = `${amntvalue}-${catvalue}-${discripvalue}`;

  data.push(dstring);
  localStorage.setItem("expenses", JSON.stringify(data));

  // var html = dstring;
  // form.insertAdjacentHTML("afterend", html);
});

const datarv = JSON.parse(localStorage.getItem("expenses"));
datarv.forEach((dt) => {
  var html = `${dt}<br>`;
  form.insertAdjacentHTML("afterend", html);
});
