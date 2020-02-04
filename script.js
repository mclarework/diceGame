let score = document.getElementsByTagName("p")[1]
let roll = document.getElementsByTagName("p")[2]
let button = document.getElementById("roller")
let reset = document.getElementById("reset")
let dice = document.getElementById("dice")
let current = 0

document.addEventListener("click",(event)=> {
    if (event.target == button) {
        let num = Math.ceil(Math.random()*6)
        current+=num
        score.textContent = `Your current score is ${current}`
        switch (true) {
            case num == 1:
                roll.textContent = `You rolled a one! You lose. Better luck next time`
                button.style.display = "none"
                reset.style.display = "inline"
                dice.style.backgroundImage = "img/dice1.png"
                break
            case num == 2:
                roll.textContent = `You rolled a two!`
                break
            case num == 3:
                roll.textContent = `You rolled a three!`
                break
            case num == 4:
                roll.textContent = `You rolled a four!`
                break
            case num == 5:
                roll.textContent = `You rolled a five!`
                break
            case num == 6:
                roll.textContent = `You rolled a six!`
                break
        }
    }
    if (current >= 20) {
        roll.textContent = `Congratulations! You have won with a score of ${current}.`
        button.style.display = "none"
        reset.style.display = "inline"
    }
})

document.addEventListener("click",(event)=>{
    if (event.target == reset) {
       window.location.reload(true)
    }
})