window.onload = function () {
    let g = document.getElementById("game");






    // function getID(e) {
    //     var x = e.target.id.toString();
    //     let input = document.getElementById(e.target.id).value;
    //     switch (x[0]) {
    //         case '0':
    //             row0.push(input);
    //             break;
    //         case '1':
    //             row1.push(input);
    //             break;
    //         case '2':
    //             row2.push(input);
    //             break;
    //         case '3':
    //             row3.push(input);
    //             break;
    //         case '4':
    //             row4.push(input);
    //             break;
    //         case '5':
    //             row5.push(input);
    //             break;
    //     }
    //     switch (x[1]) {
    //         case '0':
    //             col0.push(input);
    //             break;
    //         case '1':
    //             col1.push(input);
    //             break;
    //         case '2':
    //             col2.push(input);
    //             break;
    //         case '3':
    //             col3.push(input);
    //             break;
    //         case '4':
    //             col4.push(input);
    //             break;
    //         case '5':
    //             col5.push(input);
    //             break;
    //     }
    // }

    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }

    let sums = [13, 6, 4, 5, 3, 10, 11, 7, 10, 11, 5, 7, 13, 9, 6, 6];
    let game0 = [['11', '01', '00'], ['02', '12'], ['03', '04'], ['05'], ['10', '20'], ['21', '31', '30'], ['22', '32', '33'],
    ['13', '23'], ['14', '15'], ['24', '25'], ['45', '35', '34'], ['40', '41'], ['42', '43', '44'], ['50', '51'], ['52', '53'], ['54', '55']];

    let sum = (id, s) => {
        let origin = document.getElementById(id).firstChild;
        origin.innerHTML = s;
        origin.style.opacity = "1";
    }

    let Div = (value1, value2) => {
        let obj = document.createElement("div");
        obj.setAttribute("class", value1);
        value2 == null ? obj.setAttribute("class", value1) : obj.setAttribute("id", value2);
        return obj;
    }

    let Render = (type, attr, value) => {
        let obj = document.createElement(type);
        obj.setAttribute(attr, value);
        return obj;
    }

    document.getElementById("help").addEventListener("click", function () {
        let winh = document.getElementById("help-window");
        if (winh.style.display === "none") {
            winh.style.display = "block";
        } else {
            winh.style.display = "none";
        }
    })

    let objects = 0;
    let digits_isOpen = false;
    let getDigit = (id) => {
        let cell = document.getElementById(id);
        if (!g.classList.contains("finished")) {
            if (!digits_isOpen && !cell.classList.contains("hint")) {
                g.style.opacity = ".5";
                digits_isOpen = true;
                let wind = Div("digits");
                for (let i = 0; i < 6; i++) {
                    let btn = document.createElement("button");
                    btn.setAttribute("class", "digit");
                    btn.innerHTML = i + 1;
                    btn.value = i + 1;
                    wind.appendChild(btn);
                    btn.addEventListener("click", function () {
                        if (!cell.classList.contains("full")) {
                            let p = Render("span", "class", "content");
                            p.innerHTML = btn.value;
                            objects++;
                            cell.appendChild(p);
                            cell.classList.add("full");
                        } else {
                            cell.children[1].innerHTML = btn.value;
                        }
                        g.style.opacity = "1";
                        wind.remove();
                        digits_isOpen = false;
                        if (objects === 33) {

                        }
                    })
                }
                document.getElementsByTagName("body")[0].appendChild(wind);
            }
        }
    }

    class Game {
        constructor() {
        }
        render() {
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    let cell = Div("item", i + "" + j);
                    let sub = Div("sum");
                    sub.style.opacity = "0";
                    sub.innerHTML = "...";
                    cell.appendChild(sub);
                    cell.addEventListener("click", function () {
                        getDigit(i + "" + j);
                    })
                    g.appendChild(cell);
                }
            }
        }
    }

    let createHint = (id, value) => {
        let org = document.getElementById(id);
        org.classList.add("hint");
        let p = Render("span", "class", "content");
        p.innerHTML = value;
        org.appendChild(p);
    }

    function addHint(id1, id2, id3, val1, val2, val3) {
        createHint(id1, val1);
        createHint(id2, val2);
        createHint(id3, val3);
    }

    let com = "1px dashed rgb(115, 118, 119)";
    let border = (top, right, bottom, left) => {
        document.getElementById(top).style.borderTop = com;
        document.getElementById(right).style.borderRight = com;
        document.getElementById(bottom).style.borderBottom = com;
        document.getElementById(left).style.borderLeft = com;
    }

    let design = (section) => {
        if (section.length === 2) {
            if (section[0][0] === section[1][0]) {
                document.getElementById(section[0]).style.borderRight = com;
                document.getElementById(section[1]).style.borderLeft = com;
            }
            if (section[0][1] === section[1][1]) {
                document.getElementById(section[0]).style.borderBottom = com;
                document.getElementById(section[1]).style.borderTop = com;
            }
        }
        if (section.length === 3) {
            if (section[0][0] === section[1][0] && section[1][0] === section[2][0]) {
                document.getElementById(section[0]).style.borderRight = com;
                document.getElementById(section[1]).style.borderRight = com;
                document.getElementById(section[1]).style.borderLeft = com;
                document.getElementById(section[2]).style.borderLeft = com;
            }
            if (section[0][1] === section[1][1] && section[1][1] === section[2][1]) {
                document.getElementById(section[0]).style.borderBottom = com;
                document.getElementById(section[1]).style.borderTop = com;
                document.getElementById(section[1]).style.borderBottom = com;
                document.getElementById(section[2]).style.borderTop = com;
            }
            if (section[1][1] === section[0][1] && section[2][0] === section[1][0]) {
                if (section[1][0] < section[0][0] && section[1][1] < section[2][1])
                    border(section[0], section[1], section[1], section[2]);
                if (section[1][0] > section[0][0] && section[1][1] < section[2][1])
                    border(section[1], section[1], section[0], section[2]);
                if (section[1][0] > section[0][0] && section[1][1] > section[2][1])
                    border(section[1], section[2], section[0], section[1]);
                if (section[1][0] < section[0][0] && section[1][1] > section[2][1])
                    border(section[0], section[2], section[1], section[1]);
            }
        }
    }

    let game = new Game();
    game.render();
    addHint("31", "44", "45", 4, 2, 1);
    for (let i = 0; i < game0.length; i++) {
        design(game0[i]);
        sum(game0[i][0], sums[i]);
    }

    function checkSection(section, numbers) {
        let sum = 0, s = 0;
        for (let i = 0; i < numbers.length; i++) {
            s += parseInt(document.getElementById(numbers[i]).lastChild.innerHTML);
        }
        return s === section;
    }

    document.getElementsByClassName("finish-game")[0].addEventListener("click", function () {
        let message = document.getElementById("result-game");
        let val = 0;
        for (let i = 0; i < sums.length; i++) {
            if (checkSection(sums[i], game0[i])) val++;
        }
        let row0 = [], row1 = [], row2 = [], row3 = [], row4 = [], row5 = [];
        let col0 = [], col1 = [], col2 = [], col3 = [], col4 = [], col5 = [];
        for (let i = 0, j = 0; j < 6; j++) {
            row0.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let i = 1, j = 0; j < 6; j++) {
            row1.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let i = 2, j = 0; j < 6; j++) {
            row2.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let i = 3, j = 0; j < 6; j++) {
            row3.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let i = 4, j = 0; j < 6; j++) {
            row4.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let i = 5, j = 0; j < 6; j++) {
            row5.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }

        for (let j = 0, i = 0; i < 6; i++) {
            col0.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let j = 1, i = 0; i < 6; i++) {
            col1.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let j = 2, i = 0; i < 6; i++) {
            col2.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let j = 3, i = 0; i < 6; i++) {
            col3.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let j = 4, i = 0; i < 6; i++) {
            col4.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        for (let j = 5, i = 0; i < 6; i++) {
            col5.push(document.getElementById(i + "" + j).lastChild.innerHTML);
        }
        if (!hasDuplicates(row0) && !hasDuplicates(row1) && !hasDuplicates(row2)
            && !hasDuplicates(row3) && !hasDuplicates(row4) && !hasDuplicates(row5)
            && !hasDuplicates(col0) && !hasDuplicates(col1) && !hasDuplicates(col2)
            && !hasDuplicates(col3) && !hasDuplicates(col4) && !hasDuplicates(col5)
            && val === 16) {
            message.style.color = "#1b998b";
            message.innerHTML = "Congratulations!!!";
            g.classList.add("finished");
        } else {
            message.style.color = "#ff0f0f";
            message.innerHTML = "Wrong! Try again...";
        }

    })


    // var val = 0,
    //     message = document.getElementById("result-game"),
    //     inputs = document.getElementsByTagName("input");
    // for (var count = 0; count < 16; count++) {
    //     if (checkSection(sections0[count], game0[count])) val++;
    // }
    // if (!hasDuplicates(row0) && !hasDuplicates(row1) && !hasDuplicates(row2)
    //     && !hasDuplicates(row3) && !hasDuplicates(row4) && !hasDuplicates(row5)
    //     && !hasDuplicates(col0) && !hasDuplicates(col1) && !hasDuplicates(col2)
    //     && !hasDuplicates(col3) && !hasDuplicates(col4) && !hasDuplicates(col5)
    //     && val === 16) {
    //     message.style.color = "#1b998b";
    //     message.style.fontSize = "18px";
    //     message.style.fontWeight = "bold";
    //     message.innerHTML = "Congratulations, you solved everything";
    //     for (var count = 0; count < inputs.length; count++) {
    //         inputs[count].disabled = "true";
    //     }
    // } else {
    //     let tryAgainButtonClick = document.getElementById("repeat-game");
    //     message.style.fontSize = "18px";
    //     message.style.color = "#e63946";
    //     message.style.fontWeight = "bold";
    //     message.innerHTML = "Good try, but you failed!";
    //     verifySolutionButtonClick.style.display = "none";
    //     tryAgainButtonClick.style.display = "block";
    //     tryAgainButtonClick.addEventListener("click", function () {
    //         tryAgainButtonClick.style.display = "none";
    //         verifySolutionButtonClick.style.display = "block";
    //         for (var count = 0; count < inputs.length; count++) {
    //             inputs[count].value = "";
    //         }
    //         addHint();
    //         message.innerHTML = "";
    //         row0.length = 0;
    //         row1.length = 0;
    //         row2.length = 0;
    //         row3.length = 0;
    //         row4.length = 0;
    //         row5.length = 0;
    //         col0.length = 0;
    //         col1.length = 0;
    //         col2.length = 0;
    //         col3.length = 0;
    //         col4.length = 0;
    //     });
    // }




}


