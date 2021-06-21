
//input
var inputTxt = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#txt-output")


serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

//processing

function constructURL(input){
    var finaURL = serverURL + "?" + "text=" + input;
    console.log("Inside contruct URL function, final URL: " + finaURL)
    return finaURL
}

function errorHandler(error){
    console.log("error = " + error)
    alert("There has been a server side error: " + error)
}

function clickEventhandler(){
    var inputText = inputTxt.value;
    console.log(" inside click Event Hand, innerText: " + inputText)
    //call server
    fetch(constructURL(inputText))
    .then(response =>response.json())
    .then(json => {
        var translatedText = json.contents.translated
        console.log("translatedText: " + translatedText)
        output.innerText = translatedText
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click",  clickEventhandler)



   


