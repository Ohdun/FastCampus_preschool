function addTodo () {
    var ulEl = document.createElement("ul");
    var liEl = document.createElement("li");
    var todolist = document.querySelector("#ip-todolist").value;
    liEl.append(todolist);
    ulEl.append(liEl);
    document.querySelector("div").append(ulEl);
}