class Timer{
    constructor(){
        this.remainingSecons = 0;
    }
        setSeconds(seconds){
            this.remainingSecons=seconds;
        }
        
    tick(){
        this.remainingSecons--;
    }
    
}

const timer1 = new Timer();
const timer2 = new Timer();

timer1.setSeconds(5);
timer2.setSeconds(3);

console.log('残り時間'+ timer1.remainingSecons);
console.log('残り時間'+ timer2.remainingSecons);