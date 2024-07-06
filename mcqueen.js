let buttonYes = document.getElementById("yes");
let buttonNo = document.getElementById("no");

let loveAudio = new Audio('https://www.myinstants.com/media/sounds/careless_whispers.mp3');

buttonYes.addEventListener("click", function() {
    document.getElementById("question").textContent = "KAÇOVVVVVV";
    document.getElementById("mcqueen").src = "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-17ohmzf_d340a6bd.jpeg";
    
    buttonYes.style.visibility = 'hidden';
    buttonNo.style.visibility = 'hidden';

    createHearts();
    loveAudio.play();
});

document.getElementById("no").addEventListener("mouseover", function() {
    var button = document.getElementById("no");
    var container = document.querySelector(".container");
    var containerRect = container.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();

    var newTop = Math.random() * (containerRect.height - buttonRect.height);
    var newLeft = Math.random() * (containerRect.width - buttonRect.width);

    button.style.position = "absolute";
    button.style.top = newTop + "px";
    button.style.left = newLeft + "px";
});

function createHearts() {
    const container = document.getElementById("hearts-container");

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "%";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}
