function hideFinale(){
    finale.classList.add("hidden");
}
function finaleFade(){
    finale.style.opacity=0;
    setTimeout(hideFinale,1001);
}
function showDress(){
    dressup.style.opacity=1;
}
function dressFade(){
    dressup.classList.remove("hidden");
    setTimeout(showDress,1);
}

bonusBtn.addEventListener('click', function(){
    finaleFade();
    setTimeout(dressFade,1250);
})

btnDome.addEventListener('click', function(){
    dome.classList.toggle("hidden");
    beak.classList.add("hidden");
    spikes.classList.add("hidden");
})
btnBeak.addEventListener('click', function(){
    dome.classList.add("hidden");
    beak.classList.toggle("hidden");
    spikes.classList.add("hidden");
})
btnSpikes.addEventListener('click', function(){
    dome.classList.add("hidden");
    beak.classList.add("hidden");
    spikes.classList.toggle("hidden");
})

btnScythe.addEventListener('click', function(){
    scythe.classList.toggle("hidden");
    pinion.classList.add("hidden");
    claws.classList.add("hidden");
})
btnPinion.addEventListener('click', function(){
    scythe.classList.add("hidden");
    pinion.classList.toggle("hidden");
    claws.classList.add("hidden");
})
btnClaws.addEventListener('click', function(){
    scythe.classList.add("hidden");
    pinion.classList.add("hidden");
    claws.classList.toggle("hidden");
})

btnSail.addEventListener('click', function(){
    sail.classList.toggle("hidden");
    armour.classList.add("hidden");
    dermal.classList.add("hidden");
})
btnArmour.addEventListener('click', function(){
    sail.classList.add("hidden");
    armour.classList.toggle("hidden");
    dermal.classList.add("hidden");
})
btnPlates.addEventListener('click', function(){
    sail.classList.add("hidden");
    armour.classList.add("hidden");
    dermal.classList.toggle("hidden");
})

btnSprint.addEventListener('click', function(){
    sprint.classList.toggle("hidden");
    bracer.classList.add("hidden");
    talon.classList.add("hidden");
})
btnBrace.addEventListener('click', function(){
    sprint.classList.add("hidden");
    bracer.classList.toggle("hidden");
    talon.classList.add("hidden");
})
btnTalon.addEventListener('click', function(){
    sprint.classList.add("hidden");
    bracer.classList.add("hidden");
    talon.classList.toggle("hidden");
})

btnClub.addEventListener('click', function(){
    club.classList.toggle("hidden");
    feather.classList.add("hidden");
    thags.classList.add("hidden");
})
btnFeather.addEventListener('click', function(){
    club.classList.add("hidden");
    feather.classList.toggle("hidden");
    thags.classList.add("hidden");
})
btnThag.addEventListener('click', function(){
    club.classList.add("hidden");
    feather.classList.add("hidden");
    thags.classList.toggle("hidden");
})