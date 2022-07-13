const { ipcRenderer } = require('electron');

document.getElementById("close_window").addEventListener("click", () => {
    ipcRenderer.send("close_window");
});

// document.getElementById("confirm_fullscreen").addEventListener("click", () => {
//     ipcRenderer.send("confirm_fullscreen");
// });

ipcRenderer.on("log", () => {
    console.log('log log');
});

// document.getElementById("confirm_normal_screen").addEventListener("click", () => {
//     ipcRenderer.send("confirm_normal_screen");
// });