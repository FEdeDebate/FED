var usernames = ["A01723738", "A01723546", "A01723803", "A01723810"]; //list of people on which we have content

function start()
{
    url = document.URL
    studentID = url.substring(url.lastIndexOf("/") + 1);
    document.getElementById("comprobar").innerHTML = "Escribiste tu matricula bien? '" + studentID + "'"
    if (usernames.includes(studentID))
    {
        window.location.href += studentID + ".pdf";
    }
}