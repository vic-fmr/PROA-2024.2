document.getElementById('radio1').checked = true;

setInterval( function () { 
    nextImage();},4000);

let count = 1;
function nextImage() {
    count++;
    if (count > 5) {
        count = 1
    }
    document.getElementById("radio" + count).checked = true
}