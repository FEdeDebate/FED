var usernames = ["A01723738", "A01723546", "A01723803", "A01723810"]; //list of people whose results we have

function start()
{
    url = document.URL
    studentID = url.substring(url.lastIndexOf("/") + 1);
    document.getElementById("comprobar").innerHTML = "Escribiste tu matricula bien? '" + studentID + "'"
    alert(window.location.href + studentID + ".pdf")
}