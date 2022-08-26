var srch = document.getElementById("search");
srch.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        redirect();
    }
});

var alertExists = false;
var close;
var i;
var usernames = ["A01723738", "A01723546", "A01723803", "A01723810"]; //list of people on which we have content

function redirect() {

    var errorMessage = document.getElementById("errorMessage");

    const studentID = document.querySelector('input').value.replace(/[^A-z0-9]/gi, '').toUpperCase(); //get the string of text after the last / in the URL
    var similarities = []; //array of percentage of similarities between list of students and entered student

    for (let i = 0; i < usernames.length; i++) //for every student we have, run the similarity calculation, and push it to the similarities array
    {
        var perc=Math.round(similarity(studentID,usernames[i])*10000)/100;
        similarities.push(perc)
    }
    var max = Math.max(...similarities) //get the value of the highest similarity
    var index = similarities.indexOf(max) //get the position of the highest similarity, which equals the position of the person whose ID is closest
    var logging = "similarities: " + similarities + "\nmax: " + max + "\nindex: " + index;
    console.log(logging);


    if (usernames.includes(studentID)) //if the ID entered matches the ID with the highest similarity, then the user entered their ID correctly, and they can be diredected to their result
    {
        window.location.href += "2022/" + studentID + ".pdf";
    }
    else if ((max >= 75)) //if the user didn't enter their ID correctly, but there's an ID that is 75% or more similar, they can be redirected to their result if they decide to
    {
        document.querySelector('input').select()
        errorMessage.innerHTML = "Ups! La matricula que escribiste no está en nuestro sistema. Querías decir <a href=\"" + window.location.href + "2022/" + usernames[index] + ".pdf\">" + usernames[index] + "?";
        makeErrorMessageVisible();
    }
    else if (studentID == "")
    {
        errorMessage.innerHTML = "Porfavor escribe tu matrícula.";
        makeErrorMessageVisible();
    }
    else
    {
        errorMessage.innerHTML = "Ups! No encontramos tu matrícula. Intenta de nuevo.";
        makeErrorMessageVisible();
    }
}

function makeErrorMessageVisible() {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.style.color = "#C45886";
    errorMessage.style.backgroundColor = "#3D202F";
    errorMessage.style.border = "8px solid #3D202F";

}

function similarity(s1, s2)
{
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length)
    {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength === 0)
    {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) 
{
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) 
    {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) 
        {
            if (i == 0)
            costs[j] = j;
            else
            {
                if (j > 0)
                {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue),
                        costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function gotolink(url) {
    window.open(url)
}