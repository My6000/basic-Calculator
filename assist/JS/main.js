

let input, output, result, numbersBtn, operationBtn, equalBtn, myResult, backSpace, clearBtn;

output = document.querySelector('#output');
input = document.querySelector('#input');

equalBtn = document.querySelector('#btnEqual')

numbersBtn = document.querySelectorAll('.numbers');
operationBtn = document.querySelectorAll('.operation');

backSpaceBtn = document.querySelector('.backSpace');
clearBtn = document.querySelector('#butClear')

// equal Button function
equalBtn.addEventListener('click', function(){
    myResult = eval(input.value);

    if(myResult == undefined){
        input.value = ''
    }else{
        output.innerHTML = input.value
        input.value = myResult
    }
    
})



// insert numbers buttons
numbersBtn.forEach(function(btn){
    btn.addEventListener('click', function(val){
        input.value = input.value + val.target.dataset.number
    })
})


// insert operation buttons
operationBtn.forEach(function(btn){
    btn.addEventListener('click', function(val){
        
        if(input.value == ""){  // if user start to insert character while no number -->  no action

        }else{
            let lastCharacter = input.value.charAt(input.value.length - 1)

            if(val == lastCharacter){   // if user insert same character -->  no action
                
            }
            else if (lastCharacter == "+" || lastCharacter == "-"  || lastCharacter == "*"  || lastCharacter == "/" ){  
                backSpaceFunction()     // if user try to insert character twice -->  replace character
                input.value = input.value + val.target.dataset.number
            
            
            }else{  // if user insert character after number  -->  just add character
                input.value = input.value + val.target.dataset.number 
                console.log('false 2')
            }
        }
    })
})




// back Space function delete one character or number
function backSpaceFunction(){
    input.value = input.value.slice(0, -1);
    output.innerHTML = "";
}

backSpaceBtn.addEventListener('click', backSpaceFunction)



// clear all function delete all
function clearAll(){
    output.innerHTML = "";
    input.value = "";
}

clearBtn.addEventListener('click', clearAll)











// ----------------------------------------------------

// Time now
function timeNow(){
var clock, d, h, m, s, t ;

clock = document.getElementById("time") ;

d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();


if(h < 12 ){
  t = " AM" ;
} else{
    t = " PM" ; 
}
  

// to display time as 12 hours not 24 hours
h = h % 12 ;
if(h = h){
    h
}else{
    h = 12;
}



if(  h < 10){
  h = "0" +h;
}


if(  m < 10){
  m = "0" +m;
}


if(  s < 10){
  s = "0" +s;
}


clock.innerHTML =  h + ":" + m + ":" + s + t ;

setTimeout(timeNow, 1000)
}

timeNow()



// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
// }
  
// console.log(formatAMPM(new Date));



        


