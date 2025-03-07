/* script for starting with paused animated gifs */
 // JavaScript code to toggle between animated and paused GIFs 
    const gif = document.getElementById("gif"); 
    const pausedGif = document.getElementById("paused-gif"); 
    const pauseButton = document.getElementById("pauseButton"); 
 
    let isPaused = false; 
 
    pauseButton.addEventListener("click", function () { 
      if (isPaused) { 
        gif.style.display = "block"; 
        pausedGif.style.display = "none"; 
        pauseButton.innerText = "Pause"; 
        isPaused = false; 
      } else { 
        gif.style.display = "none"; 
        pausedGif.style.display = "block"; 
        pauseButton.innerText = "Play"; 
        isPaused = true; 
      } 
    });