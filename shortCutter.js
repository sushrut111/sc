var urlPath = window.location.hash;
// get the leaf path 
var shortUrlToBeUsed = urlPath

var baseUrl = "https://github.com/sushrut111"

console.log(shortUrlToBeUsed)

switch(shortUrlToBeUsed){
    case "cowin":
        window.location.assign(`${baseUrl}/cowin-automation-extn`);
    case "cvq":
        window.location.assign(`https://sushrut111.github.io/corona-virus-questionnaire/`);
    case "autoresp":
        window.location.assign(`${baseUrl}/requests-modifier`);
    default:
        document.body = "NO SHORTCUT FOUND";
}