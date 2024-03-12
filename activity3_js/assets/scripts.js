let Multiply = document.getElementById("btnMultiply");

    Multiply.addEventListener('click', function() {
        let Test = document.getElementById("txtTest").value;
        let Divs = "";

        for(var x = 1; x <= Test; x++) {
            Divs += "<div class='text-center rounded-circle bg-primary m-1' style='width: 40px; height: 40px;'>" + x + "</div>";
        }
        
        document.getElementById("div-wrapper").innerHTML = Divs;
    });
