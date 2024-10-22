// c:/JoVision/index.js

const name = document.querySelector(".name")

function CountingFunction(){
    numbers = [] 
    total = 0
    for (let i = 0; i < 101; i++) {
        numbers.push(i)
        total = total + numbers[i]
    }
    
    alert ("The total is " + total)
}