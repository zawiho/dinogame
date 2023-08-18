// function hideChoose(){
//     document.querySelector('.choose').classList.add("hidden");
// }
function boardFade(){
    board.style.opacity=1;
}
function showBoard(){
    board.classList.remove("hidden");
    setTimeout(boardFade,500);
}

function proceedFade(){
    proceed.style.opacity=1;
}

//Red
chooseRed.addEventListener('click', function(){
    redModal.classList.remove("hidden");
    selectionDiv.classList.add("hidden");
});
redBack.addEventListener('click', function(){
    redModal.classList.add("hidden");
    selectionDiv.classList.remove("hidden");
});
redBegin.addEventListener('click', function(){
    const player=redRight;
    redModal.classList.add("hidden");
    selectionDiv.classList.add("hidden");
    board.classList.remove("hidden");
    setTimeout(showBoard,1);
    setTimeout(proceedFade,2000);
    playerCircle.src=redRight.circle;
    playerIcon.src=redRight.icon;
    battlePlayer.src=redRight.pic;
});

//Blue
chooseBlue.addEventListener('click', function(){
    blueModal.classList.remove("hidden");
    selectionDiv.classList.add("hidden");
});
blueBack.addEventListener('click', function(){
    blueModal.classList.add("hidden");
    selectionDiv.classList.remove("hidden");
});
blueBegin.addEventListener('click', function(){
    const player=blueRight;
    blueModal.classList.add("hidden");
    selectionDiv.classList.add("hidden");
    board.classList.remove("hidden");
    setTimeout(showBoard,1);
    setTimeout(proceedFade,2000);
    playerCircle.src=blueRight.circle;
    playerIcon.src=blueRight.icon;
    battlePlayer.src=blueRight.pic;
});

//Yellow
chooseYellow.addEventListener('click', function(){
    yellowModal.classList.remove("hidden");
    selectionDiv.classList.add("hidden");
});
yellowBack.addEventListener('click', function(){
    yellowModal.classList.add("hidden");
    selectionDiv.classList.remove("hidden");
});
yellowBegin.addEventListener('click', function(){
    const player=yellowRight;
    yellowModal.classList.add("hidden");
    selectionDiv.classList.add("hidden");
    board.classList.remove("hidden");
    setTimeout(showBoard,1);
    setTimeout(proceedFade,2000);
    playerCircle.src=yellowRight.circle;
    playerIcon.src=yellowRight.icon;
    battlePlayer.src=yellowRight.pic;
});

//Green
chooseGreen.addEventListener('click', function(){
    greenModal.classList.remove("hidden");
    selectionDiv.classList.add("hidden");
});
greenBack.addEventListener('click', function(){
    greenModal.classList.add("hidden");
    selectionDiv.classList.remove("hidden");
});
greenBegin.addEventListener('click', function(){
    const player=greenRight;
    greenModal.classList.add("hidden");
    selectionDiv.classList.add("hidden");
    board.classList.remove("hidden");
    setTimeout(showBoard,1);
    setTimeout(proceedFade,2000);
    playerCircle.src=greenRight.circle;
    playerIcon.src=greenRight.icon;
    battlePlayer.src=greenRight.pic;
});



