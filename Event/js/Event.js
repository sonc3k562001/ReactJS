// //this is ex6
var brgBlue = document.querySelector("div#ex6 button#js-bgr-blue")
var brgRed = document.querySelector("div#ex6 button#js-bgr-red")
var div6 = document.getElementById("ex6")
brgBlue.addEventListener("click",function (){
    div6.style.backgroundColor="blue";
})
brgRed.addEventListener("click",function (){
    div6.style.backgroundColor="red";
})
// //this is ex7
var div7 = document.getElementById("ex7")
var colors = document.querySelector("div#ex7 select#list-color")
var p = document.createElement("p")
colors.addEventListener("input",function (){
    var colorss = String(colors.value)
    div7.appendChild(p)
    switch (colorss){
        case "blue":{
            div7.style.backgroundColor="blue"
            p.innerText="The blue"
            break;
        }
        case "red":{
            div7.style.backgroundColor="red"
            p.innerText="The red"
            break;
        }
        case "brown":{
            div7.style.backgroundColor="brown"
            p.innerText="The brown"
            break
        }
        default :{
            div7.style.backgroundColor="lavender"
            p.innerText="The lavender"
            break;
        }

    }
})
// // This is ex8
var Dates = new Date();
document.title = Dates.getHours()+ ":"+Dates.getMinutes()+"-Hello"
// this is ex9
function oclockst(){
    var Dates = new Date();
    var oclock = document.getElementById("js-display-oclock")
    var hours = Dates.getHours();
    var minute = Dates.getMinutes();
    var second = Dates.getSeconds();
    var milliseconds = Dates.getMilliseconds();
    if (milliseconds <10){
        milliseconds = "000"+milliseconds
    }else if (milliseconds < 100){
        milliseconds ="00"+milliseconds
    }else if (milliseconds< 1000 ){
        milliseconds ="0"+milliseconds
    }else if(second<10){
        second = "0"+second;
    }else if (minute<10){
        minute ="0"+minute;
    }else if (hours < 10){
        hours = "0"+hours;
    }
    oclock.innerHTML = hours + ":" + minute + ":" + second +":"+milliseconds
}
setInterval(oclockst,1)
//this is ex10
var btnShow = document.querySelector("div#ex10 button#js-button-show")
var divshow = document.querySelector("div#ex10 div#js-text-long")
var clicks = 0;
btnShow.addEventListener('click',function (){
    clicks+=1;
    if (clicks %2 !==0){
        divshow.style.height="auto"
    }else {
        divshow.style.height="50px"
        btnShow.value.innerText="Show less"
    }

})
//this is ex11
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//this is ex12
var qty = document.querySelector("div#ex12 input#js-input-qty");
var price = document.querySelector("div#ex12 input#js-input-price");
var resultTotal = document.querySelector("div#ex12 input#result-total");


price.addEventListener("input",function (){
    var TheResult;
    qtys = Number(qty.value)
    prices= Number(price.value)
    TheResult = qtys * prices;
    resultTotal.value= TheResult;
})
qty.addEventListener("input",function (){
    var TheResult;
    qtys = Number(qty.value)
    prices= Number(price.value)
    TheResult = qtys * prices;
    resultTotal.value= TheResult;
})
// this is ex13

var start = document.querySelector("div#ex13 button#js-button-start")
var stop = document.querySelector("div#ex13 button#js-button-stop")
var reset = document.getElementById("js-button-reset")
var h3= document.getElementById("display")
var h =0, m=0,s=0,ms=0,t

function add(){
    ms++;
    if (ms>=1000){
        ms=0;
        s++;
        if (s>=60){
            s=0;
            m++;
            if (m>=60){
                m=0;
                h++;
                if (h>=24){
                    h=0
                }
            }
        }
    }
    h3.textContent= (h ? (h > 9 ? h : "0" + h) : "00") + ":" + (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s)+ ":" + (ms > 9 ? ms : "00" + ms ||ms>99 ? ms:"0");
}
function run(){
    t = setInterval(add,1)
}
start.addEventListener('click',function (){
        run();
})
stop.addEventListener("click",function (){
    clearInterval(t);
})
reset.onclick = function (){
    h3.textContent="00:00:000";
    h=0;m=0;s=0;ms=0;
}