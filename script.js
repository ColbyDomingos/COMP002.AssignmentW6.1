// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


window.onload = function () { //Initializes when the window of the website loads
    const savedName = localStorage.getItem("name"); //gets the saved name from what I set it as
    const savedColor = localStorage.getItem("color"); //gets the saved color from what I set it as

    if (savedName){ //if there IS a saved name
        document.getElementById("greeting").innerText = "Hello ${savedName}"; //set the greeting with the name
        document.getElementById("name").value = savedName; //set the name to the saved name
    }
    if (savedColor){ //if there IS a saved color
        document.body.style.backgroundColor = savedColor; //set the body background to the saved color they set
        document.getElementById("color").value = savedColor; //set the color to the saved color
    }
}