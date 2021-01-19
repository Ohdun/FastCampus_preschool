var memberList = [
    {
        name : "A",
        age : 30,
        popularity : 6,
    },
    {
        name : "G",
        age : 52,
        popularity : 2,
    },
    {
        name : "Z",
        age : 34,
        popularity : 10,
    },  
    {
        name : "U",
        age : 23,
        popularity : 1,
    },  

]

function fetchData() {
    memberList.forEach(function(List) {
        var ulEl = document.createElement("ul");
        var liEl_1 = document.createElement("li");
        liEl_1.append( "이름 : " + List.name);
        ulEl.append(liEl_1);

        var liEl_2 = document.createElement("li");
        liEl_2.append("나이 : " + List.age);
        ulEl.append(liEl_2);

        var liEl_3 = document.createElement("li");
        liEl_3.append("인기도 : " + List.popularity);
        ulEl.append(liEl_3);

        document.querySelector("body").append(ulEl);
  });
}
