let todos = ["Take your bathe", "brush my teeth", "comb my hair"];

function display (){
    let task = document.getElementById("tasks");
    let div = ``;
    

    todos.forEach((todo)=>{
        let taskDiv = `<div class="row">
        <div class="col-9">
        <input class="form-control" disabled value="${todo}" />
            </div>
        <div class="col-3"></div>
    </div>`;
    div = div + taskDiv;
    })

    task.innerHTML = div;
}

display();

