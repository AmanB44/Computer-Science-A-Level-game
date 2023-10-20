var hours = 0;
var mins = 0;
var seconds = 0;
var finished = false;

function Stop(){
      clearTimeout(timex);
      finished = true;
};

function reset(){
      hours = 0;
      mins = 0;
      seconds = 0;
};
function startTimer(){
  timex = setTimeout(function(){
      seconds++;
    if (seconds >59){
      seconds=0;mins++;

       if (mins>59) {
       mins=0;hours++;
        }
    }    
      startTimer();

  },1000);
  
}


