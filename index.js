var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kickbass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");

drums = document.querySelectorAll(".drum");

function drumSounds(key) {
    switch(key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play()
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            crash.play();
            break;
        case "k":
            kickbass.play();
            break;
        case "l":
            snare.play();
            break;
        default:
            console.log("ERROR: Hit default statement. Should not be here");
    }
}

function buttonAnimation(key) {
    var button = document.querySelector("."+key);
    button.classList.toggle("pressed");
    setTimeout(function(){button.classList.toggle("pressed");}, 100);
}

for(drum of drums) {
    drum.addEventListener("click", function() {
        buttonAnimation(this.innerHTML);
        drumSounds(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    buttonAnimation(event.key);
    drumSounds(event.key);
})