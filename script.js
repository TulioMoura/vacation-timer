let timer = document.getElementById("timer")
let form = document.getElementById("form")
let date = localStorage.getItem("count_to")
if(!date){
    form.hidden = false;
}

let vac = new Date (2023,11,22,17)
console.log(vac)

setInterval(()=>{
    now = new Date()
    diff = vac.getTime()-now.getTime()
    hr =  diff/3600000
    diff = diff%3600000
    timer.innerText =Math.floor(hr) + ":";

    mn = diff/60000;
    diff = diff%60000
    timer.innerText = timer.innerText + Math.floor(mn)+":";

    se = diff/1000;

    timer.innerText = timer.innerText+ Math.floor(se);
    
},1000)