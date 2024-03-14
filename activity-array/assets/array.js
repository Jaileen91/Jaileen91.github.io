let Items  = [];

document.getElementById("btn-log").addEventListener('click', function() {
    let EmployeeID = document.getElementById("txtEmployeeID").value;
    let EmployeeName = document.getElementById("txtEmployeeName").value;
    let WorkingHours = document.getElementById("txtWorkingHours").value;
    console.log("EmployeeID: " +EmployeeID + " EmployeeName: "+ EmployeeName + " WorkingHours: "+ WorkingHours);

    Items.push( [EmployeeID, EmployeeName, WorkingHours] );
    DrawList();
});

function remove(index) {
    Items.splice(index, 2);
    DrawList();
}

function DrawList() {
    let List = "";
    console.log("Items length: "+ Items.length);
    for(let x = 0; x < Items.length; x++)
        List += "<li class='mt-1'>"+ Items[x][0] + " | " + Items[x][1] + " | " + Items[x][2] + "<button class='btn btn-danger' onclick='remove("+x+")'>Remove</button></li>";

    document.getElementById("ul-list").innerHTML = List;
}