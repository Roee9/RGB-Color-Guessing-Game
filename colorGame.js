var numbSqures = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquers();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent ==="Easy") {
                numbSqures = 3;
            } else {
                numbSqures = 6;
            }
            reset();
        })
    }
}

function setUpSquers() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to the pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
    
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numbSqures);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to mach picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squars
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numbSqures = 3;
//     colors = generateRandomColors(numbSqures);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue";
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numbSqures = 6;
//     colors = generateRandomColors(numbSqures);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue";
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors (color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green =Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}