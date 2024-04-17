// Statement 1.

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () {
        console.log(this.step);
    }
};

// up fn on ladder
ladder.up();  // step: 1

// up fn on ladder
ladder.up();  // step: 2

ladder.up(); // step: 3
ladder.down(); // step: 2
ladder.showStep();  // 2


// Statement 2.
let ladder2 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

// var thisRef = ladder2.up();
// thisRef.showStep();
ladder2.up().up().up().up().up().up().down().showStep();
