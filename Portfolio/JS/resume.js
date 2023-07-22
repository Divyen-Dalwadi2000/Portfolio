$(document).ready(() => {
    $("#resume").click(() => {
        const link = document.createElement('a');
        link.href = "F:\Project\portfolio\cv.pdf";
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
