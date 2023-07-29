$(document).ready(() => {
    $("#resume").click(() => {
        const link = document.createElement('a');
        link.href = "../CV/Divyen_CV.pdf";
        // link.download = "cv.pdf";    // optional
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
