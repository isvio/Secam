

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

game.addEventListener("input", function () {
    // console.log(game.id);
});

let row0 = [],
    row1 = [],
    row2 = [],
    row3 = [],
    row4 = [],
    row5 = [];

let col0 = [],
    col1 = [],
    col2 = [],
    col3 = [],
    col4 = [],
    col5 = [];

let info_game = document.getElementById("info-game");

function check_rowcol(rowcol_number, value, target) {
    if (rowcol_number[0] === value || rowcol_number[1] === value || rowcol_number[2] === value || rowcol_number[3] === value || rowcol_number[4] === value || rowcol_number[5] === value) {
        document.getElementById(target).value = "";
        info_game.innerHTML = "check row or column";

    } else {
        info_game.innerHTML = "";
        rowcol_number.push(value);
        if (document.getElementById(target).value != "") {
            document.getElementById(target).disabled = "true";
        }
    }
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generate_gane() {
    let header = document.getElementsByTagName("header")[0];
    let span = document.createElement("span");

    let start_index_i_0 = Math.floor((Math.random() * 5) + 0);
    let start_index_j_0 = Math.floor((Math.random() * 5) + 0);
    console.log(start_index_i_0, start_index_j_0);

    /*  let start_index_i_1 =  Math.floor((Math.random() * 5) + 0);
     let start_index_j_1 =  Math.floor((Math.random() * 5) + 0);
     console.log(start_index_i_1, start_index_j_1); */

    let start0 = document.getElementById((start_index_i_0 + "" + start_index_j_0).toString());
    console.log(start0);
    // let start1 = document.getElementById((start_index_i_1 + "" + start_index_i_1).toString());


    let color = randomColor();
    
    if (!(color === "#FFFF")) {
        console.log(color);
        start0.style.backgroundColor = color;
        let val0 = Math.floor((Math.random() * 5) + 1);

        let val = document.createTextNode(val0);

        span.appendChild(val);
        span.style.color = color;
        header.appendChild(span);
    }




  //  start1.style.color = randomColor();



   /*  let val0 = Math.floor((Math.random() * 5) + 1);

    let val = document.createTextNode(val0);

    span.appendChild(val);
    span.style.color = color;
    header.appendChild(span);



    start1.style.color = "#fff";
    start1.style.opacity = 0.4;
    start1.value = Math.floor((Math.random() * 5) + 1); */
}

generate_gane();

function getID(e) {
    console.log(e.target.id);
    var x = e.target.id.toString();
    let input = document.getElementById(e.target.id).value;

    switch (x[0]) {
        case '0':
            check_rowcol(row0, input, e.target.id);
            break;
        case '1':
            check_rowcol(row1, input, e.target.id);
            break;
        case '2':
            check_rowcol(row2, input, e.target.id);
            break;
        case '3':
            check_rowcol(row3, input, e.target.id);
            break;
        case '4':
            check_rowcol(row4, input, e.target.id);
            break;
        case '5':
            check_rowcol(row5, input, e.target.id);
            break;
        default:
            break;
    }

    switch (x[1]) {
        case '0':
            check_rowcol(col0, input, e.target.id);
            break;
        case '1':
            check_rowcol(col1, input, e.target.id);
            break;
        case '2':
            check_rowcol(col2, input, e.target.id);
            break;
        case '3':
            check_rowcol(col3, input, e.target.id);
            break;
        case '4':
            check_rowcol(col4, input, e.target.id);
            break;
        case '5':
            check_rowcol(col5, input, e.target.id);
            break;
        default:
            break;
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
