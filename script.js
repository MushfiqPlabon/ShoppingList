var button = document.getElementsByClassName("enter");
var uinput = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return uinput.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var input = document.createElement("input");
  var label = document.createElement("label");
  var t = document.createTextNode(uinput.value);
  ul.appendChild(li);
  li.appendChild(input);
  input.appendChild(label);
  li.appendChild(t);
  li.setAttribute("class", "list-group-item");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "form-check-input mr-1");
  input.setAttribute("value", "");
  input.setAttribute("aria-label", "...");
  label.setAttribute("class", "strikethrough");
  uinput.value = "";
}

function afterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function afterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button[0].addEventListener("click", afterClick);
uinput.addEventListener("keypress", afterEnter);
