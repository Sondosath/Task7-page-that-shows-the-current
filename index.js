// c:/JoVision/index.js

const name = document.querySelector(".name")

function getIp() {
    fetch('https://api.ipify.org/') 
    .then(response => response.text()) 
    .then(ip => {
        console.log(ip);  
        name.textContent = `Your IP address is: ${ip}`; 

    })
    .catch(error => console.error('Error:', error));

    
}
