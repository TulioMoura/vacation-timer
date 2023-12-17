let timer = document.getElementById("timer")
let form = document.getElementById("submit")
let date=null
let cancelBtn = document.getElementById("cancelButton")

form.addEventListener("click", setDate)

function hideForm(){
    date = new Date(localStorage.getItem("count_to"))
    if(date!="Invalid Date"){
        console.log("date set")
        form.hidden
        console.log(date)
    }
    else{
        console.log("form")
        form.hidden = false;
        
    }
}



function setDate(e){
    let eventDate = e.srcElement.form[0].value
    console.log(e)
    localStorage.setItem("count_to",eventDate)
    hideForm()
}


    setInterval(()=>{
        //console.log(date)
        now = new Date()
        diff = date.getTime()-now.getTime()
        hr =  diff/3600000
        diff = diff%3600000
        timer.innerText =Math.floor(hr) + ":";
    
        mn = diff/60000;
        diff = diff%60000
        timer.innerText = timer.innerText + Math.floor(mn)+":";
    
        se = diff/1000;
    
        timer.innerText = timer.innerText+ Math.floor(se);
        if(timer.innerText.length > 9){
            timer.innerText = timer.innerText.substring(0,9);
        }
        
    },500)

hideForm();