// .share (flex)
// .main-info (hidden)
let button = document.querySelector("#shareButton")
let share = document.querySelector(".share")
let mainInfo = document.querySelector(".main-info")

button.addEventListener("click", () => {
    test();
})

function test() {
    if (share.style.display === 'none') {
        share.style.display = "flex";
        mainInfo.style.visibility = "hidden";
    } else {
        share.style.display = "none";
        mainInfo.style.visibility = "visible";
    }
}