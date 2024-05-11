let wns = "<div class=\"title-line\"><h1>W</h1><h1>A</h1></div><div class=\"title-line\"><h1>N</h1><h1>A</h1><h1>I</h1></div><div class=\"title-line\"><h1>S</h1><h1>A</h1></div>";
let lsm = "<div class=\"title-line\"><h1>L</h1><h1>I</h1></div><div class=\"title-line\"><h1>S</h1><h1>H</h1><h1>U</h1></div><div class=\"title-line\"><h1>M</h1><h1>E</h1><h1>N</h1><h1>G</h1></div>";

let titleBox = document.getElementById("title-box");
titleBox.addEventListener("mouseenter", mouseEnter);
titleBox.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    if(titleBox.innerHTML != wns) {
        titleBox.innerHTML = wns;
    }
}

function mouseLeave() {
    titleBox.innerHTML = lsm;
}