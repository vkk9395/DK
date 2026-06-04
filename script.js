const scenes = document.querySelectorAll('.scene');
const nextButtons = document.querySelectorAll('.nextBtn');
const startBtn = document.getElementById('startBtn');
const music = document.getElementById('bgMusic');

let currentScene = 0;

// Show scene function

function showScene(index) {

    scenes.forEach(scene => {
        scene.classList.remove('active');
    });

    scenes[index].classList.add('active');

}

// Start story

startBtn.addEventListener('click', () => {

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Autoplay blocked until interaction.");
    });

    currentScene = 1;

    showScene(currentScene);

});

// Next buttons

nextButtons.forEach(button => {

    button.addEventListener('click', () => {

        currentScene++;

        if (currentScene < scenes.length) {

            showScene(currentScene);

        }

    });

});

// Optional keyboard support

document.addEventListener('keydown', (e) => {

    if (e.key === 'ArrowRight') {

        currentScene++;

        if (currentScene < scenes.length) {

            showScene(currentScene);

        }

    }

});

// Mobile tap anywhere support

document.addEventListener('dblclick', () => {

    if (currentScene < scenes.length - 1) {

        currentScene++;

        showScene(currentScene);

    }

});
