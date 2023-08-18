function titleFade(){
    titleImg.style.opacity=1;
}
function authorFade(){
    authorImg.style.opacity=1;
}
function tutorialFade(){
    tutorialBtn.style.opacity=1;
}
function beginFade(){
    beginBtn.style.opacity=1;
}
function footerFade(){
    footer.style.opacity=1;
}

(function titleScreen(){
    setTimeout(titleFade,1500);
    setTimeout(authorFade,3000);
    setTimeout(tutorialFade,4500);
    setTimeout(beginFade,5500);
    setTimeout(footerFade,6000);
})();