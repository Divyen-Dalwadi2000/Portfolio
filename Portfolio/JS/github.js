
/*
var git = document.querySelector("#git");

git.addEventListener("click", () => {
    var gitHubUrl = "https://github.com/Divyen-Dalwadi2000";
    window.open(gitHubUrl, "_blank");
});
*/


// using j_Query
/*
$(document).ready(function () {
    $("#git").click(function () {
        var gitHubUrl = "https://github.com/Divyen-Dalwadi2000";
        window.open(gitHubUrl, "_blank");
    });
});
*/

// using j_Query
// using arrow function
$(document).ready(() => {
    $("#git").click(() => {
        var gitHubUrl = "https://github.com/Divyen-Dalwadi2000";
        window.open(gitHubUrl, "_blank");
    });
});