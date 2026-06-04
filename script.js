document.addEventListener("DOMContentLoaded", function () {

```
const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", function () {

    document.querySelectorAll(".scene")
        .forEach(scene => {
            scene.classList.remove("active");
        });

    document
        .getElementById("scene1")
        .classList.add("active");

});
```

});
