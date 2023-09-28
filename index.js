function saturdayFun(activty = 'roller-skate'){
    if (typeof saturdayFun === 'function') {
        return `This Saturday, I want to ${activty}!`;
    }
}

function mondayWork(activty = 'go to the office') {
    if (typeof mondayWork === 'function') {
        return `This Monday, I will ${activty}.`
    }
}

function wrapAdjective(flair = "*"){
    if (typeof wrapAdjective === 'function');
    return function (wrapAdjective = "special") {
        return `You are ${flair}${wrapAdjective}${flair}!`
    }
}