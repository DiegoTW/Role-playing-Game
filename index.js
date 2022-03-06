const heroData = {
    elementId: 'hero',
    name: 'Wizard',
    avatar: './images/wizard.png',
    health: 60,
    diceCount: 3
}

const monsterData = {
    elementId: 'monster',
    name: 'Orc',
    avatar: './images/orc.png',
    health: 10,
    diceCount: 3
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map((num)=> `
    <div class="dice">${num}</div>
    `).join('')
}

function getDiceRollArray(diceCount) {
    let diceRoll = new Array(diceCount).fill(0).map(()=> Math.floor(Math.random() * 6) + 1);
    return diceRoll
}

function renderCharacter(data) {
    const {elementId, name, avatar, health, diceCount} = data
    const diceHtml = getDiceHtml(diceCount)
    
    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name}</h4> </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b> </b></p>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>
    `
}
 
renderCharacter(heroData)
renderCharacter(monsterData)