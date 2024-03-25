

StudentsList();

document.querySelector("#btnRefresh").addEventListener('click', function() {
    StudentsList();
});

function StudentsList() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("progress", function() {
        document.querySelector("#div-gallery").innerHTML = "<img style='width: 100px;' src='assets/loaders/Spinner-5.gif'>";
    });

    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4) {
            if (xhr.status == 200)
            {
                let divs = "";
                let result = JSON.parse(xhr.responseText);

                for(const student in result) {
                    divs += ` 
                            <div class="col-md-3 mt-2">
                                <div class="card">
                                    <img src="${result[student].photo}" class="card-img-top" style="height: 300px;">
                                    <div class="card-body">
                                    <h5 class="card-title">${result[student].name} - ${result[student].age}</h5>
                                    <p class="card-text">
                                        ${result[student].year} - ${result[student].section}
                                    </p>
                                    </div>
                                </div>
                            </div>
                            `;
                }

                    document.querySelector("#div-gallery").innerHTML = divs;

                
            } else {
                alert("failed to fetch data");
            }
        }
    }
    xhr.open("GET", "assets/db/students.json", true);
    xhr.send();
}


document.querySelector("#txtFilter").addEventListener('keyup', function() {
    StudentFilter();
});
function StudentFilter() {
    let Filter = document.querySelector("#txtFilter").value.toLowerCase();
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("progress", function() {
        document.querySelector("#div-gallery").innerHTML = "<img style='width: 100px;' src='assets/loaders/Spinner-5.gif'>";
    });

    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4) {
            if (xhr.status == 200)
            {
                let divs = "";
                let result = JSON.parse(xhr.responseText);

                for(const student in result) {
                    let name = result[student].name.toLowerCase();

                    let Position = name.indexOf(Filter);
                    console.log(Position);

                    if (Position < 0)
                        continue;

                    divs += ` 
                            <div class="col-md-3 mt-2">
                                <div class="card">
                                    <img src="${result[student].photo}" class="card-img-top" style="height: 300px;">
                                    <div class="card-body">
                                    <h5 class="card-title">${result[student].name} - ${result[student].age}</h5>
                                    <p class="card-text">
                                        ${result[student].year} - ${result[student].section}
                                    </p>
                                    </div>
                                </div>
                            </div>
                            `;
                }

                    document.querySelector("#div-gallery").innerHTML = divs;

                
            } else {
                alert("failed to fetch data");
            }
        }
    }
    xhr.open("GET", "assets/db/students.json", true);
    xhr.send();
}

function CallDogsApi() {
    let dogsxhr = new XMLHttpRequest();
    dogsxhr.addEventListener("loadstart", function() {
        document.querySelector("#dog-gallery").innerHTML = "<img style='width: 100px;' src='assets/loaders/Spinner-5.gif'>";
    });
    dogsxhr.onreadystatechange = function() {
        if (dogsxhr.readyState == 4) {
            if (dogsxhr.status == 200)
            {
                let dogres = JSON.parse(dogsxhr.responseText);
                let dogdiv = ` 
                            <div class="col-md-3">
                                <div class="card">
                                    <img src="${dogres.message}" class="card-img-top" style="height: 300px;">
                                    <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text">
                                        DOG
                                    </p>
                                    </div>
                                </div>
                            </div>
                            `;

                setTimeout(function() {
                    document.querySelector("#dog-gallery").innerHTML = dogdiv;
                }, 5000);
            } else {
                alert("failed to fetch data");
            }
        }
    }
    dogsxhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    dogsxhr.send();
}

// CallDogsApi();
// setInterval("CallDogsApi()", 2000); 