// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit" , myfunction);
var studentArr = JSON.parse(localStorage.getItem("schedule")) || [];

function myfunction(){
    event.preventDefault();

    var teamdetail ={
        matchNum : document.querySelector("#matchNum").value,
        teamA : document.querySelector("#teamA").value,
        teamB : document.querySelector("#teamB").value,
        date  : document.querySelector("#date").value,
        venue : document.querySelector("#venue").value,
    };
    studentArr.push(teamdetail);

    localStorage.setItem("schedule" , JSON.stringify(studentArr))
   

    // document.querySelector("#matchNum").value = "";
    // document.querySelector("#teamA").value = "";
    // document.querySelector("#teamB").value = "";
    // document.querySelector("#date").value = "";
    // document.querySelector("#venue").value = "";

    window.location.href = "matches.html"
}