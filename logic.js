let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int;


 //implementation of 'start' function
document.getElementById('startTimer').addEventListener
('click', () => {
    int = setInterval(displayTimer, 10);
});

function displayTimer(){
    milliseconds += 10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

 }


 let  h = hours < 10 ? "0" + hours : hours;
 let  m = minutes < 10 ? "0" + minutes : minutes;
 let  s = seconds < 10 ? "0" + seconds : seconds;
 let  ms = milliseconds < 10 ? "00" +milliseconds:milliseconds < 100 ? "0" +
 milliseconds:milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;

}


//implementation of 'pause' function
document.getElementById('pauseTimer').addEventListener
('click', () => {
    clearInterval(int);
});

//implementation of 'reset' function
document.getElementById('resetTimer').addEventListener
('click', () => {
    clearInterval(int);
    timerRef.innerHTML = '00 : 00 : 00 : 000';
})



