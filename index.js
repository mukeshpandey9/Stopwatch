let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.screen');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    int = setInterval(displayTimer,1000);
});

document.getElementById('stopTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
});

function displayTimer(){
    seconds += 1;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;

 timerRef.innerHTML = `${h} : ${m} : ${s}`;
    }