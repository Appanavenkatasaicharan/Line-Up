function displayDate(){
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = new Date();
    var day = document.getElementById("day");
    day.innerHTML = d.getDate().toString()
    var month = document.getElementById("mon");
    month.innerHTML = months[d.getMonth()];
    var year = document.getElementById("year");
    year.innerHTML = d.getFullYear().toString();
    var hour = document.getElementById("hours");
    hour.innerHTML = d.getHours().toString()+" :";
    var minutes = document.getElementById("minutes");
    minutes.innerHTML = d.getMinutes().toString()+" :";
    var seconds = document.getElementById("seconds");
    seconds.innerHTML = d.getSeconds().toString();
    setTimeout(displayDate,1000);
}
function addTask()
{
var task = document.createElement("div");
task.className = "task";
var temp = document.createElement("div");
temp.className = "temp";
var text = document.createElement("div");
text.className = "text";
var time = document.createElement("div");
time.className = "time";
var remover = document.createElement("input");
remover.type = "checkbox";
remover.className = "remover";
remover.addEventListener('click',deleteTask.bind(null,remover))
var t1 = document.getElementById("task-input");
var c = document.getElementsByClassName("wrapper");
var t2 = document.getElementById("time-input");
if(t1.value==''){
return;
}
if(t2.value==''){
return;
}
text.innerHTML = t1.value;
t1.value = '';
var h = parseInt(t2.value.slice(0,2));
var m = parseInt(t2.value.slice(3,5));
if(h>11){
if(h==12){
time.innerHTML = h.toString() + ':' +m.toString() + ' PM';
}
else{
time.innerHTML = (h-12).toString() +':'+ m.toString() + ' PM';
}
24
}
else{
time.innerHTML = h.toString() + ':' +m.toString() + ' AM';
}
t2.value='';
temp.appendChild(remover);
temp.appendChild(text);
task.appendChild(temp);
task.appendChild(time);
c[0].appendChild(task);
}
function deleteTask(child)
{
var par = child.parentNode.parentNode;
var t = document.getElementsByClassName("wrapper");
t[0].removeChild(par);
}
