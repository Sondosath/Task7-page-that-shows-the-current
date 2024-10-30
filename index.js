// c:/JoVision/index.js

function submitting() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const timestamp = new Date().toLocaleString();

    const user = {
        name,
        age,
        timestamp
    };

    const { name: userName, age: userAge, timestamp: userTimestamp } = user;
    alert(`Your name is: ${userName}\nYour age is: ${userAge}\nTimestamp: ${userTimestamp}`);
}
