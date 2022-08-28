var usernames = ["A01723738", "A01723546", "A01723803", "A01723810"]; //list of people whose results we have

function start(typeOfFail)
{
    url = document.URL
    urlEnding = url.substring(url.lastIndexOf("/") + 1);
    if (typeOfFail == "year") document.getElementById("comprobar").innerHTML = "Escribiste el año bien? '" + urlEnding + "'"
    else if (typeOfFail == "id") document.getElementById("comprobar").innerHTML = "Escribiste tu matricula bien? '" + urlEnding + "'"
    else document.getElementById("comprobar").innerHTML = "Escribiste el URL bien?"
    if (usernames.includes(urlEnding)) { window.location.href += ".pdf"; }
}