let score = document.getElementsByTagName("p")[1]
let roll = document.getElementsByTagName("p")[2]
let roller = document.getElementById("roller")
let reset = document.getElementById("reset")
let cube = document.getElementsByClassName("cube")
let rolledDice = document.getElementsByClassName("die-item")
let current = 0


document.addEventListener("click",(event)=> {
    let num = Math.ceil(Math.random() * 6)
    cube[0].style.display = "block"
    if (event.target == roller) {
        current+=num
        score.textContent = `Your current score is ${current}`
        switch (true) {
            case num == 1:
                cube[0].style.transform = "rotateY(15deg) rotateX(15deg)"
                roll.textContent = `You rolled a one! You lose. Better luck next time`
                roller.style.display = "none"
                reset.style.display = "inline"
                break
            case num == 2:
                cube[0].style.transform = "rotateY(-75deg) rotateX(15deg)"
                roll.textContent = `You rolled a two!`
                break
            case num == 3:
                cube[0].style.transform = "rotateX(-75deg) rotateY(15deg)"
                roll.textContent = `You rolled a three!`
                break
            case num == 4:
                cube[0].style.transform = "rotateX(105deg) rotateY(15deg)"
                roll.textContent = `You rolled a four!`
                break
            case num == 5:
                cube[0].style.transform = "rotateY(105deg) rotateX(15deg)"
                roll.textContent = `You rolled a five!`
                break
            case num == 6:
                cube[0].style.transform = "rotateY(195deg) rotateX(15deg)"
                roll.textContent = `You rolled a six!`
                break
        }
    }
    if (current >= 20) {
        roll.textContent = `Congratulations! You have won with a score of ${current}.`
        roller.style.display = "none"
        reset.style.display = "inline"
    }
    roller.disabled = "true"
    roller.style.backgroundColor = "grey"
    setTimeout(()=>{roller.disabled = "";roller.style.backgroundColor = "black"},1500); 
})

document.addEventListener("click",(event)=>{
    if (event.target == reset) {
       window.location.reload(true)
    }
})