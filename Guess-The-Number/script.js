'use strict';
console.log(23);
let a,b;
let secretnumber = Math.trunc(Math.random()*20)+1;
let score=20;
a=0;

document.querySelector('.highscore').textContent='0';
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);

    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent="NO NUMBER";
    }
    else if(guess===secretnumber){
        document.querySelector('.message').textContent="right:)";
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        
        b=score;
        if(b>a){
            a=b;
            document.querySelector('.highscore').textContent=a;
        }



    }
    else if(guess<secretnumber){
        if(score>1){
        document.querySelector('.message').textContent="TOO LESS";
        score=score-1;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="YOU LOST";
            document.querySelector('.score').textContent=0;
        }
        
            
        
        

    }
    
    else {
        if(score>1){
            document.querySelector('.message').textContent="TOO LARGE";
            score=score-1;
            document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent="YOU LOST";
                document.querySelector('.score').textContent=0;
            }
    }
})

document.querySelector('.again').addEventListener(
   'click',function(){
        secretnumber=(Math.trunc(Math.random()*20))+1;
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.message').textContent="😊START GUESSING...";
        document.querySelector('.number').textContent="❓";
        score=20;
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.guess').value='';


        
        
    }
)