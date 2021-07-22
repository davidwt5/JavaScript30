const topLevelElement = document.documentElement;
const keys = document.querySelectorAll(".key");

// Handles what happens when a key is activated
function drumKeyHandler(key) {
    // Finds the audio element with a data-key attribute matching the clicked key
    // Example css selector: audio[data-key="75"]
    const audio = document.querySelector(
        `audio[data-key="${key.getAttribute("data-key")}"]`
    );
    audio.play();

    // Sets the state of the key to 'playing' and removes said state after X ms.
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing");
    }, 50);
}

// Attaches an event listener to the document element which activates the corresponding key
// If a matching keyboard trigger is pressed
topLevelElement.addEventListener("keydown", (e) => {
    // e.code examples: KeyA, KeyS, KeyL...
    keys.forEach((key) => { 
        const keyboardTrigger = "Key" + key.firstElementChild.textContent;
        if(keyboardTrigger === e.code)
            drumKeyHandler(key);
    });
});
