let playerAtk=10;
let playerDef=5;
let playerSpd=5;
let playerHlth=50;

let headAtk=0;
let headDef=0;
let headSpd=0;

let armsAtk=0;
let armsDef=0;
let armsSpd=0;

let torsoAtk=0;
let torsoDef=0;
let torsoSpd=0;

let legsAtk=0;
let legsDef=0;
let legsSpd=0;

let tailAtk=0;
let tailDef=0;
let tailSpd=0;

//-------------

let headAtk2=0;
let headDef2=0;
let headSpd2=0;

let armsAtk2=0;
let armsDef2=0;
let armsSpd2=0;

let torsoAtk2=0;
let torsoDef2=0;
let torsoSpd2=0;

let legsAtk2=0;
let legsDef2=0;
let legsSpd2=0;

let tailAtk2=0;
let tailDef2=0;
let tailSpd2=0;

function equipDome(){
    headAtk=domeRight.atk;
    headDef=domeRight.def;
    headSpd=domeRight.spd;
}
function equipBeak(){
    headAtk=beakRight.atk;
    headDef=beakRight.def;
    headSpd=beakRight.spd;
}
function equipSpikes(){
    headAtk=spikesRight.atk;
    headDef=spikesRight.def;
    headSpd=spikesRight.spd;
}

function equipScythe(){
    armsAtk=scytheRight.atk;
    armsDef=scytheRight.def;
    armsSpd=scytheRight.spd;
}
function equipPinion(){
    armsAtk=pinionRight.atk;
    armsDef=pinionRight.def;
    armsSpd=pinionRight.spd;
}
function equipClaws(){
    armsAtk=clawsRight.atk;
    armsDef=clawsRight.def;
    armsSpd=clawsRight.spd;
}

function equipArmor(){
    torsoAtk=armorRight.atk;
    torsoDef=armorRight.def;
    torsoSpd=armorRight.spd;
}
function equipSail(){
    torsoAtk=sailRight.atk;
    torsoDef=sailRight.def;
    torsoSpd=sailRight.spd;
}
function equipDermal(){
    torsoAtk=dermalRight.atk;
    torsoDef=dermalRight.def;
    torsoSpd=dermalRight.spd;
}

function equipBracer(){
    legsAtk=bracerRight.atk;
    legsDef=bracerRight.def;
    legsSpd=bracerRight.spd;
}
function equipSprint(){
    legsAtk=sprintRight.atk;
    legsDef=sprintRight.def;
    legsSpd=sprintRight.spd;   
}
function equipTalon(){
    legsAtk=talonRight.atk;
    legsDef=talonRight.def;
    legsSpd=talonRight.spd;    
}

function equipClub(){
    tailAtk=clubRight.atk;
    tailDef=clubRight.def;
    tailSpd=clubRight.spd;    
}
function equipFeather(){
    tailAtk=featherRight.atk;
    tailDef=featherRight.def;
    tailSpd=featherRight.spd;    
}
function equipThag(){
    tailAtk=thagRight.atk;
    tailDef=thagRight.def;
    tailSpd=thagRight.spd;    
}

function statsOne(){
    playerAtk=playerAtk+torsoAtk;
    playerDef=playerDef+torsoDef;
    playerSpd=playerSpd+torsoSpd;
    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsTwo(){
    playerAtk=playerAtk+armsAtk;
    playerDef=playerDef+armsDef;
    playerSpd=playerSpd+armsSpd;
    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsThree(){
    playerAtk=playerAtk+headAtk;
    playerDef=playerDef+headDef;
    playerSpd=playerSpd+headSpd;
    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsFour(){
    playerAtk=playerAtk+tailAtk;
    playerDef=playerDef+tailDef;
    playerSpd=playerSpd+tailSpd;
    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsFive(){
    playerAtk=playerAtk+legsAtk;
    playerDef=playerDef+legsDef;
    playerSpd=playerSpd+legsSpd;
    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsSix(){
    playerAtk=playerAtk-torsoAtk;
    playerDef=playerDef-torsoDef;
    playerSpd=playerSpd-torsoSpd;

    playerAtk=playerAtk+torsoAtk2;
    playerDef=playerDef+torsoDef2;
    playerSpd=playerSpd+torsoSpd2;

    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsSeven(){
    playerAtk=playerAtk-armsAtk;
    playerDef=playerDef-armsDef;
    playerSpd=playerSpd-armsSpd;

    playerAtk=playerAtk+armsAtk2;
    playerDef=playerDef+armsDef2;
    playerSpd=playerSpd+armsSpd2;

    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsEight(){
    playerAtk=playerAtk-headAtk;
    playerDef=playerDef-headDef;
    playerSpd=playerSpd-headSpd;
    
    playerAtk=playerAtk+headAtk2;
    playerDef=playerDef+headDef2;
    playerSpd=playerSpd+headSpd2;

    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsNine(){
    playerAtk=playerAtk-tailAtk;
    playerDef=playerDef-tailDef;
    playerSpd=playerSpd-tailSpd;
    
    playerAtk=playerAtk+tailAtk2;
    playerDef=playerDef+tailDef2;
    playerSpd=playerSpd+tailSpd2;

    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}
function statsTen(){
    playerAtk=playerAtk-legsAtk;
    playerDef=playerDef-legsDef;
    playerSpd=playerSpd-legsSpd;
    
    playerAtk=playerAtk+legsAtk2;
    playerDef=playerDef+legsDef2;
    playerSpd=playerSpd+legsSpd2;

    if(playerAtk<=0){
        playerAtk=0;
    } 
    if(playerDef<=0){
        playerDef=0;
    }
    if(playerSpd<=0){
        playerSpd=0;
    }
}


function updateStats(){
    boardAtk.innerHTML=playerAtk.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    boardDef.innerHTML=playerDef.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    boardSpd.innerHTML=playerSpd.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
}
function updateHealth(){
    hlthValue.innerHTML=playerHlth;
    let h=playerHlth
    let hBar=h*3.96;
    hlthBar.style.width=hBar+"px";
}

function hideModal(){
    equipmentModal1.style.opacity=0;
    equipmentModal2.style.opacity=0;
    equipmentModal3.style.opacity=0;
    equipmentModal4.style.opacity=0;
    equipmentModal5.style.opacity=0;
    equipmentModal6.style.opacity=0;
    equipmentModal7.style.opacity=0;
    equipmentModal8.style.opacity=0;
    equipmentModal9.style.opacity=0;
    equipmentModal10.style.opacity=0;
}

//First - Torso
gearOne1.addEventListener('click', function(){
    equipOne1.style.display="block";
    equipTwo1.style.display="none";
    equipThree1.style.display="none";
})
gearTwo1.addEventListener('click', function(){
    equipOne1.style.display="none";
    equipTwo1.style.display="block";
    equipThree1.style.display="none";
})
gearThree1.addEventListener('click', function(){
    equipOne1.style.display="none";
    equipTwo1.style.display="none";
    equipThree1.style.display="block";
})

equipOne1.addEventListener('click', function(){
    //Sail
    equipSail();
    statsOne();
    updateStats();
    equipmentModal1.classList.add("hidden");
    torsoIcon.src="images/icons/bone-torso.png";
    sail.classList.remove("hidden");
    hideModal();
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);  
})
equipTwo1.addEventListener('click', function(){
    //Armour
    equipArmor();
    statsOne();
    updateStats();
    equipmentModal1.classList.add("hidden");
    torsoIcon.src="images/icons/bone-torso.png";
    armour.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})
equipThree1.addEventListener('click', function(){
    //Dermal
    equipDermal();
    statsOne();
    updateStats();
    equipmentModal1.classList.add("hidden");
    torsoIcon.src="images/icons/bone-torso.png";
    dermal.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})

//Second - Arms
gearOne2.addEventListener('click', function(){
    equipOne2.style.display="block";
    equipTwo2.style.display="none";
    equipThree2.style.display="none";
})
gearTwo2.addEventListener('click', function(){
    equipOne2.style.display="none";
    equipTwo2.style.display="block";
    equipThree2.style.display="none";
})
gearThree2.addEventListener('click', function(){
    equipOne2.style.display="none";
    equipTwo2.style.display="none";
    equipThree2.style.display="block";
})

equipOne2.addEventListener('click', function(){
    //Scythe
    equipScythe();
    statsTwo();
    updateStats();
    equipmentModal2.classList.add("hidden");
    armsIcon.src="images/icons/bone-arm.png";
    scythe.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})
equipTwo2.addEventListener('click', function(){
    //Pinions
    equipPinion();
    statsTwo();
    updateStats();
    equipmentModal2.classList.add("hidden");
    armsIcon.src="images/icons/bone-arm.png";
    pinion.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})
equipThree2.addEventListener('click', function(){
    //Claws
    equipClaws();
    statsTwo();
    updateStats();
    equipmentModal2.classList.add("hidden");
    armsIcon.src="images/icons/bone-arm.png";
    claws.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})

//Third - Head
gearOne3.addEventListener('click', function(){
    equipOne3.style.display="block";
    if(playerHlth<50){
        healOne3.style.display="block";
    }
    equipTwo3.style.display="none";
    healTwo3.style.display="none";
    equipThree3.style.display="none";
    healThree3.style.display="none";
})
gearTwo3.addEventListener('click', function(){
    equipOne3.style.display="none";
    healOne3.style.display="none";
    equipTwo3.style.display="block";
    if(playerHlth<50){
        healTwo3.style.display="block";
    }
    equipThree3.style.display="none";
    healThree3.style.display="none";
})
gearThree3.addEventListener('click', function(){
    equipOne3.style.display="none";
    healOne3.style.display="none";
    equipTwo3.style.display="none";
    healTwo3.style.display="none";
    equipThree3.style.display="block";
    if(playerHlth<50){
        healThree3.style.display="block";
    }
})

equipOne3.addEventListener('click', function(){
    //Dome
    equipDome();
    statsThree();
    updateStats();
    equipmentModal3.classList.add("hidden");
    skullIcon.src="images/icons/bone-skull.png";
    dome.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})
equipTwo3.addEventListener('click', function(){
    //Beak
    equipBeak();
    statsThree();
    updateStats();
    equipmentModal3.classList.add("hidden");
    skullIcon.src="images/icons/bone-skull.png";
    beak.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000);
})
equipThree3.addEventListener('click', function(){
    //Spikes
    equipSpikes();
    statsThree();
    updateStats();
    equipmentModal3.classList.add("hidden");
    skullIcon.src="images/icons/bone-skull.png";
    spikes.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne3.addEventListener('click', function(){
    playerHlth=playerHlth+domeRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal3.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo3.addEventListener('click', function(){
    playerHlth=playerHlth+beakRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal3.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree3.addEventListener('click', function(){
    playerHlth=playerHlth+spikesRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal3.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

//Fourth - Tail
gearOne4.addEventListener('click', function(){
    equipOne4.style.display="block";
    if(playerHlth<50){
        healOne4.style.display="block";
    }
    equipTwo4.style.display="none";
    healTwo4.style.display="none";
    equipThree4.style.display="none";
    healThree4.style.display="none";
})
gearTwo4.addEventListener('click', function(){
    equipOne4.style.display="none";
    healOne4.style.display="none";
    equipTwo4.style.display="block";
    if(playerHlth<50){
        healTwo4.style.display="block";
    }
    equipThree4.style.display="none";
    healThree4.style.display="none";
})
gearThree4.addEventListener('click', function(){
    equipOne4.style.display="none";
    healOne4.style.display="none";
    equipTwo4.style.display="none";
    healTwo4.style.display="none";
    equipThree4.style.display="block";
    if(playerHlth<50){
        healThree4.style.display="block";
    }
})

equipOne4.addEventListener('click', function(){
    //Feather
    equipFeather();
    statsFour();
    updateStats();
    equipmentModal4.classList.add("hidden");
    tailIcon.src="images/icons/bone-tail.png";
    feather.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo4.addEventListener('click', function(){
    //Club
    equipClub();
    statsFour();
    updateStats();
    equipmentModal4.classList.add("hidden");
    tailIcon.src="images/icons/bone-tail.png";
    club.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree4.addEventListener('click', function(){
    //Thags
    equipThag();
    statsFour();
    updateStats();
    equipmentModal4.classList.add("hidden");
    tailIcon.src="images/icons/bone-tail.png";
    thags.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne4.addEventListener('click', function(){
    playerHlth=playerHlth+featherRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal4.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo4.addEventListener('click', function(){
    playerHlth=playerHlth+clubRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal4.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree4.addEventListener('click', function(){
    playerHlth=playerHlth+thagRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal4.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

//Fifth - Legs
gearOne5.addEventListener('click', function(){
    equipOne5.style.display="block";
    if(playerHlth<50){
        healOne5.style.display="block";
    }
    equipTwo5.style.display="none";
    healTwo5.style.display="none";
    equipThree5.style.display="none";
    healThree5.style.display="none";
})
gearTwo5.addEventListener('click', function(){
    equipOne5.style.display="none";
    healOne5.style.display="none";
    equipTwo5.style.display="block";
    if(playerHlth<50){
        healTwo5.style.display="block";
    }
    equipThree5.style.display="none";
    healThree5.style.display="none";
})
gearThree5.addEventListener('click', function(){
    equipOne5.style.display="none";
    healOne5.style.display="none";
    equipTwo5.style.display="none";
    healTwo5.style.display="none";
    equipThree5.style.display="block";
    if(playerHlth<50){
        healThree5.style.display="block";
    }
})

equipOne5.addEventListener('click', function(){
    //Bracers
    equipBracer();
    statsFive();
    updateStats();
    equipmentModal5.classList.add("hidden");
    legsIcon.src="images/icons/bone-leg.png";
    bracer.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo5.addEventListener('click', function(){
    //Sprinters
    equipSprint();
    statsFive();
    updateStats();
    equipmentModal5.classList.add("hidden");
    legsIcon.src="images/icons/bone-leg.png";
    sprint.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree5.addEventListener('click', function(){
    //Talons
    equipTalon();
    statsFive();
    updateStats();
    equipmentModal5.classList.add("hidden");
    legsIcon.src="images/icons/bone-leg.png";
    talon.classList.remove("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne5.addEventListener('click', function(){
    playerHlth=playerHlth+bracerRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal5.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo5.addEventListener('click', function(){
    playerHlth=playerHlth+sprintRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal5.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree5.addEventListener('click', function(){
    playerHlth=playerHlth+talonRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal5.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

//Sixth - Torso
gearOne6.addEventListener('click', function(){
    equipOne6.style.display="block";
    if(playerHlth<50){
        healOne6.style.display="block";
    }
    equipTwo6.style.display="none";
    healTwo6.style.display="none";
    equipThree6.style.display="none";
    healThree6.style.display="none";
})
gearTwo6.addEventListener('click', function(){
    equipOne6.style.display="none";
    healOne6.style.display="none";
    equipTwo6.style.display="block";
    if(playerHlth<50){
        healTwo6.style.display="block";
    }
    equipThree6.style.display="none";
    healThree6.style.display="none";
})
gearThree6.addEventListener('click', function(){
    equipOne6.style.display="none";
    healOne6.style.display="none";
    equipTwo6.style.display="none";
    healTwo6.style.display="none";
    equipThree6.style.display="block";
    if(playerHlth<50){
        healThree6.style.display="block";
    }
})

equipOne6.addEventListener('click', function(){
    //Sail
    torsoAtk2=sailRight.atk;
    torsoDef2=sailRight.def;
    torsoSpd2=sailRight.spd;
    statsSix();

    setTimeout(updateStats,500);
    equipmentModal6.classList.add("hidden");
    compare.classList.add("hidden");
    torsoIcon.src="images/icons/bone-torso.png";
    sail.classList.remove("hidden");
    armour.classList.add("hidden");
    dermal.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo6.addEventListener('click', function(){
    //Armour
    torsoAtk2=armorRight.atk;
    torsoDef2=armorRight.def;
    torsoSpd2=armorRight.spd;
    statsSix();

    setTimeout(updateStats,500);
    equipmentModal6.classList.add("hidden");
    compare.classList.add("hidden");
    torsoIcon.src="images/icons/bone-torso.png";
    armour.classList.remove("hidden");
    sail.classList.add("hidden");
    dermal.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree6.addEventListener('click', function(){
    //Dermal
    torsoAtk2=dermalRight.atk;
    torsoDef2=dermalRight.def;
    torsoSpd2=dermalRight.spd;
    statsSix();

    setTimeout(updateStats,500);
    equipmentModal6.classList.add("hidden");
    compare.classList.add("hidden");
    torsoIcon.src="images/icons/bone-torso.png";
    dermal.classList.remove("hidden");
    armour.classList.add("hidden");
    sail.classList.add("hidden"); 
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne6.addEventListener('click', function(){
    playerHlth=playerHlth+sailRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal6.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo6.addEventListener('click', function(){
    playerHlth=playerHlth+armorRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal6.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree6.addEventListener('click', function(){
    playerHlth=playerHlth+dermalRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal6.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
 
//Seventh - Arms
gearOne7.addEventListener('click', function(){
    equipOne7.style.display="block";
    if(playerHlth<50){
        healOne7.style.display="block";
    }
    equipTwo7.style.display="none";
    healTwo7.style.display="none";
    equipThree7.style.display="none";
    healThree7.style.display="none";
})
gearTwo7.addEventListener('click', function(){
    equipOne7.style.display="none";
    healOne7.style.display="none";
    equipTwo7.style.display="block";
    if(playerHlth<50){
        healTwo7.style.display="block";
    }
    equipThree7.style.display="none";
    healThree7.style.display="none";
})
gearThree7.addEventListener('click', function(){
    equipOne7.style.display="none";
    healOne7.style.display="none";
    equipTwo7.style.display="none";
    healTwo7.style.display="none";
    equipThree7.style.display="block";
    if(playerHlth<50){
        healThree7.style.display="block";
    }
})

equipOne7.addEventListener('click', function(){
    //Scythe
    armsAtk2=scytheRight.atk;
    armsDef2=scytheRight.def;
    armsSpd2=scytheRight.spd;
    statsSeven();

    setTimeout(updateStats,500);
    equipmentModal7.classList.add("hidden");
    compare.classList.add("hidden");
    armsIcon.src="images/icons/bone-arm.png";
    scythe.classList.remove("hidden");
    pinion.classList.add("hidden");
    claws.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo7.addEventListener('click', function(){
    //Pinions
    armsAtk2=pinionRight.atk;
    armsDef2=pinionRight.def;
    armsSpd2=pinionRight.spd;
    statsSeven();

    setTimeout(updateStats,500);
    equipmentModal7.classList.add("hidden");
    compare.classList.add("hidden");
    armsIcon.src="images/icons/bone-arm.png";
    pinion.classList.remove("hidden");
    scythe.classList.add("hidden");
    claws.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree7.addEventListener('click', function(){
    //Claws
    armsAtk2=clawsRight.atk;
    armsDef2=clawsRight.def;
    armsSpd2=clawsRight.spd;
    statsSeven();

    setTimeout(updateStats,500);
    equipmentModal7.classList.add("hidden");
    compare.classList.add("hidden");
    armsIcon.src="images/icons/bone-arm.png";
    claws.classList.remove("hidden");
    scythe.classList.add("hidden");
    pinion.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne7.addEventListener('click', function(){
    playerHlth=playerHlth+scytheRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal7.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo7.addEventListener('click', function(){
    playerHlth=playerHlth+pinionRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal7.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree7.addEventListener('click', function(){
    playerHlth=playerHlth+clawsRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal7.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

//Eighth - Head
gearOne8.addEventListener('click', function(){
    equipOne8.style.display="block";
    if(playerHlth<50){
        healOne8.style.display="block";
    }
    equipTwo8.style.display="none";
    healTwo8.style.display="none";
    equipThree8.style.display="none";
    healThree8.style.display="none";
})
gearTwo8.addEventListener('click', function(){
    equipOne8.style.display="none";
    healOne8.style.display="none";
    equipTwo8.style.display="block";
    if(playerHlth<50){
        healTwo8.style.display="block";
    }
    equipThree8.style.display="none";
    healThree8.style.display="none";
})
gearThree8.addEventListener('click', function(){
    equipOne8.style.display="none";
    healOne8.style.display="none";
    equipTwo8.style.display="none";
    healTwo8.style.display="none";
    equipThree8.style.display="block";
    if(playerHlth<50){
        healThree8.style.display="block";
    }
})

equipOne8.addEventListener('click', function(){
    //Dome
    headAtk2=domeRight.atk;
    headDef2=domeRight.def;
    headSpd2=domeRight.spd;
    statsEight();

    setTimeout(updateStats,500);
    equipmentModal8.classList.add("hidden");
    compare.classList.add("hidden");
    skullIcon.src="images/icons/bone-skull.png";
    dome.classList.remove("hidden");
    beak.classList.add("hidden");
    spikes.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo8.addEventListener('click', function(){
    //Beak
    headAtk2=beakRight.atk;
    headDef2=beakRight.def;
    headSpd2=beakRight.spd;
    statsEight();

    setTimeout(updateStats,500);
    equipmentModal8.classList.add("hidden");
    compare.classList.add("hidden");
    skullIcon.src="images/icons/bone-skull.png";
    beak.classList.remove("hidden");
    spikes.classList.add("hidden");
    dome.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree8.addEventListener('click', function(){
    //Spikes
    headAtk2=spikesRight.atk;
    headDef2=spikesRight.def;
    headSpd2=spikesRight.spd;
    statsEight();

    setTimeout(updateStats,500);
    equipmentModal8.classList.add("hidden");
    compare.classList.add("hidden");
    skullIcon.src="images/icons/bone-skull.png";
    spikes.classList.remove("hidden");
    beak.classList.add("hidden");
    dome.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne8.addEventListener('click', function(){
    playerHlth=playerHlth+domeRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal8.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo8.addEventListener('click', function(){
    playerHlth=playerHlth+beakRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal8.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree8.addEventListener('click', function(){
    playerHlth=playerHlth+spikesRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal8.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

//Ninth - Tail
gearOne9.addEventListener('click', function(){
    equipOne9.style.display="block";
    if(playerHlth<50){
        healOne9.style.display="block";
    }
    equipTwo9.style.display="none";
    healTwo9.style.display="none";
    equipThree9.style.display="none";
    healThree9.style.display="none";
})
gearTwo9.addEventListener('click', function(){
    equipOne9.style.display="none";
    healOne9.style.display="none";
    equipTwo9.style.display="block";
    if(playerHlth<50){
        healTwo9.style.display="block";
    }
    equipThree9.style.display="none";
    healThree9.style.display="none";
})
gearThree9.addEventListener('click', function(){
    equipOne9.style.display="none";
    healOne9.style.display="none";
    equipTwo9.style.display="none";
    healTwo9.style.display="none";
    equipThree9.style.display="block";
    if(playerHlth<50){
        healThree9.style.display="block";
    }
})

equipOne9.addEventListener('click', function(){
    //Feather
    tailAtk2=featherRight.atk;
    tailDef2=featherRight.def;
    tailSpd2=featherRight.spd;
    statsNine();

    updateStats();
    equipmentModal9.classList.add("hidden");
    compare.classList.add("hidden");
    tailIcon.src="images/icons/bone-tail.png";
    feather.classList.remove("hidden");
    club.classList.add("hidden");
    thags.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo9.addEventListener('click', function(){
    //Club
    tailAtk2=clubRight.atk;
    tailDef2=clubRight.def;
    tailSpd2=clubRight.spd;
    playerAtk=playerAtk-tailAtk;
    statsNine();

    updateStats();
    equipmentModal9.classList.add("hidden");
    compare.classList.add("hidden");
    tailIcon.src="images/icons/bone-tail.png";
    club.classList.remove("hidden");
    feather.classList.add("hidden");
    thags.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree9.addEventListener('click', function(){
    //Thags
    tailAtk2=thagRight.atk;
    tailDef2=thagRight.def;
    tailSpd2=thagRight.spd;
    statsNine();

    updateStats();
    equipmentModal9.classList.add("hidden");
    compare.classList.add("hidden");
    tailIcon.src="images/icons/bone-tail.png";
    thags.classList.remove("hidden");
    feather.classList.add("hidden");
    club.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne9.addEventListener('click', function(){
    playerHlth=playerHlth+featherRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal9.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo9.addEventListener('click', function(){
    playerHlth=playerHlth+clubRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal9.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree9.addEventListener('click', function(){
    playerHlth=playerHlth+thagRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal9.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

//Tenth - Legs
gearOne10.addEventListener('click', function(){
    equipOne10.style.display="block";
    if(playerHlth<50){
        healOne10.style.display="block";
    }
    equipTwo10.style.display="none";
    healTwo10.style.display="none";
    equipThree10.style.display="none";
    healThree10.style.display="none";
})
gearTwo10.addEventListener('click', function(){
    equipOne10.style.display="none";
    healOne10.style.display="none";
    equipTwo10.style.display="block";
    if(playerHlth<50){
        healTwo10.style.display="block";
    }
    equipThree10.style.display="none";
    healThree10.style.display="none";
})
gearThree10.addEventListener('click', function(){
    equipOne10.style.display="none";
    healOne10.style.display="none";
    equipTwo10.style.display="none";
    healTwo10.style.display="none";
    equipThree10.style.display="block";
    if(playerHlth<50){
        healThree10.style.display="block";
    }
})

equipOne10.addEventListener('click', function(){
    //Bracers
    legsAtk2=bracerRight.atk;
    legsDef2=bracerRight.def;
    legsSpd2=bracerRight.spd;
    statsTen();

    updateStats();
    equipmentModal10.classList.add("hidden");
    compare.classList.add("hidden");
    legsIcon.src="images/icons/bone-leg.png";
    bracer.classList.remove("hidden");
    sprint.classList.add("hidden");
    talon.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipTwo10.addEventListener('click', function(){
    //Sprinters
    legsAtk2=sprintRight.atk;
    legsDef2=sprintRight.def;
    legsSpd2=sprintRight.spd;
    statsTen();

    updateStats();
    equipmentModal10.classList.add("hidden");
    compare.classList.add("hidden");
    legsIcon.src="images/icons/bone-leg.png";
    sprint.classList.remove("hidden");
    bracer.classList.add("hidden");
    talon.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
equipThree10.addEventListener('click', function(){
    //Talons
    legsAtk2=talonRight.atk;
    legsDef2=talonRight.def;
    legsSpd2=talonRight.spd;
    statsTen();

    updateStats();
    equipmentModal10.classList.add("hidden");
    compare.classList.add("hidden");
    legsIcon.src="images/icons/bone-leg.png";
    talon.classList.remove("hidden");
    bracer.classList.add("hidden");
    sprint.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})

healOne10.addEventListener('click', function(){
    playerHlth=playerHlth+bracerRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal10.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healTwo10.addEventListener('click', function(){
    playerHlth=playerHlth+sprintRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal10.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})
healThree10.addEventListener('click', function(){
    playerHlth=playerHlth+talonRight.tot;
    if(playerHlth>=50){
        playerHlth=50;
    }
    setTimeout(updateHealth,500);
    equipmentModal10.classList.add("hidden");
    compare.classList.add("hidden");
    hideModal(); 
    proceed.classList.remove("hidden");
    setTimeout(proceedFade,5000); 
})