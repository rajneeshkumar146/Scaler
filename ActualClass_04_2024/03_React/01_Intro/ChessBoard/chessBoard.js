

window.addEventListener("load", function () {
    let table = document.querySelector("#table");
    let N = 8, M = 8;

    for (let ri = 0; ri < N; ri++) {
        let tr = document.createElement("tr");
        let isWhite = ri % 2 === 0 ? true : false;
        for (let ci = 0; ci < M; ci++) {
            let cell = this.document.createElement("td");
            cell.setAttribute("class", `box ${isWhite ? "white" : "black"}`);
            // cell.innerHTML = `${ri}-${ci}`;
            cell.setAttribute("data-index", `${ri}-${ci}`);
            tr.appendChild(cell);
            isWhite = !isWhite;
        }

        table.append(tr);
        hoverEffect(table, N, M);
    }
});

function hoverEffect(table, N, M) {
    let boxArr = document.querySelectorAll(".box");
    table.addEventListener("mouseover", function (e) {
        // console.log(e.target.dataset.index);

        let dataIndex = e.target.dataset.index;

        for(let boxCell of boxArr){
            boxCell.classList.remove("yellow");
        }

        let [curr_row, curr_col] = dataIndex.split("-").map((idx) => idx);
        storageOfPossibleMoves = {};
        colorMyPath(parseInt(curr_row), parseInt(curr_col), N, M, storageOfPossibleMoves);

        colorPossibleMoves(boxArr, storageOfPossibleMoves);
        mouseLeave(table, boxArr);
    });
}

function colorMyPath(curr_row, curr_col, N, M, storageOfPossibleMoves) {

    // let dir = [[-1, -1], [-1, 1], [1, -1], [1, 1]];   // for Bishop
    // let dir = [[-1, -1], [-1, 1], [1, -1], [1, 1], [0, 1], [0, -1], [1, 0], [-1, 0]];  // for queen
    // let maxRadius = N;  // N = 8

    let dir = [[1,2], [1,-2],[-1,2], [-1,-2], [2,1], [-2,1],[2,-1], [-2,-1]]  // move of knight
    let maxRadius = 1;

    for (let d of dir) {
        for (let radius = 0; radius <= maxRadius; radius++) {
            let r = curr_row + (radius * d[0]);
            let c = curr_col + (radius * d[1]);

            if (r >= 0 && c >= 0 && r < N && c < M) {
                let dataIndex = `${r}-${c}`;
                storageOfPossibleMoves[dataIndex] = true;
            }
        }
    }
}

function colorPossibleMoves(boxArr, storageOfPossibleMoves) {
    for (let i = 0; i < boxArr.length; i++) {
        let curr_dataIndex = boxArr[i].dataset.index;
        if (storageOfPossibleMoves[curr_dataIndex]) {
            boxArr[i].classList.add("yellow");
        }
    }
}

function mouseLeave(table, boxArr){
    table.addEventListener("mouseleave", function(){
        for(let i = 0; i < boxArr.length; i++){
            boxArr[i].classList.remove("yellow");
        }
    });
}