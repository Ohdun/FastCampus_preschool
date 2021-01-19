function onClickHighlightBtn() {
    var child_3 = document.querySelector("ul li:nth-child(3)");
    child_3.className = "highlighted"
    child_3.style.backgroundColor = "skyblue";
    //highlighted클래스에 스타일 어떻게?
}

function onClickColorChangeBtn() {
    var child_5 = document.querySelector("ul li:nth-child(5)");
    child_5.className = "changeColor"
    child_5.style.color = "red";
}

function onClickDeleteEffectBtn() {
    document.querySelector("ul li:nth-child(3)").classList.remove("highlighted");
    document.querySelector("ul li:nth-child(5)").classList.remove("changeColor"); 
}