const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index){

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    scenes[index].classList.add("active");

}

const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

    alert("Moving to Scene 1");

    currentScene = 1;

    showScene(currentScene);

});
