

window.addEventListener("load", function () {

    let table = this.document.querySelector("#table");
    let N = 8, M = 8;
    let palyer = "queen";

    // chess grid creation.

    for (let ri = 0; ri < N; ri++) {
        let tr = this.document.createElement("tr");
        let isWhite = ri % 2 == 0 ? true : false;
        for (let ci = 0; ci < M; ci++) {
            let cell = this.document.createElement("td");
            cell.setAttribute("class", `box ${isWhite ? "white" : "black"}`);
            // cell.innerText = `${ri} - ${ci}`;
            cell.setAttribute("data-index", `${ri}-${ci}`);

            tr.appendChild(cell);
            isWhite = !isWhite;
        }
        table.appendChild(tr);
    }
    hoverEffect(table, N, M, palyer);
});

function hoverEffect(table, N, M, player) {
    let boxArr = document.querySelectorAll(".box");

    table.addEventListener("mouseover", (e) => {
        // console.log(e.target.dataset.index);
        let dataIndex = e.target.dataset.index;
        if (dataIndex == undefined) {
            return;
        }

        removeYellowColorFromAllCells(boxArr);

        let [curr_row, curr_col] = dataIndex.split("-").map(idx => idx);

        let directionVector = getDirectionVector(player);
        let maxRadius = getMaxiumRadius(player)
        storageOfPossibleMoves = possibleMoves(parseInt(curr_row), parseInt(curr_col), N, M, directionVector, maxRadius);

        colorMyPossibleMoves(storageOfPossibleMoves, boxArr);
    });
    mouseLeave(table, boxArr);
}


function removeYellowColorFromAllCells(boxArr) {
    for (let boxcell of boxArr) {
        boxcell.classList.remove("yellow");
    }
}

function possibleMoves(curr_row, curr_col, N, M, direction, maxRadius) {
    storageOfPossibleMoves = {};

    for (let dir of direction) {
        for (let radius = 0; radius <= maxRadius; radius++) {
            let r = curr_row + (radius * dir[0]);
            let c = curr_col + (radius * dir[1]);

            if (r >= 0 && c >= 0 && r < N && c < M) {
                let dataIndex = `${r}-${c}`;
                //    console.log(dataIndex);
                storageOfPossibleMoves[dataIndex] = true;
            } else {
                break;
            }
        }
    }

    return storageOfPossibleMoves;
}

function colorMyPossibleMoves(storageOfPossibleMoves, boxArr) {
    for (let boxCell of boxArr) {
        let curr_dataIndex = boxCell.dataset.index;
        if (storageOfPossibleMoves[curr_dataIndex]) {
            boxCell.classList.add("yellow");
        }
    }
}

function mouseLeave(table, boxArr) {
    table.addEventListener("mouseleave", () => {
        removeYellowColorFromAllCells(boxArr);
    });
}

function getDirectionVector(player) {
    if (player == "bishop") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1]];
    } else if (player == "queen") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1], [0, 1], [1, 0], [0, -1], [-1, 0]]
    } else if (player == "knight") {
        return [[-2, -1], [-1, -2], [1, -2], [2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1]];
    }
}

function getMaxiumRadius(player) {
    if (player == "bishop") {
        return 8;
    } else if (player == "queen") {
        return 8;
    } else if (player == "knight") {
        return 1;
    }
}

