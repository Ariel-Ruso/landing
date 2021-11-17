const imgMain = document.getElementById('imgMain');
const icon = document.getElementById('icon');
const h1 = document.getElementById('h1');

icon.onclick = function() {
    h1.style.color = "red";
    imgMain.style.width = "70%";

}