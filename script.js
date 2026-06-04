const scenes = document.querySelectorAll('.scene');
const nextButtons = document.querySelectorAll('.nextBtn');
const backButtons = document.querySelectorAll('.backBtn');

const startBtn = document.getElementById('startBtn');
const music = document.getElementById('bgMusic');

let currentScene = 0;

function showScene(index){

    scenes.forEach(scene=>{
        scene.classList.remove('active');
    });

    scenes[index].classList.add('active');

    const activeScene = scenes[index];

   window.scrollTo({
    top:0,
    behavior:'instant'
});

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

}

startBtn.addEventListener('click',()=>{

    music.volume = 0.5;

    music.play().catch(()=>{
        console.log('Music blocked');
    });

    currentScene = 1;

    showScene(currentScene);

});

nextButtons.forEach(button=>{

    button.addEventListener('click',()=>{

        if(currentScene < scenes.length - 1){

            currentScene++;

            showScene(currentScene);

        }

    });

});

backButtons.forEach(button=>{

    button.addEventListener('click',()=>{

        if(currentScene > 0){

            currentScene--;

            showScene(currentScene);

        }

    });

});

document.addEventListener('keydown',(e)=>{

    if(e.key === 'ArrowRight'){

        if(currentScene < scenes.length - 1){

            currentScene++;

            showScene(currentScene);

        }

    }

    if(e.key === 'ArrowLeft'){

        if(currentScene > 0){

            currentScene--;

            showScene(currentScene);

        }

    }

});
