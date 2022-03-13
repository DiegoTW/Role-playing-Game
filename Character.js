import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.maxHealth = this.health

    this.getDiceHtml = () => {
        this.currenDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currenDiceScore.map(num =>
            `<div class="dice">${num}</div>`).join('')
    }

    this.takeDamage = attackScoreArray => {
        const totalAttackScore = attackScoreArray.reduce((total, hit) => total + hit)
        this.health -= totalAttackScore
        if(this.health <= 0) {
            this.health = 0
            this.dead = true
        }
  
    }

    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                style="width: ${percent}%;">
            </div>
        </div>`
    }

    this.getCharacterHtml = () => {
        const {name, avatar, health, diceArray} = this
        const healthBar = this.getHealthBarHtml()    
        return `
        <div class="character-card">
            <h4 class="name"> ${name}</h4> </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health}</b> </b></p>
                ${healthBar}
            <div class="dice-container">
                ${diceArray}
            </div>
        </div>
        `
    }
}

export default Character