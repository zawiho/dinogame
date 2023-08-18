let tut=0;

function hideHome(){
    homeDiv.classList.add("hidden");
    footer.classList.add("hidden");
}
function homeFade(){
    homeDiv.style.opacity=0;
    footer.style.opacity=0;
    setTimeout(hideHome,1000);
}

function openTutorial(){
    tutorialDiv.style.opacity=1;
}
function tutFadeIn(){
    tutorialDiv.classList.remove("hidden");
    setTimeout(openTutorial,500);
}

function closeTutorial(){
    tutorialDiv.classList.add("hidden");
}
function tutFadeOut(){
    tutorialDiv.style.opacity=0;
    setTimeout(closeTutorial,1000);
}

function chooseFade(){
    selectionDiv.style.opacity=1;
}
function showChoose(){
    selectionDiv.classList.remove("hidden");
    setTimeout(chooseFade,500);
}

function btnFade(){
    beginBtn2.style.opacity=1;
}
function beginButton(){
    beginBtn2.classList.remove("hidden");
    setTimeout(btnFade,1);
}

tutorialBtn.addEventListener('click', function(){
    setTimeout(homeFade,1);
    setTimeout(tutFadeIn,1001);
});
beginBtn.addEventListener('click',function(){
    setTimeout(homeFade,1);
    setTimeout(showChoose,1001);
});

prevBtn.addEventListener('click', function(){
    tut--;
    if(tut==3){
        tutImg.src="images/tutorial/tut4.png";
        nextBtn.classList.remove("hidden");
        beginBtn2.classList.add("hidden");
    }else if(tut==2){
        tutImg.src="images/tutorial/tut3.png";
    }else if(tut==1){
        tutImg.src="images/tutorial/tut2.png";
    }else if(tut==0){
        tutImg.src="images/tutorial/tut1.png";
        prevBtn.classList.add("hidden");
    }

});
nextBtn.addEventListener('click', function(){
    tut++;
    if(tut==1){
        prevBtn.classList.remove("hidden");
        tutImg.src="images/tutorial/tut2.png";
    }else if(tut==2){
        tutImg.src="images/tutorial/tut3.png";
    }else if(tut==3){
        tutImg.src="images/tutorial/tut4.png";
    }else if(tut==4){
        tutImg.src="images/tutorial/tut5.png";
        nextBtn.classList.add("hidden");
        setTimeout(beginButton,1000);
    }
});

beginBtn2.addEventListener('click',function(){
    setTimeout(tutFadeOut,1);
    setTimeout(showChoose,1001);
});