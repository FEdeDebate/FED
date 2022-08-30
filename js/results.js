var usernames = [
    { "ID" : "A01723738", "Name" : "Martina Rodríguez" },
    { "ID" : "A01723546", "Name" : "Carolina Mercado González" },
    { "ID" : "A01723803", "Name" : "Jorge Luis Martínez Villarreal" },
    { "ID" : "A01723810", "Name" : "Sebastián Rodríguez Ortiz" }
]; 

var errorMessage = document.getElementById("errorMessage");
document.getElementById("search").addEventListener("keydown", function (e) { if (e.code === "Enter") redirect(); } );

function redirect() {

    const studentID = document.querySelector('input').value.replace(/[^A-z0-9]/gi, '').toUpperCase(); //get the string of text after the last / in the URL
    var similarities = []; //array of percentage of similarities between list of students and entered student


    // For every student we have, run the similarity calculation, and push it to the similarities array
    for (let i = 0; i < usernames.length; i++) {
        var perc=Math.round(similarity(studentID,usernames[i].ID)*10000)/100; //calculate the percentage of similarity between the entered student and the current student
        similarities.push(perc) //push the percentage to the similarities array
    }
    var max = Math.max(...similarities) //get the value of the highest similarity
    var index = similarities.indexOf(max) //get the position of the highest similarity, which equals the position of the person whose ID is closest


    // If the ID entered matches one of the IDs in the list, redirect to the results page of that person
    if (usernames.ID.includes(studentID)) window.location.href += "2022/" + studentID + ".pdf";

    // If the user didn't enter their ID correctly, but there's an ID that is 75% or more similar, they can be redirected to their result if they decide to.
    else if ((max >= 75)) displayErrorMessage(
        "Ups! La matricula que escribiste no está en nuestro sistema. Querías decir <a href=\"" + window.location.href + "2022/" + usernames[index].ID + ".pdf\">" + usernames[index].ID + " (" + usernames[index].Name + ")?");
    // If the user didn't enter anything into the search bar, ask them to enter their ID.
    else if (studentID == "") displayErrorMessage("Porfavor escribe tu matrícula.");
    // If the user entered an ID that is not in the list, tell them to try again.
    else displayErrorMessage("Ups! No encontramos tu matrícula. Intenta de nuevo.");
}

function displayErrorMessage(text) {
    errorMessage.innerHTML = text;
    errorMessage.style.color = "#C45886";
    errorMessage.style.backgroundColor = "#3D202F";
    errorMessage.style.border = "8px solid #3D202F";
}

function similarity(string1, string2)
{
    var longer = string1;
    var shorter = string2;
    if (string1.length < string2.length) longer = string2; shorter = string1;
    var longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(string1, string2) 
{
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= string1.length; i++) 
    {
        var lastValue = i;
        for (var j = 0; j <= string2.length; j++) 
        {
            if (i == 0)
            costs[j] = j;
            else
            { if (j > 0) {
                    var newValue = costs[j - 1];
                    if (string1.charAt(i - 1) != string2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue; } }
        } if (i > 0) costs[string2.length] = lastValue;
    } return costs[string2.length];
}