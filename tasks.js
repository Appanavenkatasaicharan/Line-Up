function addTask(){
    i++;
    var t = document.getElementsByClassName("task-input");
    var s = t[0].value;
    if(s==''){
        return;
    }
    t[0].value = null
    var n = document.createElement("div");
    var i = document.createElement("input");
    i.type = 'checkbox';
    i.addEventListener("click",delTask.bind(null,i));
    // i.onclick = "delTask(this)";
    var txt = document.createElement('div');
    txt.className = 'texxt';
    n.className = 'task';
    // n.innerHTML = s;
    var x = document.getElementsByClassName("contentarea");
    n.appendChild(i);
    txt.innerHTML = s;
    n.appendChild(txt);
    // x[0].style.gridtemplaterows = "repeat(${i},15%)";
    x[0].appendChild(n)

}
function delTask(element){
    var par = element.parentNode;
    var c = document.getElementsByClassName("contentarea");
    c[0].removeChild(par);
}