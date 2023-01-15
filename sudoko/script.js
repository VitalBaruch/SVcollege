function levelStart(level) {
    document.getElementById('level').style.display = "none";
    document.getElementById('move_to_play').style.display = "block";
    let count = document.getElementById('count');
    setTimeout("count.src = 'img/two.png'", 800);
    setTimeout("count.src = 'img/three.png'", 1600);
    setTimeout("count.src = 'img/go.png'", 2400);
    setTimeout(() => {
        play(level);
    }, 3200);
}

function play(level) {
    document.getElementById('move_to_play').style.display = "none";
    document.getElementById('play').style.display = "block";
    document.getElementById('play_level').innerHTML = "Level " + level;

    let table = document.getElementById('board');
    for (let i in board) {
        let tr = document.createElement('tr');
        for (let j in board[i]) {
            let td = document.createElement('td');
            td.innerHTML = board[i][j];
            tr.appendChild(td);

            //style
            if (i == 0 || i % 3 == 0) {
                td.style.borderTop = "solid white 6px";
            }
            if (i == board.length - 1) {
                td.style.borderBottom = "solid white 6px";
            }
            if (j == 0 || j % 3 == 0) {
                td.style.borderLeft = "solid white 6px";
            }
            if (j == board[i].length - 1) {
                td.style.borderRight = "solid white 6px";
            }
        }
        table.appendChild(tr);
    }
}

let board = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
]