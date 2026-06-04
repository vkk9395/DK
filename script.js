document.addEventListener("DOMContentLoaded", function () {

```
const scenes =
    document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index) {

    scenes.forEach(scene => {

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

    currentScene = index;
}

showScene(0);

const beginBtn =
    document.getElementById("beginBtn");

const bgMusic =
    document.getElementById("bgMusic");

if (beginBtn) {

    beginBtn.addEventListener("click", function () {

        if (bgMusic) {

            bgMusic.volume = 0.5;

            bgMusic.play().catch(() => {});

        }

        showScene(1);

    });

}

document
    .querySelectorAll(".nextBtn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            if (
                currentScene <
                scenes.length - 1
            ) {

                showScene(
                    currentScene + 1
                );

            }

        });

    });

document
    .querySelectorAll(".prevBtn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            if (currentScene > 0) {

                showScene(
                    currentScene - 1
                );

            }

        });

    });
```

});
