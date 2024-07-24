// const {exec} = require("child_process");
// Exec -> can run any shell command

// exec("ls -lh", (error, stdout, stderr) => {
//     if(error){
//         console.log(`error: ${error.message}`)
//     }else{
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//     }
// });


// // Make sure you provided the execute permission to your script file: chmod +x script.sh
// const { execFile } = require("child_process");
// const scriptPath = "./script.sh";

// const args = ["args1", "args2"];

// execFile(scriptPath, args, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   } else {
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//   }
// });

const { spawn } = require("child_process");
spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "https://www.youtube.com",
  "--incognito",
]);







