/*

491 + 120 + 4 = 615
820-615 = 205

TOTAL POINTS = 900 + 120 + 4 + 226 = 1250 POINTS

820 - 491 - 120 - 4 = How many locations we've found

*/
console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
console.log("Loaded script.js.")

const TOTAL_COMPLETION_POINTS = 1250;
const TOTAL_KOROKS = 900;
const TOTAL_SHRINES = 120;
const TOTAL_DIVINE_BEASTS = 4;
const ONE_COMPLETION_POINT = 0.08;
const TOTAL_KOROKS_USED = 441;

const STYLE_ELEMENT_ID = "theme";
const STYLE_DARK = "styles.css";
const STYLE_LIGHT = "stylelight.css";

function onSubmit() {
    let shrineCount = getShrinesCompleted();
    let dbeastCount = getDivineBeastsCompleted();
    let korokCount = getKorksFound();
    let currentCompletion = getCurrentCompletionPercentage();


    let output = document.getElementById("output");

    console.log("submitted: ", shrineCount, dbeastCount, korokCount, currentCompletion);

    let remainingKoroks = TOTAL_KOROKS - korokCount;
    let completedPoints = Math.round(currentCompletion / ONE_COMPLETION_POINT);
    let remainingShrines = (TOTAL_SHRINES - shrineCount);
    let remainingDBeasts = (TOTAL_DIVINE_BEASTS - dbeastCount);
    
    let undiscoveredLocations = TOTAL_COMPLETION_POINTS - completedPoints - remainingKoroks - remainingShrines - remainingDBeasts;
    
    
    console.log("Remaining Locations to discover:", undiscoveredLocations);

    let output_buffer = "";
    output_buffer = `Remaining Locations to discover: ${undiscoveredLocations}\n`;
    output_buffer += `Koroks remaining: ${remainingKoroks}\n`
    output_buffer += `Completion Points Remaining: ${TOTAL_COMPLETION_POINTS - completedPoints}\n`;

    output.innerText = output_buffer;
    console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}

function onclear(){

    document.getElementById("output").innerText = "";
    document.getElementById("outputadd").innerText = "";

    allInputElements = document.getElementsByTagName("input");
    inputElementsAsArray = Array.from(allInputElements);
    inputElementsAsArray.forEach((element) => {
        element.value = "";
    });

    saveAllValues();
    console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}

function onadd(){
    // Create a variable to represent our output object.
    let output = document.getElementById("outputadd");

    // Collect our input values.
    let spentKorokSeeds = parseFloat(getSpentKoroks());
    let unspentKorokSeeds = parseFloat(getUnspentKoroks());
    

    // Confirm that our input values are actually numbers.
    // If not, then clear our output, and exit.
    if (isNaN(spentKorokSeeds) || isNaN(unspentKorokSeeds)) {
        output.innerText = "";
        return;
    }

    // If we found 2 numbers, then let's add them together.
    let outputadd = spentKorokSeeds + unspentKorokSeeds;
    console.log(outputadd);
    
    // Check that our output is a valid number, and then display it,
    //   or clear the output field, if it's not.
    if (isNaN(outputadd)) {
        output.innerText = "";
    } else {
        localStorage.setItem("total_koroks", outputadd);
        output.innerText = `Total koroks found: ${outputadd}\n`;
        setKorksFound(outputadd);
        
    }
    console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}

// "This isn't so hard."
// 'This isn\'t so hard.'
// `This isn't so hard.`

// let whatHeSaid = "I don't know how to do that."

// let quote1 = "He said, \"I don't know how to do that.\"";
// let quote2 = 'He said, "I don\'t know how to do that."';
// let quote3 = `He said, "I don't know how to do that."`;

// console.log("Quote1", quote1);
// console.log("Quote2", quote2);
// console.log("Quote3", quote3);

// let quote4 = "He said, \"" + whatHeSaid + "\"";
// let quote5 = 'He said, "' + whatHeSaid + '"';
// let quote6 = `He said, "${whatHeSaid}"`;

// console.log("Quote4", quote4);
// console.log("Quote5", quote5);
// console.log("Quote6", quote6);



// if (condition == true) {
//     // do what we should if it's true
// } else {
//     // do what we should if it's false
// }



function onfill(){
    //document.getElementById("input_1").value = TOTAL_SHRINES;
    //document.getElementById("input_2").value = TOTAL_DIVINE_BEASTS;
    setShrinesCompleted(TOTAL_SHRINES);
    setDivineBeastsCompleted(TOTAL_DIVINE_BEASTS);
    setSpentKoroks(TOTAL_KOROKS_USED)
    saveAllValues();
    console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}

function saveAllValues(){
    // Populate a list of all input elements
    allInputElements = document.getElementsByTagName("input");

    // Turn that list into an Array
    inputElementsAsArray = Array.from(allInputElements);
    
    // For each HTML Input Element in the array, do  these things:
    inputElementsAsArray.forEach((element) => {
        element.dispatchEvent(new Event("change"));
    });
     console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}


function handleInputChange(changeEvent){
    // Get which element changed.
    target = changeEvent.target;
    
    // Get the changed element's name, so we can store the value in localStorage.
    key = target.name

    // Put the element's value into a variable called value.
    value = target.value;

    // Update localStorage with the changed value.
    localStorage.setItem(key, value);
     console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}


// When the window loads
function windowOnLoad(){

    // Populate a list of all input elements
    allInputElements = document.getElementsByTagName("input");

    // Turn that list into an Array
    inputElementsAsArray = Array.from(allInputElements);
    
    // For each HTML Input Element in the array, do  these things:
    inputElementsAsArray.forEach((element) => {

        // Add an Event Listener to the Change event, which calls the handleInputChange() function.
        element.addEventListener("change", handleInputChange);
        
        // Retrieve any value that was previously stored for this Input Element.
        storedValue = localStorage.getItem(element.name);

        // If we found a value in storage, set the input element to the stored value.
        if (storedValue != "") {
            element.value = storedValue;
        }
    });
 console.log("STOP EDITING MY CODE!!!!!!!!!!!!")

}

document.addEventListener("DOMContentLoaded", windowOnLoad);

let MapIsZoomed = false;
// let MapOriginalHeight = 0;
// let MapOriginalWidth = 0;
function zoomimage3(){
    let image3 = document.getElementById("image3");
    if (MapIsZoomed) {
        MapIsZoomed = false;
        // Zoom Out
        image3.height = image3.height / 2;
        image3.width = image3.width / 2;
    } else {
        MapIsZoomed = true;
        // Zoom In
        // MapOriginalHeight = image3.height;
        // MapOriginalWidth = image3.width;
        image3.height = image3.height * 2;
        image3.width = image3.width * 2;
    }

 console.log("STOP EDITING MY CODE!!!!!!!!!!!!")

}



function getShrinesCompleted(){
    return document.getElementById("shrinesCompleted").value;
}
function setShrinesCompleted(newValue){
    document.getElementById("shrinesCompleted").value = newValue;
}


function getDivineBeastsCompleted(){
    return document.getElementById("divineBeastsCompleted").value;
}
function setDivineBeastsCompleted(newValue){
    document.getElementById("divineBeastsCompleted").value = newValue;
}


function getKorksFound(){
    return document.getElementById("koroksFound").value;
}
function setKorksFound(newValue){
    document.getElementById("koroksFound").value = newValue;
}


function getCurrentCompletionPercentage(){
    return document.getElementById("currentCompletionPercentage").value;
}
function setCurrentCompletionPercentage(newValue){
    document.getElementById("currentCompletionPercentage").value = newValue;
}

function getSpentKoroks(){
    return document.getElementById("spentKorokSeeds").value;
}
function setSpentKoroks(newValue){
    document.getElementById("spentKorokSeeds").value = newValue;
}

function getUnspentKoroks(){
    return document.getElementById("unspentKorokSeeds").value;
}
function setUnspentKoroks(newValue){
    document.getElementById("unspentKorokSeeds").value = newValue;
}















function darklighttoggle(){
    /*
        What do we want to do?
        We are reacting to a click event.
        We want to change the stylesheet used by the html document.
        The page will be in either light mode or dark mode.
        When the user clicks and triggers
        To do this, first, we will ne this event handler, we will change to whichever mode it currently is not.
        Eg. If it is dark mode, we will make it light mode.
            And if it is light mode, we will make it dark mode.
ed to get a reference to the html element that controls the stylesheet.
            I've located the <link></link> tag which sets the stylesheet, and given it an id="theme"
            So now, we can get this element with:
                const theme = document.getElementById("theme");
        Once we have the theme element, we need to update its "href" attribute.
            We can do this by assigning a new value:
                theme.setAttribute("href", <new stylesheet>)

    */
    const theme = document.getElementById(STYLE_ELEMENT_ID);
    const STYLESHEET_ATTRIBUTE = "href";

    const current_style = theme.getAttribute(STYLESHEET_ATTRIBUTE);

    if (current_style == STYLE_DARK) {
        theme.setAttribute(STYLESHEET_ATTRIBUTE, STYLE_LIGHT);
    } else {
        theme.setAttribute(STYLESHEET_ATTRIBUTE, STYLE_DARK);
    }


    // const newStyle = (current_style == STYLE_DARK) ? STYLE_LIGHT : STYLE_DARK;
    // theme.setAttribute(STYLESHEET_ATTRIBUTE, newStyle);

    console.log("STOP EDITING MY CODE!!!!!!!!!!!!")
}
