let number = document.getElementsByClassName("number");
let porcentaje= number[0].innerHTML;
let counter = 0;



setInterval(()=>{

    if (counter == porcentaje){ 
        
        clearInterval();
    }
    else {
    counter +=1;
    number[0].innerHTML = counter +"%";
    }

},30)