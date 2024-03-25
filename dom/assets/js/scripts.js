 document.getElementById("btnRed").addEventListener("click", function () {
  document.body.style.color = "#dc3545";
 });

 let Li = document.getElementsByTagName("li");
 for (var x = 0; x < Lis.length; x++) {
   Lis[x].style.color = "red";
 }

 let LiClass = document.getElementsByClassName("li-highlight");
 for (const li of LiClass) {
   li.style.backgroundColor = "black";
 }

 let Btn = document.querySelector(""); // first instance

 let Lis = document.querySelectorAll("button, li"); // all instances
 console.log(Lis);

 document.querySelector("#btnRed").addEventListener("click", function () {
  document.querySelector("li:first-child").classList.add("text-danger");
 });
