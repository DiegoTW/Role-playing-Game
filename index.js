import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.heroData)
const orc = new Character(characterData.monsterData)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()