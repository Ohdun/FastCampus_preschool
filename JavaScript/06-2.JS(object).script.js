function changeStyle () {
  var newStyle = {};
  newStyle.attribute = prompt("어떤 스타일을 변경하시겠어요?");
  newStyle.value = prompt("어떤 값을 입력하시겠어요?");
  console.log(newStyle);
  document.querySelector("div").style[newStyle.attribute] = newStyle.value;
}