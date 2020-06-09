

let homePage = document.getElementById("begin");
let gamePage = document.getElementById("game");
let helpPage = document.getElementById("help");

let playButtonClick = document.getElementById("playButton");
let helpButtonClick = document.getElementById("helpButton");
let helpBackButtonClick = document.getElementById("helpBack");
let verifySolutionButtonClick = document.getElementById("verify");

playButtonClick.addEventListener("click", function () {
    homePage.style.display = "none";
    gamePage.style.display = "block";
})

helpButtonClick.addEventListener("click", function () {
    homePage.style.display = "none";
    helpPage.style.display = "block";
});

helpBackButtonClick.addEventListener("click", function () {
    helpPage.style.display = "none";
    homePage.style.display = "block";
});

homePage.style.display = "none";
gamePage.style.display = "block";

function condition(x, y) {
    if (!(x === y)) {

    }
}

verifySolutionButtonClick.addEventListener("click", function () {
    let mat = [];
    let row = [];

    for (var i = 0; i < 6; i++) {
        mat[i] = new Array(6);
    }



    console.log(row);

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            var x = Math.floor((Math.random() * 6) + 1);
            if (!mat[i].includes) {
                mat[i][j] = x;
            }
        }
    }

  console.log(mat);

});

let game = document.getElementById("game-table");

game.addEventListener("input", function() {
   // console.log(game.id);
});

function getID(e) {
    console.log(e.target.id);
    var x = e.target.id.toString();
    console.log(x[0]);

    let a = document.getElementById(e.target.id).value;
    console.log(a);

    let row = [];
    row.push(a);

}




function checkSolutuin() {
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

let textPlace = document.getElementById("help-text");
let playDemoButton = document.getElementById("demo");

playDemoButton.addEventListener("click", function playDemo() {
    helpBackButtonClick.style.display = "none";
    textPlace.style.display = "none";
    document.getElementById("demo-game").style.display = "block";
    playDemoButton.style.display = "none";
    let move1Button = document.getElementById("move1");
    move1Button.style.display = "block";
    move1Button.addEventListener("click", function () {
        document.getElementById("c5").innerHTML = 1;
        move1Button.style.display = "none";
        let move2Button = document.getElementById("move2");
        move2Button.style.display = "block";
        move2Button.addEventListener("click", function () {
            document.getElementById("c2").innerHTML = 2;
            move2Button.style.display = "none";
            let move3Button = document.getElementById("move3");
            move3Button.style.display = "block";
            move3Button.addEventListener("click", function () {
                document.getElementById("c1").innerHTML = 1;
                move3Button.style.display = "none";
                let move4Button = document.getElementById("move4");
                move4Button.style.display = "block";
                move4Button.addEventListener("click", function () {
                    document.getElementById("c3").innerHTML = 3;
                    move4Button.style.display = "none";
                    let move5Button = document.getElementById("move5");
                    move5Button.style.display = "block";
                    move5Button.addEventListener("click", function () {
                        document.getElementById("c6").innerHTML = 2;
                        move5Button.style.display = "none";
                        let move6Button = document.getElementById("move6");
                        move6Button.style.display = "block";
                        move6Button.addEventListener("click", function () {
                            document.getElementById("c4").innerHTML = 3;
                            move6Button.style.display = "none";
                            let move7Button = document.getElementById("move7");
                            move7Button.style.display = "block";
                            move7Button.addEventListener("click", function () {
                                document.getElementById("c9").innerHTML = 1;
                                move7Button.style.display = "none";
                                let move8Button = document.getElementById("move8");
                                move8Button.style.display = "block";
                                move8Button.addEventListener("click", function () {
                                    document.getElementById("c7").innerHTML = 2;
                                    move8Button.style.display = "none";
                                    let move9Button = document.getElementById("move9");
                                    move9Button.style.display = "block";
                                    move9Button.addEventListener("click", function () {
                                        document.getElementById("c8").innerHTML = 3;
                                        move9Button.style.display = "none";
                                        document.getElementById("finalDemoMessage").style.display = "block";
                                        helpBackButtonClick.style.display = "block";
                                        helpBackButtonClick.addEventListener("click", function () {
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

});
