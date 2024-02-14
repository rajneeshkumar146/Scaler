// -------------------------Statement 1-------------------------
// import {a} from "./lib_module.js";
// console.log(a);

// import { fn } from "./lib_module";

// import {fn} from "./lib_module.js";
// fn();

// -------------------------Statement 2-------------------------

import { fn, a } from "./lib_module.js";
// import { fn} from "./lib_module.js";
// import { a } from "./lib_module.js";
fn();
console.log(a);
