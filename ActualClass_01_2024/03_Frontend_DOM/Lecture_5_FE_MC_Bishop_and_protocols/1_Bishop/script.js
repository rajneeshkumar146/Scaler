

window.addEventListener("load", function () {

    let table = this.document.querySelector("#table");
    let N = 8, M = 8;

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
        hoverEffect(table, N, M);
    }
});

function hoverEffect(table, N, M) {
    let boxArr = document.querySelectorAll(".box");

    table.addEventListener("mouseover", (e) => {
        // console.log(e.target.dataset.index);
        let dataIndex = e.target.dataset.index;
        if (dataIndex == undefined) {
            return;
        }

        removeYellowColorFromAllCells(boxArr);
        e.target.classList.add("yellow");

        let [curr_row, curr_col] = dataIndex.split("-").map(idx => idx);
        storageOfPossibleMoves = possibleMoves(curr_row, curr_col, N, M);

        colorMyPossibleMoves(storageOfPossibleMoves);

        mouseLeave(table);
    });
}


function removeYellowColorFromAllCells(boxArr) {
    for (let boxcell of boxArr) {
        boxcell.classList.remove("yellow");
    }
}

function possibleMoves() {
    storageOfPossibleMoves = {};


    return storageOfPossibleMoves;
}

