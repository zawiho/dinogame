let positionT=-570;
let positionL=-100;

function revealModal(){
    equipmentModal1.style.opacity=1;
    equipmentModal2.style.opacity=1;
    equipmentModal3.style.opacity=1;
    equipmentModal4.style.opacity=1;
    equipmentModal5.style.opacity=1;
}
function revealModal2(){
    equipmentModal6.style.opacity=1;
    equipmentModal7.style.opacity=1;
    equipmentModal8.style.opacity=1;
    equipmentModal9.style.opacity=1;
    equipmentModal10.style.opacity=1;
    compare.classList.remove("hidden");
}
function revealBattle(){
    battleModal.style.opacity=1;
}

document.addEventListener('keydown',function(event){
    let key = event.key;
    if (key==" "){
        event.preventDefault();

        if(board.style.opacity==1){
            proceed.classList.add("hidden");
            proceed.style.opacity=0;
            clearTimeout(proceedFade);
            if(positionT==-570 && positionL==-100){
                //2nd
                positionT=-600;
                positionL=52;
                playerIcon.style.top=positionT+"px";
                playerIcon.style.left=positionL+"px";
                
                equipmentModal1.classList.remove("hidden");
                setTimeout(revealModal,500);           
                
            }else if(positionT==-600 && positionL==52){
                //3rd
                if(equipmentModal1.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-610;
                    positionL=172;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal2.classList.remove("hidden");
                    setTimeout(revealModal,500);
                }
                
            }else if(positionT==-610 && positionL==172){
                //4th
                if(equipmentModal2.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-580;
                    positionL=276;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    xAtk.innerHTML=playerAtk;
                    xDef.innerHTML=playerDef;
                    xSpd.innerHTML=playerSpd;
                    xHlth.innerHTML=playerHlth;
                    
                    battleEnemy.src="images/dinosaurs/enemy-blue.png";
                    enemyAtk=14;
                    enemyDef=6;
                    enemySpd=5;
                    enemyHlth=50;
                    yAtk.innerHTML=enemyAtk;
                    yDef.innerHTML=enemyDef;
                    ySpd.innerHTML=enemySpd;
                    yHlth.innerHTML=enemyHlth;
                    
                    battleModal.classList.remove("hidden");
                    setTimeout(revealBattle,500);
                }
                
            }else if(positionT==-580 && positionL==276){
                //5th
                if(battleModal.style.opacity==1){
                    console.log("no")
                }else{
                    positionT=-496;
                    positionL=302;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal3.classList.remove("hidden");
                    setTimeout(revealModal,500);
                }
                
            }else if(positionT==-496 && positionL==302){
                //6th
                if(equipmentModal3.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-380;
                    positionL=270;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal4.classList.remove("hidden");
                    setTimeout(revealModal,500);
                }
                
            }else if(positionT==-380 && positionL==270){
                //7th
                if(equipmentModal4.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-260;
                    positionL=330;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal5.classList.remove("hidden");
                    setTimeout(revealModal,500);
                }
                
            }else if(positionT==-260 && positionL==330){
                //8th
                if(equipmentModal5.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-256;
                    positionL=433;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    xAtk.innerHTML=playerAtk;
                    xDef.innerHTML=playerDef;
                    xSpd.innerHTML=playerSpd;
                    xHlth.innerHTML=playerHlth;
                    
                    battleEnemy.src="images/dinosaurs/enemy-green.png";
                    enemyAtk=15;
                    enemyDef=12;
                    enemySpd=2;
                    enemyHlth=50;
                    yAtk.innerHTML=enemyAtk;
                    yDef.innerHTML=enemyDef;
                    ySpd.innerHTML=enemySpd;
                    yHlth.innerHTML=enemyHlth;
                    
                    battleModal.classList.remove("hidden");
                    setTimeout(revealBattle,500);
                }
                
            }else if(positionT==-256 && positionL==433){
                //9th
                if(battleModal.style.opacity==1){
                    console.log("no")
                }else{
                    positionT=-260;
                    positionL=534;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal6.classList.remove("hidden");
                    setTimeout(revealModal2,500);
                    
                    diff1Atk=(torsoAtk-0)*-1;
                    if(Math.sign(diff1Atk)==-1){
                        comp1Atk.innerHTML="( "+diff1Atk+" )";
                    }else{
                        comp1Atk.innerHTML="( +"+diff1Atk+" )";
                    }
                    diff1Def=(torsoDef-1)*-1;
                    if(Math.sign(diff1Def)==-1){
                        comp1Def.innerHTML="( "+diff1Def+" )";
                    }else{
                        comp1Def.innerHTML="( +"+diff1Def+" )";
                    }
                    diff1Spd=(torsoSpd-4)*-1;
                    if(Math.sign(diff1Spd)==-1){
                        comp1Spd.innerHTML="( "+diff1Spd+" )";
                    }else{
                        comp1Spd.innerHTML="( +"+diff1Spd+" )";
                    }
                    
                    diff2Atk=(torsoAtk-0)*-1;
                    if(Math.sign(diff2Atk)==-1){
                        comp2Atk.innerHTML="( "+diff2Atk+" )";
                    }else{
                        comp2Atk.innerHTML="( +"+diff2Atk+" )";
                    }
                    diff2Def=(torsoDef-6)*-1;
                    if(Math.sign(diff2Def)==-1){
                        comp2Def.innerHTML="( "+diff2Def+" )";
                    }else{
                        comp2Def.innerHTML="( +"+diff2Def+" )";
                    }
                    diff2Spd=(torsoSpd+2)*-1;
                    if(Math.sign(diff2Spd)==-1){
                        comp2Spd.innerHTML="( "+diff2Spd+" )";
                    }else{
                        comp2Spd.innerHTML="( +"+diff2Spd+" )";
                    }
                    
                    diff3Atk=(torsoAtk-1)*-1;
                    if(Math.sign(diff3Atk)==-1){
                        comp3Atk.innerHTML="( "+diff3Atk+" )";
                    }else{
                        comp3Atk.innerHTML="( +"+diff3Atk+" )";
                    }
                    diff3Def=(torsoDef-4)*-1;
                    if(Math.sign(diff3Def)==-1){
                        comp3Def.innerHTML="( "+diff3Def+" )";
                    }else{
                        comp3Def.innerHTML="( +"+diff3Def+" )";
                    }
                    diff3Spd=(torsoSpd-0)*-1;
                    if(Math.sign(diff3Spd)==-1){
                        comp3Spd.innerHTML="( "+diff3Spd+" )";
                    }else{
                        comp3Spd.innerHTML="( +"+diff3Spd+" )";
                    }
            }
                
            }else if(positionT==-260 && positionL==534){
                //10th
                if(equipmentModal6.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-300;
                    positionL=668;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal7.classList.remove("hidden");
                    setTimeout(revealModal2,500);
                    
                    diff1Atk=(armsAtk-6)*-1;
                    if(Math.sign(diff1Atk)==-1){
                        comp1Atk.innerHTML="( "+diff1Atk+" )";
                    }else{
                        comp1Atk.innerHTML="( +"+diff1Atk+" )";
                    }
                    diff1Def=(armsDef+2)*-1;
                    if(Math.sign(diff1Def)==-1){
                        comp1Def.innerHTML="( "+diff1Def+" )";
                    }else{
                        comp1Def.innerHTML="( +"+diff1Def+" )";
                    }
                    diff1Spd=(armsSpd+1)*-1;
                    if(Math.sign(diff1Spd)==-1){
                        comp1Spd.innerHTML="( "+diff1Spd+" )";
                    }else{
                        comp1Spd.innerHTML="( +"+diff1Spd+" )";
                    }
                    
                    diff2Atk=(armsAtk-0)*-1;
                    if(Math.sign(diff2Atk)==-1){
                        comp2Atk.innerHTML="( "+diff2Atk+" )";
                    }else{
                        comp2Atk.innerHTML="( +"+diff2Atk+" )";
                    }
                    diff2Def=(armsDef+1)*-1;
                    if(Math.sign(diff2Def)==-1){
                        comp2Def.innerHTML="( "+diff2Def+" )";
                    }else{
                        comp2Def.innerHTML="( +"+diff2Def+" )";
                    }
                    diff2Spd=(armsSpd-5)*-1;
                    if(Math.sign(diff2Spd)==-1){
                        comp2Spd.innerHTML="( "+diff2Spd+" )";
                    }else{
                        comp2Spd.innerHTML="( +"+diff2Spd+" )";
                    }
                    
                    diff3Atk=(armsAtk-3)*-1;
                    if(Math.sign(diff3Atk)==-1){
                        comp3Atk.innerHTML="( "+diff3Atk+" )";
                    }else{
                        comp3Atk.innerHTML="( +"+diff3Atk+" )";
                    }
                    diff3Def=(armsDef-0)*-1;
                    if(Math.sign(diff3Def)==-1){
                        comp3Def.innerHTML="( "+diff3Def+" )";
                    }else{
                        comp3Def.innerHTML="( +"+diff3Def+" )";
                    }
                    diff3Spd=(armsSpd-2)*-1;
                    if(Math.sign(diff3Spd)==-1){
                        comp3Spd.innerHTML="( "+diff3Spd+" )";
                    }else{
                        comp3Spd.innerHTML="( +"+diff3Spd+" )";
                    }
                }
                
            }else if(positionT==-300 && positionL==668){
                //11th
                if(equipmentModal7.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-274;
                    positionL=800;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal8.classList.remove("hidden");
                    setTimeout(revealModal2,500);
                    
                    diff1Atk=(headAtk-2)*-1;
                    if(Math.sign(diff1Atk)==-1){
                        comp1Atk.innerHTML="( "+diff1Atk+" )";
                    }else{
                        comp1Atk.innerHTML="( +"+diff1Atk+" )";
                    }
                    diff1Def=(headDef-4)*-1;
                    if(Math.sign(diff1Def)==-1){
                        comp1Def.innerHTML="( "+diff1Def+" )";
                    }else{
                        comp1Def.innerHTML="( +"+diff1Def+" )";
                    }
                    diff1Spd=(headSpd+1)*-1;
                    if(Math.sign(diff1Spd)==-1){
                        comp1Spd.innerHTML="( "+diff1Spd+" )";
                    }else{
                        comp1Spd.innerHTML="( +"+diff1Spd+" )";
                    }
                    
                    diff2Atk=(headAtk-3)*-1;
                    if(Math.sign(diff2Atk)==-1){
                        comp2Atk.innerHTML="( "+diff2Atk+" )";
                    }else{
                        comp2Atk.innerHTML="( +"+diff2Atk+" )";
                    }
                    diff2Def=(headDef-0)*-1;
                    if(Math.sign(diff2Def)==-1){
                        comp2Def.innerHTML="( "+diff2Def+" )";
                    }else{
                        comp2Def.innerHTML="( +"+diff2Def+" )";
                    }
                    diff2Spd=(headSpd-2)*-1;
                    if(Math.sign(diff2Spd)==-1){
                        comp2Spd.innerHTML="( "+diff2Spd+" )";
                    }else{
                        comp2Spd.innerHTML="( +"+diff2Spd+" )";
                    }
                    
                    diff3Atk=(headAtk-4)*-1;
                    if(Math.sign(diff3Atk)==-1){
                        comp3Atk.innerHTML="( "+diff3Atk+" )";
                    }else{
                        comp3Atk.innerHTML="( +"+diff3Atk+" )";
                    }
                    diff3Def=(headDef-2)*-1;
                    if(Math.sign(diff3Def)==-1){
                        comp3Def.innerHTML="( "+diff3Def+" )";
                    }else{
                        comp3Def.innerHTML="( +"+diff3Def+" )";
                    }
                    diff3Spd=(headSpd+2)*-1;
                    if(Math.sign(diff3Spd)==-1){
                        comp3Spd.innerHTML="( "+diff3Spd+" )";
                    }else{
                        comp3Spd.innerHTML="( +"+diff3Spd+" )";
                    }
                }
                
            }else if(positionT==-274 && positionL==800){
                //12th
                if(equipmentModal8.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-300;
                    positionL=907;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    xAtk.innerHTML=playerAtk;
                    xDef.innerHTML=playerDef;
                    xSpd.innerHTML=playerSpd;
                    xHlth.innerHTML=playerHlth;
                    
                    battleEnemy.src="images/dinosaurs/enemy-yellow.png";
                    enemyAtk=20;
                    enemyDef=8;
                    enemySpd=5;
                    enemyHlth=50;
                    yAtk.innerHTML=enemyAtk;
                    yDef.innerHTML=enemyDef;
                    ySpd.innerHTML=enemySpd;
                    yHlth.innerHTML=enemyHlth;
                    
                    battleModal.classList.remove("hidden");
                    setTimeout(revealBattle,500);
                }
                
            }else if(positionT==-300 && positionL==907){
                //13th
                if(battleModal.style.opacity==1){
                    console.log("no")
                }else{
                    positionT=-400;
                    positionL=954;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal9.classList.remove("hidden");
                    setTimeout(revealModal2,500);
                    
                    diff1Atk=(tailAtk-2)*-1;
                    if(Math.sign(diff1Atk)==-1){
                        comp1Atk.innerHTML="( "+diff1Atk+" )";
                    }else{
                        comp1Atk.innerHTML="( +"+diff1Atk+" )";
                    }
                    diff1Def=(tailDef+1)*-1;
                    if(Math.sign(diff1Def)==-1){
                        comp1Def.innerHTML="( "+diff1Def+" )";
                    }else{
                        comp1Def.innerHTML="( +"+diff1Def+" )";
                    }
                    diff1Spd=(tailSpd-4)*-1;
                    if(Math.sign(diff1Spd)==-1){
                        comp1Spd.innerHTML="( "+diff1Spd+" )";
                    }else{
                        comp1Spd.innerHTML="( +"+diff1Spd+" )";
                    }
                    
                    diff2Atk=(tailAtk-4)*-1;
                    if(Math.sign(diff2Atk)==-1){
                        comp2Atk.innerHTML="( "+diff2Atk+" )";
                    }else{
                        comp2Atk.innerHTML="( +"+diff2Atk+" )";
                    }
                    diff2Def=(tailDef-4)*-1;
                    if(Math.sign(diff2Def)==-1){
                        comp2Def.innerHTML="( "+diff2Def+" )";
                    }else{
                        comp2Def.innerHTML="( +"+diff2Def+" )";
                    }
                    diff2Spd=(tailSpd+3)*-1;
                    if(Math.sign(diff2Spd)==-1){
                        comp2Spd.innerHTML="( "+diff2Spd+" )";
                    }else{
                        comp2Spd.innerHTML="( +"+diff2Spd+" )";
                    }
                    
                    diff3Atk=(tailAtk-6)*-1;
                    if(Math.sign(diff3Atk)==-1){
                        comp3Atk.innerHTML="( "+diff3Atk+" )";
                    }else{
                        comp3Atk.innerHTML="( +"+diff3Atk+" )";
                    }
                    diff3Def=(tailDef-2)*-1;
                    if(Math.sign(diff3Def)==-1){
                        comp3Def.innerHTML="( "+diff3Def+" )";
                    }else{
                        comp3Def.innerHTML="( +"+diff3Def+" )";
                    }
                    diff3Spd=(tailSpd+2)*-1;
                    if(Math.sign(diff3Spd)==-1){
                        comp3Spd.innerHTML="( "+diff3Spd+" )";
                    }else{
                        comp3Spd.innerHTML="( +"+diff3Spd+" )";
                    }
                }
                
            }else if(positionT==-400 && positionL==954){
                //14th
                if(equipmentModal9.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-518;
                    positionL=908;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    equipmentModal10.classList.remove("hidden");
                    setTimeout(revealModal2,500);
                    
                    diff1Atk=(legsAtk-1)*-1;
                    if(Math.sign(diff1Atk)==-1){
                        comp1Atk.innerHTML="( "+diff1Atk+" )";
                    }else{
                        comp1Atk.innerHTML="( +"+diff1Atk+" )";
                    }
                    diff1Def=(legsDef-5)*-1;
                    if(Math.sign(diff1Def)==-1){
                        comp1Def.innerHTML="( "+diff1Def+" )";
                    }else{
                        comp1Def.innerHTML="( +"+diff1Def+" )";
                    }
                    diff1Spd=(legsSpd+1)*-1;
                    if(Math.sign(diff1Spd)==-1){
                        comp1Spd.innerHTML="( "+diff1Spd+" )";
                    }else{
                        comp1Spd.innerHTML="( +"+diff1Spd+" )";
                    }
                    
                    diff2Atk=(legsAtk-0)*-1;
                    if(Math.sign(diff2Atk)==-1){
                        comp2Atk.innerHTML="( "+diff2Atk+" )";
                    }else{
                        comp2Atk.innerHTML="( +"+diff2Atk+" )";
                    }
                    diff2Def=(legsDef-0)*-1;
                    if(Math.sign(diff2Def)==-1){
                        comp2Def.innerHTML="( "+diff2Def+" )";
                    }else{
                        comp2Def.innerHTML="( +"+diff2Def+" )";
                    }
                    diff2Spd=(legsSpd-6)*-1;
                    if(Math.sign(diff2Spd)==-1){
                        comp2Spd.innerHTML="( "+diff2Spd+" )";
                    }else{
                        comp2Spd.innerHTML="( +"+diff2Spd+" )";
                    }
                    
                    diff3Atk=(legsAtk-4)*-1;
                    if(Math.sign(diff3Atk)==-1){
                        comp3Atk.innerHTML="( "+diff3Atk+" )";
                    }else{
                        comp3Atk.innerHTML="( +"+diff3Atk+" )";
                    }
                    diff3Def=(legsDef-1)*-1;
                    if(Math.sign(diff3Def)==-1){
                        comp3Def.innerHTML="( "+diff3Def+" )";
                    }else{
                        comp3Def.innerHTML="( +"+diff3Def+" )";
                    }
                    diff3Spd=(legsSpd-0)*-1;
                    if(Math.sign(diff3Spd)==-1){
                        comp3Spd.innerHTML="( "+diff3Spd+" )";
                    }else{
                        comp3Spd.innerHTML="( +"+diff3Spd+" )";
                    }
                }
                
            }else if(positionT==-518 && positionL==908){
                //Boss
                if(equipmentModal10.style.opacity==1){
                    console.log('no');
                }else{
                    positionT=-620;
                    positionL=880;
                    playerIcon.style.top=positionT+"px";
                    playerIcon.style.left=positionL+"px";
                    
                    xAtk.innerHTML=playerAtk;
                    xDef.innerHTML=playerDef;
                    xSpd.innerHTML=playerSpd;
                    xHlth.innerHTML=playerHlth;
                    
                    battleEnemy.src="images/dinosaurs/enemy-red.png";
                    enemyAtk=24;
                    enemyDef=11;
                    enemySpd=10;
                    enemyHlth=50;
                    yAtk.innerHTML=enemyAtk;
                    yDef.innerHTML=enemyDef;
                    ySpd.innerHTML=enemySpd;
                    yHlth.innerHTML=enemyHlth;
                    
                    battleModal.classList.remove("hidden");
                    setTimeout(revealBattle,500);
                }
            }
        }else{
            console.log("no");
        }
    }
});