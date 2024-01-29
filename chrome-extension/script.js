document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', main);
});
function main() {
    var bkg = chrome.extension.getBackgroundPage();
    var source = document.getElementById('source').value;
    document.getElementById("result").innerHTML = source;
    bkg.console.log("TEST")
}