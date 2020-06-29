

let homePage = document.getElementById("begin"),
    gamePage = document.getElementById("game"),
    helpPage = document.getElementById("help");

let playButtonClick = document.getElementById("playButton"),
    helpButtonClick = document.getElementById("helpButton"),
    helpBackButtonClick = document.getElementById("helpBack"),
    verifySolutionButtonClick = document.getElementById("verify");

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

let sections = [13, 6, 4];

let game0 = [
    ['00', '01', '11'],
    ['02', '12'],
    ['03', '04']
];

let info_game = document.getElementById("info-game");

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function checkSection(section, numbers) {
    var sum = 0, s = 0;
    for(var index = 0; index < numbers.length; index++) {
        s +=document.getElementById(numbers[index]).value;
    }
    for(var count = 0; count < s.length; count++) {
        sum += parseInt(s[count]);
    }
    return sum === section;
}



function generate_gane(table) {
    for(var section = 0; section < table.length; section++) {
        calculateSum(table[section]);
    }
}


function calculateSum(value) {
    let header = document.getElementsByTagName("header")[0];
    let color = randomColor();
    let span = document.createElement("span");
    if (!(color === "#FFFF")) {
        let val = document.createTextNode(value);
        console.log(color);
        console.log(val);
        span.appendChild(val);
        span.style.color = color;
        header.appendChild(span);
    }
}



function getID(e) {
    console.log(e.target.id);
    var x = e.target.id.toString();
    let input = document.getElementById(e.target.id).value;
}

generate_gane(sections);

verifySolutionButtonClick.addEventListener("click", function() {
    console.log("check game");
    if(checkSection(sections[0], game0[0])) console.log("succes");
});



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
