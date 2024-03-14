let Items  = [];
document.getElementById("btn-log").addEventListener('click', function() {
    let EmployeeID = document.getElementById("txtEmployeeID").value;
    let EmployeeName = document.getElementById("txtEmployeeName").value;
    let WorkingHours = document.getElementById("txtWorkingHours").value;
    console.log("Employee ID: " +EmployeeID + " Employee Name: "+ EmployeeName + " Working Hours: "+ WorkingHours);

    if(EmployeeID=="" || EmployeeName=="" || WorkingHours ==""){
        alert("Employeed ID and Employee Name and Working Hours are required fields");

    }else{
    Items.push( [EmployeeID, EmployeeName, WorkingHours] );
    DrawList();
}
});

function remove(index) {
    Items.splice(index, 1);
    DrawList();
}

function DrawList() {
    let List = "";
    let total = 0
    console.log("Items length: "+ Items.length);
    for(let x = 0; x < Items.length; x++){
        total = parseInt(total)+ parseInt(Items[x][2]);
    }
    for(let x = 0; x < Items.length; x++)
        List += "<tr></tr><td>"+ Items[x][0]+" </td><td> "+ Items[x][1]+" </td><td>"+ Items[x][2]+"</td><td><button class='btn btn-danger' onclick='remove("+x+")'>Remove</button></td>";
    document.getElementById("tableWorkers").innerHTML = "<table id='workers'><td colspan='4'><h5>List of Workers</h5></td><tr></tr><td>ID</td><td>Name</td><td>Hours</td><td>ACTION</td>"+List+"<tr></tr><td>TOTAL<td><td colspan='2'>"+total+"</td></table>";
}