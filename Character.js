import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
        this.maxHealth = this.health
    }
    setDiceHtml() {
        this.currenDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currenDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }

    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, hit) => total + hit)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.dead = true
        }
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>
        `
    }

    getCharacterHtml() {
        const { name, avatar, health, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <div class="img-container">
                    <img class="avatar" src="${avatar}"/>
                </div>
                <p class="health"><span>health:</span> <b> ${health} </b></p>
                    ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>
        `
    }

    getCharacterHtmlRestart() {
        const { name, avatar, health, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name}</h4> </h4>
                <div class="img-container">
                    <img class="avatar" src="${avatar}"/>
                </div>
                <p class="health"><span>health:</span> <b> ${health} </b></p>
                    ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>
        `
    }
    
}

export default Character