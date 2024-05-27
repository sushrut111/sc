
window.onload = () => {
    var shortUrlToBeUsed = window.location.hash;
    // get the leaf path 
    var baseUrl = "https://github.com/sushrut111"
    
    console.log(shortUrlToBeUsed)
    
    switch(shortUrlToBeUsed){
        case "#cowin":
            window.location.assign(`${baseUrl}/cowin-automation-extn`);
        case "#cvq":
            window.location.assign(`https://sushrut111.github.io/corona-virus-questionnaire/`);
        case "#autoresp":
            window.location.assign(`${baseUrl}/requests-modifier`);
        default:
            window.document.body.textContent = "NO SHORTCUT FOUND";
    }
}
