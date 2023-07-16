// $(document).ready(() => {
//     $(".home").click(() => {
//         var home = "../html/home.html";
//         window.open(home, "_self");
//     });

//     $(".about").click(() => {
//         var about = "../html/about.html";
//         window.open(about, "_self");
//     });

//     $(".service").click(() => {
//         var service = "../html/services.html";
//         window.open(service, "_self");
//     });

//     $(".project").click(() => {
//         var project = "../html/project.html";
//         window.open(project, "_self");
//     });

//     $(".contact").click(() => {
//         var contact = "../html/contact.html";
//         window.open(contact, "_self");
//     });

// });




$(document).ready(() => {
    const pages = {
        ".home": "../html/home.html",
        ".about": "../html/about.html",
        ".service": "../html/services.html",
        ".project": "../html/project.html",
        ".contact": "../html/contact.html"
    };

    Object.entries(pages).forEach(([selector, page]) => {
        $(selector).click(() => window.open(page, "_self"));
    });
});
