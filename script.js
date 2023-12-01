const myform = document.getElementById('form');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

function validateForm(e) {
  const
    form = e.target,
    field = Array.from(form.elements);

  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopImmediatePropagation();

    field.forEach(i => {

      if (!i.checkValidity()) {
        i.parentElement.classList.add('invalid');
      }
    });
    document.getElementById("error").hidden=false;
  }
  else {
    document.getElementById("success").hidden=false;

    field.forEach(i => {
      i.setCustomValidity('');
      i.parentElement.classList.remove('invalid');
    });
  }
}

let message = document.getElementById("message");
let charcounter = document.getElementById("info");
let errmsg = document.getElementById("error");
const maxChars = 200;

const countChars = () => {
  let enteredChars = message.value.length;
  let counter = maxChars - enteredChars;
  charcounter.textContent = counter + "/200";

  if (counter < 50) {
    charcounter.style.color = "red";
  }
  else {
    charcounter.style.color = "black";
  }
};

message.addEventListener("input", countChars);

var body = document.querySelector("body"),
  goLight = function() {
    body.className = "";
  },

  goDark = function() {
    body.className = "";
    body.classList.add("dark");
  }

  document.querySelector(".theme1").addEventListener("click", goLight, false);
  document.querySelector(".theme2").addEventListener("click", goDark, false);

  switchButton.addEventListener("click", replaceText, false);

  var switchNow = function() {
    switcher.addEventListener("keyup", replaceText, false);
  };
  switchNow();
  


