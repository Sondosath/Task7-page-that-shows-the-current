// c:/JoVision/index.js

const name = document.querySelector(".name")

function CountingFunction(){
    numbers = [] 
    sum = 0
    for (let i = 0; i < 101; i++) {
        numbers.push(i)
        if (i % 2 == 0) {
            sum += i
        }
        
    }
    
    alert ("The sum of all even numbers is " + sum)
}