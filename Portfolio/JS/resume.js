$(document).ready(() => {
    $("#resume").click(() => {
        const link = document.createElement('a');
        link.href = "https://gujaratuniversityac-my.sharepoint.com/:w:/g/personal/mca2023_6_gujaratuniversity_ac_in/EYk0U7vHSAxEtCWsLgeA-ZwB3nzKiku3Oyw7I2sL_ClHdg?e=XaxcbO";
        link.style.display = "none";
        link.download = "Divyen.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
