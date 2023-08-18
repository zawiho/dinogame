//Enemy stats
let enemyHlth=0;
let enemyAtk=0;
let enemyDef=0;
let enemySpd=0;

let wins=0;


function hideHud(){
    enemyDiv.classList.add("hidden");
    statsDiv.classList.add("hidden");
}
function showBonus(){
    finish.classList.remove("hidden");
}
function bonusGame(){
    setTimeout(hideHud,1000);
    setTimeout(showBonus,1001);
}

function winHide(){
    document.querySelector('.stats').classList.add("hidden");
    document.querySelector('.enemy-container').classList.add("hidden");
}
function winFade(){
    document.querySelector('.stats').stle.opacity=0;
    document.querySelector('.enemy-container').stle.opacity=0;
    setTimeout(winHide,1001);
}
function showFinish(){
    finish.style.opacity=1;
}
function finishFade(){
    finish.classList.remove("hidden");
    setTimeout(showFinish,1001);
}

function hideBattle(){
    battleModal.classList.add("hidden");
}
function closeBattle(){
    battleModal.style.opacity=0;
    setTimeout(hideBattle,1000);
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
}

function hideAction(){
    actionDiv.classList.add("hidden");
}
function winner(){
    action.innerHTML="You Win!";
    hlthValue.innerHTML=playerHlth;
    setTimeout(hideAction,2000);
}

function showH2(){
    deadH2.style.opacity=1;
}
function showH3(){
    deadH3.style.opacity=1;
}
function showButton(){
    playAgain.style.opacity=1;
}

function youLose(){
    deadModal.style.display="grid";
    board.classList.add("hidden");
    setTimeout(showH2,2000);
    setTimeout(showH3,3000);
    setTimeout(showButton,4000);
}
function loser(){
    action.innerHTML="You Lose!";
    hlthValue.innerHTML=playerHlth;
    setTimeout(hideAction,2000);
    youLose();
}

function atkBtn(){
    attack.classList.remove("hidden");
}
function hideAtk(){
    attack.classList.add("hidden");
}

function playerHlthCheck(){
    if(playerHlth>0){
        setTimeout(atkBtn,1750);
    }else if(playerHlth<=0){
        playerHlth=0;
        setTimeout(loser,1000);
        setTimeout(closeBattle,2000);
        setTimeout(atkBtn,5000);
    }
}
function enemyHlthCheck(){
    if(enemyHlth>0){
        setTimeout(atkBtn,1750);
    }else if(enemyHlth<=0){
        enemyHlth=0;
        wins++;
        setTimeout(winner,1000);
        if(wins==4){
            setTimeout(bonusGame,3001);
            setTimeout(hideAtk,5001);
        }else{
            setTimeout(closeBattle,2000);
            setTimeout(atkBtn,5000);
        }
    }
}

function playerAttack(){
    let rand=Math.ceil(Math.random()*5);
    xAttack=Math.round(rand+(playerAtk-enemyDef));
    if(xAttack<=0){
        xAttack=1;
    }
    enemyHlth=enemyHlth-xAttack;
    if(enemyHlth<=0){
        enemyHlth=0;
        setTimeout(atkBtn,5000);
    }else{
        if(playerSpd>=enemySpd){
            setTimeout(atkBtn,2500);
        }else if(enemySpd>playerSpd){
            setTimeout(atkBtn,1500);
        } 
    }
    action.innerHTML="Player attacks enemy for "+xAttack+" damage!";
    yHlth.innerHTML=enemyHlth;
}
function enemyAttack(){
    yAttack=Math.round(enemyAtk-playerDef);
    if(yAttack<=0){
        yAttack=1;
    }
    playerHlth=playerHlth-yAttack;
    if(playerHlth<=0){
        playerHlth=0;
        setTimeout(atkBtn,5000);
    }
    action.innerHTML="Enemy attacks player for "+yAttack+" damage!";
    xHlth.innerHTML=playerHlth;
}

attack.addEventListener('click', function(){
    proceed.style.opacity=0;
    actionDiv.classList.remove("hidden");
    attack.classList.add("hidden");
    if(playerSpd>=enemySpd){
        playerAttack();
        if(enemyHlth>0){
            setTimeout(enemyAttack,1000);
            setTimeout(playerHlthCheck,1001);   
        }else if(enemyHlth<=0){
            wins++;
            setTimeout(winner,1000);
            if(wins==4){
                setTimeout(bonusGame,3001);
                setTimeout(hideAtk,5001);
            }else{
                setTimeout(closeBattle,2000);
                setTimeout(atkBtn,5000);
            }
        }
    }else if(enemySpd>playerSpd){
        enemyAttack();
        if(playerHlth>0){
            setTimeout(playerAttack,1000);
            setTimeout(enemyHlthCheck,1001);
        }else if(playerHlth<=0){
            setTimeout(loser,1000);
            setTimeout(closeBattle,2000);
        }
    }
});