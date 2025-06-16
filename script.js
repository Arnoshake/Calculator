
let startButton = document.querySelector("#start");
startButton.addEventListener("click", ()=> {
    window.open(
        "calcWindow.html",
        "popupWindow",
        "width=400,height=600"
    );
});

