function sayHello () {
  console.log("Hello");
}

function printTextInputVal () {
  console.log(document.querySelector("input").value);
}

function putButtonAndInput () {
   var bodyEl = document.querySelector("body");
   var buttonEl = document.createElement("button");
   buttonEl.append("버튼");
   var brEl = document.createElement("br");
   var inputEl = document.createElement("input");

   bodyEl.append(buttonEl);
   bodyEl.append(brEl);
   bodyEl.append(inputEl);
}