function showStar(){
    var sum = "";
    var ulEl = document.createElement("ul");
        for(var i = 0; i < 5; i++){
            var liEl = document.createElement("li");
            sum += "*";
            liEl.append(sum);
            ulEl.append(liEl);
            document.querySelector("body").append(ulEl);          
        } 
}
