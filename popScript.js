function createWindow() {
    let popUpWindow = window.open(
        "calcWindow.html",   // URL to open
        "popupWindow",           // Name of the window
        "width=400,height=300"   // Window features
    );
    popUpWindow.onload = () => { this.populateWindow(popUpWindow.document); };
};
function populateWindow(doc) {
    let container = doc.createElement("div");
    container.classList.add("container");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    doc.body.appendChild(container);

    let displayBar = doc.createElement("div");
    displayBar.classList.add("displayBar");
    displayBar.textContent = "DISPLAY"
    displayBar.style.display = "flex";

    container.appendChild(displayBar);
    for (let i = 1; i < 6; i++) { //5 rows
        let row = doc.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";

        // for (let j = 1; j < 5; j++) { // 4 buttoons per row
        //     let button = doc.createElement("button");
        //     row.appendChild(button);
        // }

        container.appendChild(row);
    };

    createButtons();
}
function createButtons(){
    

    let rows = document.querySelectorAll(".row");
    
    // ===== ROW 1 ===== //
    let AC = document.createElement("button");
    AC.textContent = "AC";
    AC.classList.add ("clear");
    AC.addEventListener("click", () => {
        console.log("Clear clicked");
    })

    rows[0].appendChild(AC);

    let sign = document.createElement("button");
    sign.textContent = "+/-";
    sign.classList.add ("sign");


    rows[0].appendChild(sign);

    let percent = document.createElement("button");
    percent.textContent = "%";
    percent.classList.add ("percent");


    rows[0].appendChild(percent);

    let division = document.createElement("button");
    division.textContent = "/";
    division.classList.add ("divide");
    division.classList.add ("operator");


    rows[0].appendChild(division);

    // ===== ROW 2 ===== //

    let seven = document.createElement("button");
    seven.textContent = "7";
    seven.classList.add ("number");
    rows[1].appendChild(seven);

    let eight = document.createElement("button");
    eight.textContent = "8";
    eight.classList.add ("number");
    rows[1].appendChild(eight);

    let nine = document.createElement("button");
    nine.textContent = "9";
    nine.classList.add ("number");
    rows[1].appendChild(nine);

    let multiply = document.createElement("button");
    multiply.textContent = "*";
    multiply.classList.add ("multiply");
    multiply.classList.add ("operator");
    rows[1].appendChild(multiply);

    // ===== ROW 3 ===== //

    let four = document.createElement("button");
    four.textContent = "4";
    four.classList.add ("number");
    rows[2].appendChild(four);

    let five = document.createElement("button");
    five.textContent = "5";
    five.classList.add ("number");
    rows[2].appendChild(five);

    let six = document.createElement("button");
    six.textContent = "6";
    six.classList.add ("number");
    rows[2].appendChild(six);

    let minus = document.createElement("button");
    minus.textContent = "-";
    minus.classList.add ("minus");
    minus.classList.add ("operator");
    rows[2].appendChild(minus);
    
    // ===== ROW 3 ===== //

    let one = document.createElement("button");
    one.textContent = "1";
    one.classList.add ("number");
    rows[3].appendChild(one);

    let two = document.createElement("button");
    two.textContent = "2";
    two.classList.add ("number");
    rows[3].appendChild(two);

    let three = document.createElement("button");
    three.textContent = "3";
    three.classList.add ("number");
    rows[3].appendChild(three);

    let add = document.createElement("button");
    add.textContent = "+";
    add.classList.add ("add");
    add.classList.add ("operator");
    rows[3].appendChild(add);

};

function calculate(){
    
}
window.onload = () => populateWindow(document);