// c:/JoVision/index.js

const name = document.querySelector(".name")

    //this function an array of all the numbers between 0 to 100, Removes the numbers that are divisible by 3 from the array and prints it in the console

function RemoveDivisibleBy3(){
    numbers = [] 
    for (let i = 0; i < 101; i++) {
        
        if (i % 3 != 0) {
            numbers.push(i)
        }
        
    }
    
    console.log(numbers)
}


//this function creates an array of all the numbers between 0 to 100, Adds the numbers from 100 to 150 to the array and prints them in the console

function AddNumbers(){
    numbers = [] 
    for (let i = 0; i < 101; i++) {
        
        numbers.push(i)

    }
    
    for (let i = 100; i < 151; i++) {
        numbers.push(i)
    }
    
    console.log(numbers)
    }


    //this function creates an array of all the numbers between 0 to 100, Adds 3 to each array member and print it in the console

function Add3toEach(){
    numbers = []

    for (let i = 0; i < 101; i++) {
        numbers.push(i + 3)
    }
    
    console.log(numbers)
 }

 //this function creates an array of all the numbers between 0 to 100, Then prints the members from index 20 to 40 in the console

function printFromIndex20(){
    numbers = []
    for (let i = 0; i < 101; i++) {
        numbers.push(i)
    }
    console.log(numbers.slice(20, 41))
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    
    //this function create an array of all the numbers between 0 to 100, Shuffle the members of the array using the function provided to you in the hints, 
    //prints the shuffled array in the console, sorts it in descending order and prints in again

function Shuffle(){
    numbers = []
    for (let i = 0; i < 101; i++) {
        numbers.push(i)
    }
    shuffleArray(numbers)
    console.log(numbers)
    numbers.sort();
    numbers.reverse();
    console.log(numbers)


}