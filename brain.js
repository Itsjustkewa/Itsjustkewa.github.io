const dynamicText = document.querySelector("h1 span");
const words = ["itsjustkewa", "'Kewa", "Freaking Awesome"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

let heroWords= 'I\'m passionate about game development and game audio and spent a while working as an audio designer in small indie teams.' + 
'<br> <br> I respect audio immersion in games and approach it technically and creatively. I enjoy scripting and creating audio with the input of the team in projects because I think it\'s important for the team to weigh in on the creative process.'+
'<br> Also a huge Marvel Fan (I love DC too, but shh).'+
'<br> <br> Love to just chat, might make my day and maybe yours';

document.getElementById("HeroPage").innerHTML = heroWords;