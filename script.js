const scenes = document.querySelectorAll(".scene");

const beginBtn = document.getElementById("beginBtn");

const bgMusic = document.getElementById("bgMusic");

const nextButtons = document.querySelectorAll(".nextBtn");

const prevButtons = document.querySelectorAll(".prevBtn");

let currentScene = 0;

/* ------------------------ */
/* SHOW SCENE */
/* ------------------------ */

function showScene(index){

    scenes.forEach(scene => {

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

}

/* ------------------------ */
/* BEGIN STORY */
/* ------------------------ */

if(beginBtn){

    beginBtn.addEventListener("click", () => {

        bgMusic.volume = 0.55;

        bgMusic.play().catch(err => {

            console.log("Music blocked:", err);

        });

        currentScene = 1;

        showScene(currentScene);

    });

}

/* ------------------------ */
/* NEXT BUTTONS */
/* ------------------------ */

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(currentScene < scenes.length - 1){

            currentScene++;

            showScene(currentScene);

        }

    });

});

/* ------------------------ */
/* PREVIOUS BUTTONS */
/* ------------------------ */

prevButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(currentScene > 0){

            currentScene--;

            showScene(currentScene);

        }

    });

});

/* ------------------------ */
/* KEYBOARD SUPPORT */
/* ------------------------ */

document.addEventListener("keydown", (event) => {

    if(event.key === "ArrowRight"){

        if(currentScene < scenes.length - 1){

            currentScene++;

            showScene(currentScene);

        }

    }

    if(event.key === "ArrowLeft"){

        if(currentScene > 0){

            currentScene--;

            showScene(currentScene);

        }

    }

});

/* ------------------------ */
/* DOUBLE TAP MOBILE */
/* ------------------------ */

let lastTap = 0;

document.addEventListener("touchend", function(event){

    let currentTime = new Date().getTime();

    let tapLength = currentTime - lastTap;

    if(tapLength < 300 && tapLength > 0){

        if(currentScene < scenes.length - 1){

            currentScene++;

            showScene(currentScene);

        }

    }

    lastTap = currentTime;

});

/* ------------------------ */
/* PRELOAD IMAGES */
/* ------------------------ */

const preloadImages = [

    "assets/first-chat.jpg",
    "assets/hand.jpg"

];

preloadImages.forEach(src => {

    const img = new Image();

    img.src = src;

});

/* ------------------------ */
/* INITIAL SCENE */
/* ------------------------ */

showScene(0);
