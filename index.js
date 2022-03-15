import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
    if(!isWaiting) {
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currenDiceScore)
        monster.takeDamage(wizard.currenDiceScore)
        render()

        if (wizard.dead) {
            endGame()
        } else if (monster.dead) {
            isWaiting = true
            if(monstersArray.length > 0) {
                setTimeout(()=> {
                    monster = getNewMonster()
                    monster.setDiceHtml()  
                    render()
                    isWaiting = false
                }, 1500)

            } else {
                endGame()
            }
        }
    }
}

function endGame() {
    isWaiting = true
    const endMessage = monster.health === 0 && wizard.health === 0 ?
        `No victors - All creatures are dead!`
        : wizard.health > 0 ? `The ${wizard.name} is Victorious!`
        : `The monsters Wins!`

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

    setTimeout(()=> {
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>`
    }, 1510)
}

document.getElementById('attack-button').addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

let monster = getNewMonster()
render()


// Agregue un array llamado getNewMonster(), modifique la funcion attack() para 
// que renderize los nuevos monsters, agregue dos nuevos monsters y 
// modifique todos los lugares donde la palabra orc estaba y la remplace
// por la nueva funcion creada getNewMonster(), agregue la funcion setTimeout()
// para que haya un delay entre un monster y el siguiente ademas del mensaje
// final que tambien tiene un delay
