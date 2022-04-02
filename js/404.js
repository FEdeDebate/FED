function start()
{
    window.location.href += ".pdf"
    url = document.URL
    studentID = url.substring(url.lastIndexOf("/") + 1);
    document.getElementById("comprobar").innerHTML = "Escribiste tu matricula bien? '" + studentID + "'"
}