
window.addEventListener("DOMContentLoaded", () => new Calculator());


class Calculator{
    constructor(){
        console.log("Constructing instance of Game");
        this.createWindow();
        let firstVal = null;
        let operator = null;
        let secondVal = null;
        let total = null;
        let displayValue = null;
    }
createWindow() {
    console.log("Creating Window");
    this.populateWindow(document);
};
populateWindow(doc) {
    console.log("Window being populated");
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

    this.createButtons();
    
}
numberButtonPressedHelper(numberString){
    seven.addEventListener("click", () => {
        console.log(`${numberString} clicked`);
        if (operator === null && total === null){
            //then this is the first input
            this.firstVal = numberString;
        }
        else if (operator === null) {
            //ongoing multi-digit input
            this.firstVal += numberString;
        }
        else{ //part of the second input
            if (this.secondVal === null){
                this.secondVal = numberString;
            }
            else{
                this.secondVal += numberString;
            }
            
        }

    });
}
createButtons(){
        console.log("buttons created");

    let rows = document.querySelectorAll(".row");
    
    // ===== ROW 1 ===== //
    let AC = document.createElement("button");
    AC.textContent = "AC";
    AC.classList.add ("clear");
    AC.addEventListener("click", () => {
        console.log("Clear clicked");
        this.firstVal = null;
        this.operator = null;
        this.secondVal = null;
        this.total = null;
        this.displayValue = null;

    });

    rows[0].appendChild(AC);

    let sign = document.createElement("button");
    sign.textContent = "+/-";
    sign.classList.add ("sign");
    sign.addEventListener("click", () => {
        console.log("sign clicked");
        this.firstVal = null;
        this.operator = null;
        this.secondVal = null;
        this.total = null;
        this.displayValue = null;

    });

    rows[0].appendChild(sign);

    let percent = document.createElement("button");
    percent.textContent = "%";
    percent.classList.add ("percent");
    percent.addEventListener("click", () => {
        console.log("percent clicked");
        this.firstVal = null;
        this.operator = null;
        this.secondVal = null;
        this.total = null;
        this.displayValue = null;

    });

    rows[0].appendChild(percent);

    let division = document.createElement("button");
    division.textContent = "/";
    division.classList.add ("divide");
    division.classList.add ("operator");
    division.addEventListener("click", () => {
        console.log("division clicked");
        this.operator = "division"
    });

    rows[0].appendChild(division);

    // ===== ROW 2 ===== //

    let seven = document.createElement("button");
    seven.textContent = "7";
    seven.classList.add ("number");
    this.numberButtonPressedHelper("7");
    rows[1].appendChild(seven);


    let eight = document.createElement("button");
    eight.textContent = "8";
    eight.classList.add ("number");
    rows[1].appendChild(eight);
    seven.addEventListener("click", () => {
        console.log("7 clicked");
        if (operator === null && total === null){
            //then this is the first input
            this.firstVal = "8";
        }
        else if (operator === null) {
            //ongoing multi-digit input
            this.firstVal += "8";
        }
        else{ //part of the second input
            if (this.secondVal === null){
                this.secondVal = "8";
            }
            else{
                this.secondVal += "8";
            }
            
        }

    });
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

 calculate(){
    
}
};

