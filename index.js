// c:/JoVision/index.js

const name = document.querySelector(".name")

//this function create an array of all the numbers between 0, 100 and print the sum of only the even numbers
function CountingFunction(){

    numbers = [] 
    sum = 0


    for (let i = 0; i < 101; i++) {

        numbers.push(i)

        if (i % 2 == 0){
            sum = sum + numbers[i]
        }
    }
    
    alert ("the sum of only the even numbers is " + sum)
}