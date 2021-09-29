var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var OutputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL+"?"+"text="+input
}

function errorHandler(error){
console.log("error occured",error);
alert("Server down!! Try later")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            OutputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}; 

btnTranslate.addEventListener("click",clickHandler)