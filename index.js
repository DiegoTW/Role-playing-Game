import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.heroData)
const orc = new Character(characterData.monsterData)

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currenDiceScore)
    orc.takeDamage(wizard.currenDiceScore)
    render()
    if(wizard.dead || orc.dead) {
        endGame()
    }
}

function endGame() {
    const endMessage = orc.health === 0 && wizard.health === 0 ?
        `No victors - The ${wizard.name} and ${orc.name} are dead!`
        : wizard.health > 0 ? `The ${wizard.name} Wins!`
        : `The ${orc.name} Wins!`
    const endEmoji = orc.health === 0 && wizard.health === 0 ?
        "☠️"
        : wizard.health > 0 ? "🔮"
        : "☠️"
    document.body.innerHTML = 
    `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>`
}

document.getElementById('attack-button').addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}


render()
