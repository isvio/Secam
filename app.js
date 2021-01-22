window.onload = function () {
    let g = document.getElementById("game");
    let light = document.getElementById("get-light"),
        night = document.getElementById("get-night");
    light.addEventListener("click", function () {
        document.body.setAttribute("class", "light");
        light.style.display = "none";
        night.style.display = "block";
    });
    night.addEventListener("click", function () {
        document.body.setAttribute("class", "night");
        night.style.display = "none";
        light.style.display = "block";
    });

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

    let Image = (value) => {
        let obj = document.createElement("img");
        obj.setAttribute("src", value);
        return obj;
    }

    let digits_isOpen = false;
    let getDigit = (id) => {
        let cell = document.getElementById(id);
        let g = document.getElementById("game");
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

    document.getElementById("help").addEventListener("click", function () {
        let winh = document.getElementById("help-window");
        if (!digits_isOpen) {
            if (winh.style.display === "none") {
                winh.style.display = "block";
            } else {
                winh.style.display = "none";
            }
        }
    })

    class Game {
        constructor() {
        }
        render() {
            let g = document.getElementById("game");
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
        if (section.length === 4) {
            if (section[0][0] === section[1][0] && section[1][0] === section[2][0] && section[2][0] === section[3][0]) {
                document.getElementById(section[0]).style.borderRight = com;
                document.getElementById(section[1]).style.borderLeft = com;
                document.getElementById(section[1]).style.borderRight = com;
                document.getElementById(section[2]).style.borderLeft = com;
                document.getElementById(section[2]).style.borderRight = com;
                document.getElementById(section[3]).style.borderLeft = com;
            }
            if (section[0][1] === section[1][1] && section[1][0] === section[2][0] && section[2][0] === section[3][0]) {
                if (section[0][0] < section[1][0] && section[2][1] > section[3][1] && section[3][1] < section[1][1]) {
                    border(section[1], section[2], section[0], section[1]);
                    document.getElementById(section[3]).style.borderRight = com;
                    document.getElementById(section[2]).style.borderLeft = com;
                }
            }
            if (section[0][1] === section[1][1] && section[1][1] === section[2][1] && section[2][1] === section[3][0]) {
                if (section[3][1] < section[2][1] && section[2][1] < section[1][0] && section[1][0] < section[0][0]) {
                    border(section[1], section[3], section[2], section[2]);
                    document.getElementById(section[1]).style.borderBottom = com;
                    document.getElementById(section[0]).style.borderTop = com;
                }
            }
            if (section[0][1] === section[1][1] && section[2][1] === section[3][1] && section[1][0] === section[2][0]) {
                if (section[0][0] < section[1][0] && section[1][1] < section[2][1] && section[2][0] < section[3][0]) {
                    border(section[1], section[1], section[0], section[2]);
                    document.getElementById(section[2]).style.borderBottom = com;
                    document.getElementById(section[3]).style.borderTop = com;
                }
            }
            if (section[0][0] === section[1][0] && section[2][0] === section[3][0] && section[0][1] === section[2][1] && section[1][1] === section[3][1] &
                section[0][0] < section[2][0] && section[1][0] < section[3][0] && section[0][0] < section[3][0] && section[0][1] < section[3][1]) {
                border(section[3], section[2], section[1], section[3]);
                border(section[2], section[0], section[0], section[1]);
            }
            if (section[0][0] === section[1][0] && section[1][1] === section[2][1] && section[2][0] === section[3][0] &&
                section[0][0] === section[3][1] && section[0][1] < section[1][1] &&
                section[1][0] < section[2][0] && section[2][1] < section[3][1]) {
                border(section[2], section[2], section[1], section[3]);
                border(section[2], section[0], section[1], section[1]);
            }
        }
        if (section.length === 5) {
            if (section[0][1] === section[1][1] && section[1][1] === section[2][1] &&
                section[2][0] === section[3][0] && section[3][0] === section[3][0]) {
                if (section[0][0] < section[1][0] && section[1][0] < section[2][0] &&
                    section[2][1] > section[3][1] && section[3][1] > section[4][1]) {
                    border(section[2], section[4], section[1], section[2]);
                    border(section[1], section[3], section[0], section[3]);
                }
            }
            if (section[0][0] === section[1][0] && section[1][0] === section[2][0] && section[2][0] === section[3][0] &&
                section[3][1] === section[4][1] && section[2][1] === section[4][0]) {
                document.getElementById(section[0]).style.borderRight = com;
                document.getElementById(section[1]).style.borderLeft = com;
                document.getElementById(section[1]).style.borderRight = com;
                document.getElementById(section[2]).style.borderLeft = com;
                document.getElementById(section[2]).style.borderRight = com;
                document.getElementById(section[3]).style.borderLeft = com;
                border(section[4], section[2], section[3], section[3]);

            }
        }
        if (section.length === 6) {
            if (section[0][0] === section[1][0] && section[1][0] === section[2][0] && section[2][1] === section[3][1] &&
                section[3][1] === section[4][1] && section[4][0] === section[5][0] && section[3][0] === section[5][1]) {
                border(section[2], section[2], section[3], section[1]);
                border(section[3], section[5], section[4], section[4]);
                document.getElementById(section[1]).style.borderRight = com;
                document.getElementById(section[0]).style.borderLeft = com;
            }
        }
    }

    //levels
    let s1 = [12, 10, 7, 8, 3, 7, 6, 9, 6, 4, 13, 9, 11, 14, 6, 1];
    let g1 = [['00', '10', '20'], ['01', '11'], ['02', '12'], ['03', '04'], ['05'], ['21', '22'], ['13', '23'], ['25', '15', '14'], ['30', '40'], ['31', '41', '42'],
    ['24', '34', '33', '32'], ['43', '44'], ['35', '45'], ['50', '51', '52'], ['53', '54'], ['55']];

    let s2 = [9, 5, 5, 7, 7, 4, 21, 5, 4, 17, 14, 6, 7, 5, 7, 3];
    let g2 = [['00', '10'], ['01', '02'], ['03'], ['05', '15'], ['11', '21', '20'], ['12', '13'], ['04', '14', '24', '23', '22'], ['25'], ['30', '31'], ['32', '33', '34', '35'],
    ['51', '41', '40'], ['50'], ['42', '43'], ['44', '45'], ['52', '53', '54'], ['55']];

    let s3 = [9, 5, 9, 13, 12, 15, 12, 9, 7, 2, 10, 8, 12, 3];
    let g3 = [['00', '10'], ['01', '11', '12'], ['02', '03'], ['24', '14', '13'], ['15', '05', '04'], ['20', '30', '31'], ['42', '32', '22', '21'], ['23', '33', '34'],
    ['25', '35', '45'], ['50'], ['51', '41', '40'], ['43', '44'], ['52', '53', '54'], ['55']];

    let s4 = [13, 10, 3, 5, 11, 12, 14, 11, 8, 10, 4, 7, 5, 11, 2];
    let g4 = [['00', '10', '11', '21'], ['01', '02'], ['03', '04'], ['05'], ['12', '22', '23'], ['13', '14', '15'], ['20', '30', '31'], ['43', '33', '32'],
    ['24', '34', '44'], ['25', '35', '45'], ['50'], ['51', '41', '40'], ['42', '52'], ['53', '54'], ['55']];

    let s5 = [6, 5, 22, 9, 12, 12, 7, 11, 9, 9, 4, 4, 2, 14];
    let g5 = [['00', '10'], ['11'], ['24', '23', '22', '12', '02', '01'], ['03', '13', '14'], ['15', '05', '04'], ['20', '21', '30', '31'], ['32', '33', '34'], ['25', '35'],
    ['40', '41'], ['50', '51'], ['52'], ['44', '45'], ['55'], ['42', '43', '53', '54']];

    let s6 = [10, 2, 14, 7, 9, 10, 17, 7, 2, 6, 21, 13, 1, 7];
    let g6 = [['00', '01', '10', '11'], ['12'], ['13', '03', '02'], ['04', '05'], ['14', '15'], ['20', '30'], ['21', '22', '23', '24', '34'],
    ['25', '35'], ['31'], ['40', '41'], ['32', '42', '52', '51', '50'], ['33', '43', '44'], ['45'], ['53', '54', '55']];

    let pics = ["https://i.ibb.co/pvhTNWD/g1.png", "https://i.ibb.co/Fgmy5s5/g2.png", "https://i.ibb.co/NKXNHFQ/g3.png",
        "https://i.ibb.co/PTSHf6c/g4.png", "https://i.ibb.co/G2QyHDy/g5.png", "https://i.ibb.co/vLvYZQJ/g6.png"];
    let levels_origin = document.getElementById("levels-origin");
    let levels = document.getElementById("levels");

    let getLevel = () => {
        let container = document.createElement("div");
        let gg = document.createElement("div");
        let reset = document.createElement("button");
        let p = document.createElement("p");
        p.setAttribute("id", "result-game");
        reset.setAttribute("class", "btn");
        reset.setAttribute("id", "reset");
        reset.innerHTML = "Main menu";
        gg.setAttribute("id", "game");
        container.setAttribute("id", "container");
        container.appendChild(gg);
        container.appendChild(reset);
        container.appendChild(p);
        document.getElementsByTagName("body")[0].appendChild(container);
        reset.addEventListener("click", function () {
            if (!digits_isOpen) {
                container.remove();
                levels.style.display = "block";
            }
        })
        let game = new Game();
        game.render();
    }

    let level;
    class Level {
        constructor(id, src) {
            this.id = id;
            this.src = src;
        }
        add() {
            let img = Image(this.src);
            img.setAttribute("id", this.id);
            levels_origin.appendChild(img);
            img.addEventListener("click", function () {
                levels.style.display = "none";
                switch (this.id) {
                    case '0':
                        level = 1;
                        getLevel()
                        for (let i = 0; i < 16; i++) {
                            design(g1[i]);
                            sum(g1[i][0], s1[i]);
                        }
                        createHint('10', 5);
                        createHint('33', 4);
                        break;
                    case '1':
                        getLevel()
                        level = 2;
                        for (let i = 0; i < 16; i++) {
                            design(g2[i]);
                            sum(g2[i][0], s2[i]);
                        }
                        addHint("23", "35", "53", 6, 2, 1);
                        break;
                    case '2':
                        getLevel()
                        level = 3;
                        for (let i = 0; i < 14; i++) {
                            design(g3[i]);
                            sum(g3[i][0], s3[i]);
                        }
                        addHint("51", "31", "32", 4, 6, 5);
                        addHint("34", "35", "05", 3, 1, 6);
                        break;
                    case '3':
                        getLevel()
                        level = 4;
                        for (let i = 0; i < 15; i++) {
                            design(g4[i]);
                            sum(g4[i][0], s4[i]);
                        }
                        addHint("21", "23", "33", 2, 6, 2);
                        createHint('14', 5);
                        createHint('44', 3);
                        break;
                    case '4':
                        getLevel()
                        level = 5;
                        for (let i = 0; i < 14; i++) {
                            design(g5[i]);
                            sum(g5[i][0], s5[i]);
                        }
                        addHint("31", "22", "05", 3, 5, 3);
                        break;
                    case '5':
                        getLevel()
                        level = 6;
                        for (let i = 0; i < 14; i++) {
                            design(g6[i]);
                            sum(g6[i][0], s6[i]);
                        }
                        addHint("11", "34", "55", 5, 6, 2);
                        break;
                }
            })
        }
    }

    for (let i = 0; i < pics.length; i++) {
        let obj = new Level(i, pics[i]);
        obj.add();
    }

    function checkSection(section, numbers) {
        let s = 0;
        for (let i = 0; i < numbers.length; i++) {
            s += parseInt(document.getElementById(numbers[i]).lastChild.innerHTML);
        }
        return s === section;
    }

    document.getElementById("finish-game").addEventListener("click", function () {
        let message = document.getElementById("result-game");
        let val = 0;
        switch (level) {
            case 1:
                for (let i = 0; i < 16; i++) {
                    if (checkSection(s1[i], g1[i])) val++;
                }
                break;
            case 2:
                for (let i = 0; i < 16; i++) {
                    if (checkSection(s2[i], g2[i])) val++;
                }
                break;
            case 3:
                for (let i = 0; i < 14; i++) {
                    if (checkSection(s3[i], g3[i])) val++;
                }
                break;
            case 4:
                for (let i = 0; i < 15; i++) {
                    if (checkSection(s4[i], g4[i])) val++;
                }
                break;
            case 5:
                for (let i = 0; i < 14; i++) {
                    if (checkSection(s5[i], g5[i])) val++;
                }
                break;
            case 6:
                for (let i = 0; i < 14; i++) {
                    if (checkSection(s6[i], g6[i])) val++;
                }
                break;
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
            && (val === 14 || val === 15 || val === 16)) {
            message.style.color = " rgb(58, 126, 58)";
            message.innerHTML = "Congratulations!!!";
            document.getElementById("game").classList.add("finished");
        } else {
            message.style.color = "rgb(153, 79, 79)";
            message.innerHTML = "Wrong! Try again...";
        }
    })
}


