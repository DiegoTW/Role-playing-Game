function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(()=> Math.floor(Math.random() * 6) + 1);
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill('').map(function() {
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

function getPercentage(remainingHealth, maximumHealth) {
    return (100 * remainingHealth) / maximumHealth
}

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}