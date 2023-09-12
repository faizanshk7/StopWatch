var hr = 0;    //hour 
var min = 0;    //minute
var sec = 0;   //sec
count = 0;     //count
 

//firstly timer is false
var timer = false;


//onclick function to start
function start() {
  timer = true;

//call the function 
  stopwatch();
}

function stop() {
//stop funtion timer false
  timer = false;
}

//reset function 
function reset() {

 //timer is false
  timer = false;
  // hour,min,sec,count is 0 ;
  hr=0;
  min=0;
  sec=0;
  count=0;

 //getID and change the innerhtml
  document.getElementById("hr").innerHTML="00";
  document.getElementById("min").innerHTML="00";
  document.getElementById("sec").innerHTML="00";
  document.getElementById("count").innerHTML="00";

}
//function stopwatch 
function stopwatch() {

//firstly check it is true 
  if (timer == true) {

    if (count == 100) { //count
      sec++;
      count = 0;
    }
    if (sec == 60) {  //second
      min++;
      sec = 0;
    }
    if (min ==60) {  //minute
     //min is 0 hour and sec is 0;
      hr++;
      min = 0;
      sec = 0;
    }
   var hrString=hr;   // hours
   var  minString=min; //minute
   var secString=sec;  //second
    var countString=count; //count
    

  //check count it is less then 0 so add String "0";
    if(countString<10){
        countString="0"+countString;

    }
    if(secString<10){
        secString="0"+secString;

    }
    if( minString<10){
        minString="0"+ minString;

    }
    if( hrString<10){
        hrString="0"+ hrString;

    }
  
    

    //getId and change the innerhtml

    document.getElementById("count").innerHTML =countString;
    document.getElementById("sec").innerHTML =secString;
    document.getElementById("min").innerHTML =minString;
    document.getElementById("hr").innerHTML = hrString;
     
    //using settime out and call the function again;
   //mili second 
    setTimeout("stopwatch()", 7);
    //count will be increase
    count++;
  }
}
