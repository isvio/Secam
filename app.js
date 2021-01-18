window.onload = function () {
    let g = document.getElementById("game");

    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }

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
                            cell.appendChild(p);
                            cell.classList.add("full");
                        } else {
                            cell.children[1].innerHTML = btn.value;
                        }
                        g.style.opacity = "1";
                        wind.remove();
                        digits_isOpen = false;
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
        if(id3 !== null && !val3 !== null) {
            createHint(id3, val3);
        }
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
        if(section.length === 4) {
            if(section[0][1] === section[1][1] && section[1][0] === section[2][0] && section[2][0] === section[3][0]) {
                if(section[0][0] < section[1][0] && section[2][1] > section[3][1] && section[3][1] < section[1][1]) {
                    border(section[1], section[2], section[0], section[1]);
                    document.getElementById(section[3]).style.borderRight = com;
                    document.getElementById(section[2]).style.borderLeft = com;
                }
            }
        }
    }

    let game = new Game();
    game.render();

    let s0 = [13, 6, 4, 5, 3, 10, 11, 7, 10, 11, 5, 7, 13, 9, 6, 6];
    let g0 = [['11', '01', '00'], ['02', '12'], ['03', '04'], ['05'], ['10', '20'], ['21', '31', '30'], ['22', '32', '33'],
    ['13', '23'], ['14', '15'], ['24', '25'], ['45', '35', '34'], ['40', '41'], ['42', '43', '44'], ['50', '51'], ['52', '53'], ['54', '55']];

    let s1 = [12, 10, 7, 8, 3, 7, 6, 9, 6, 4, 13, 9, 11, 14, 6, 1];
    let g1 = [['00', '10', '20'], ['01', '11'], ['02', '12'], ['03', '04'], ['05'], ['21', '22'], ['13', '23'], ['25', '15', '14'], ['30', '40'], ['31', '41', '42'],
    ['24', '34', '33', '32'], ['43', '44'], ['35', '45'], ['50', '51', '52'], ['53', '54'], ['55']];

    addHint("31", "44", "45", 4, 2, 1); //s0
   // addHint('10','33', 5,4); //s1
    for (let i = 0; i < g0.length; i++) {
        design(g0[i]);
        sum(g0[i][0], s0[i]);
    }

    function checkSection(section, numbers) {
        let sum = 0, s = 0;
        for (let i = 0; i < numbers.length; i++) {
            s += parseInt(document.getElementById(numbers[i]).lastChild.innerHTML);
        }
        return s === section;
    }

    document.getElementById("finish-game").addEventListener("click", function () {
        let message = document.getElementById("result-game");
        let val = 0;
        for (let i = 0; i < s0.length; i++) {
            if (checkSection(s0[i], g0[i])) val++;
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
}


