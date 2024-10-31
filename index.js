function sendName() {
    const nameValue = document.getElementById('name').value;
    const url = `https://api.agify.io/?name=${nameValue}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); 
        })
        .then(data => {
            document.getElementById('popup-content').innerText = `Your name is: ${data.name}\nYour age is: ${data.age}`;
            openPopup();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
