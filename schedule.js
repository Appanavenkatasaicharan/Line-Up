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
