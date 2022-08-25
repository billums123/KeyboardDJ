document.addEventListener('DOMContentLoaded', () => {

    //create backtrack tag
    let backTrack = document.createElement("audio");
    backTrack.setAttribute("loop", "loop");
    backTrack.setAttribute("autoplay", "autoplay");
    backTrack.volume = 0.5;
    
    //create soundeffect tag;
    let soundEffect = document.createElement("audio")
    soundEffect.setAttribute("autoplay", "autoplay");
    soundEffect.volume = 1;

    //changing background color;
    const setBg = () => {
        //produce a random hexadecimal color between 0 and 255^3 
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("test").style.backgroundColor = "#" + randomColor + "40";
      }

    //DRY method; 
      const updateAudioAndVideo = (audioSrc) => {
        backTrack.setAttribute("src", `./assets/${audioSrc}.wav`); 
        setBg();
      }

      const updateSingleAudio = (audioSrc) => {
        soundEffect.setAttribute("src", `./assets/${audioSrc}.wav`)
        setBg();
      }

    const body = document.querySelector('body');
    body.addEventListener('keydown', (e) => {
        switch(e.code){
            case "KeyJ":
                updateAudioAndVideo("track3");
                break;
            case "KeyK":
                updateAudioAndVideo("track4");
                break;
            case "KeyQ":
                backTrack.pause();
                break;
            
            //Non looping sounds
            case "KeyA":
                updateSingleAudio("bassDrum")
                break;
            case "KeyS":
                updateSingleAudio("closedHiHat")
                break;
            case "KeyD":
                updateSingleAudio("snare")
                break;

        }

    })


})