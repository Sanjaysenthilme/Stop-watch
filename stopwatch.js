//start timer

var minutes='00';
var seconds='00';
var miliseconds='00';
var start=false;

function timer() 
{
    miliseconds++;
    if(miliseconds<10)
    {
        miliseconds="0"+miliseconds;
        
    }
    if(miliseconds==60)
    {
        
        miliseconds=0;
        seconds++;
        if(seconds<10)
         {
            seconds="0"+seconds;
         }
    }    
    if(seconds==60)
    {
        minutes++;
        seconds=0;

        if(minutes<10 )
        {
            minutes="0"+minutes;
        }
    }
    

    document.getElementById("miliseconds").innerHTML=miliseconds;
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("minutes").innerHTML=minutes;
}
let stop;
//Start function
function start_btn() 
{
    if(!start)
    {
        stop=setInterval(timer,10);    
        start=true;
    }
    
    
}
    
//pause function
function pause_btn()
{
    clearInterval(stop);
}

//reset function
function reset_btn()
{
    clearInterval(stop);
 
    minutes='00';
    seconds='00';
    miliseconds='00';
    start=false;
 
    document.getElementById("miliseconds").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
}