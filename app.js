
let homePage = document.getElementById("begin");
let gamePage = document.getElementById("gamePlace");
let helpPage = document.getElementById("help");

let playButtonClick = document.getElementById("playButton");
let helpButtonClick = document.getElementById("helpButton");
let helpBackButtonClick = document.getElementById("helpBack");

playButtonClick.addEventListener("click", function() {
    homePage.style.display = "none";
    gamePage.style.display = "block;"
})

helpButtonClick.addEventListener("click", function() {
    homePage.style.display = "none";
    helpPage.style.display = "block";
});

helpBackButtonClick.addEventListener("click", function() {
    helpPage.style.display = "none";
    homePage.style.display = "block";
});

function condition(x, y, z) {
    return !((x === y) && (y === z) && (x === z));
}

function game() {
    var
        num1 = document.getElementById("c11").value,
        num2 = document.getElementById("c12").value,
        num3 = document.getElementById("c13").value,
        num4 = document.getElementById("c21").value,
        num6 = document.getElementById("c23").value,
        num7 = document.getElementById("c31").value,
        num8 = document.getElementById("c32").value,
        num9 = document.getElementById("c33").value;
    if (isNaN(parseInt(num1)))
        document.getElementById("c11").style.border = "2px solid red";
    if (isNaN(parseInt(num2)))
        document.getElementById("c12").style.border = "2px solid red";
    if (isNaN(parseInt(num3)))
        document.getElementById("c13").style.border = "2px solid red";
    if (isNaN(parseInt(num4)))
        document.getElementById("c21").style.border = "2px solid red";
    if (isNaN(parseInt(num6)))
        document.getElementById("c23").style.border = "2px solid red";
    if (isNaN(parseInt(num7)))
        document.getElementById("c31").style.border = "2px solid red";
    if (isNaN(parseInt(num8)))
        document.getElementById("c32").style.border = "2px solid red";
    if (isNaN(parseInt(num9)))
        document.getElementById("c33").style.border = "2px solid red";
    if (condition(parseInt(num1), parseInt(num2), parseInt(num3)) &&
        condition(parseInt(num4), 2, parseInt(num6)) &&
        condition(parseInt(num7), parseInt(num8), parseInt(num9)) &&
        condition(parseInt(num1), parseInt(num4), parseInt(num7)) &&
        condition(parseInt(num2), 2, parseInt(num8)) &&
        condition(parseInt(num4), parseInt(num6), parseInt(num9))) {
        if (parseInt(num1) + parseInt(num4) === 11 && parseInt(num7) + parseInt(num8) === 5 &&
            parseInt(num2) + parseInt(num3) + parseInt(num6) === 8 && parseInt(num9) === 6) {
            document.getElementById("verify").style.display = "none";
            document.getElementById("win").style.display = "block";
        } else {
            document.getElementById("verify").style.display = "none";
            document.getElementById("lose").style.display = "block";
        }
    } else {
        document.getElementById("verify").style.display = "none";
        document.getElementById("lose").style.display = "block";
    }
}