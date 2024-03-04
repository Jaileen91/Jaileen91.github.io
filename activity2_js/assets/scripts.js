let txtsubject1 = document.getElementById("subject1-english");

txtsubject1.addEventListener('click', function () {
    let english = document.getElementById("subject1-english").value;
    let total = parseInt(english);
    document.getElementById("total-grades").value = total;
});



