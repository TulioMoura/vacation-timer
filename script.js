let hor = document.getElementById("hor")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let vac = new Date (2023,11,22,17)
console.log(vac)

setInterval(()=>{
    now = new Date()
    diff = vac.getTime()-now.getTime()
    hr =  diff/3600000
    diff = diff%3600000
    hor.innerText =Math.floor(hr) + ":";

    mn = diff/60000;
    diff = diff%60000
    hor.innerText = hor.innerText + Math.floor(mn)+":";

    se = diff/1000;

    hor.innerText = hor.innerText+ Math.floor(se);
    
},1000)