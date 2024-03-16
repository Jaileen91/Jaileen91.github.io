let Products = [];

document.getElementById("btnLog").addEventListener("click", function () {
  let EmpIndex = document.getElementById("txtIndex").value;
  let SkuNum = document.getElementById("txtSku").value;
  let ItemName = document.getElementById("txtItemName").value;
  let ItemPhoto = document.getElementById("txtItemPhoto").value;
  let ItemPrice = document.getElementById("txtItemPrice").value;
  console.log("EmpIndex: "+ EmpIndex +" sku: "+ SkuNum+ " itemName: "+ItemName + " itemPhoto: "+ItemPhoto + " itemPrice: "+ ItemPrice);

  if (EmpIndex == "") {
    EmpIndex ="1";
    if (SkuNum == "" || ItemName == "" || ItemPhoto == "" || ItemPrice =="") {
      alert("Please fill in the required fields!");
      return;
    }

    if (isExists(SkuNum) == false) {
      alert("S.K.U # already exists");
      return;
    }
    console.log("EmpIndex: "+ EmpIndex +" sku: "+ SkuNum+ " itemName: "+ItemName + " itemPhoto: "+ItemPhoto + " itemPrice: "+ ItemPrice);

    let ObjEmp = {
      empIndex:EmpIndex,
      skuNum: SkuNum,
      itemName: ItemName,
      itemPhoto: ItemPhoto,
      itemPrice: ItemPrice,
    };
    Products.push(ObjEmp);
  } else {
    let ObjEmp = {
      empIndex:EmpIndex,
      skuNum: SkuNum,
      itemName: ItemName,
      itemPhoto: ItemPhoto,
      itemPrice: ItemPrice,
    };
    Products[EmpIndex] = ObjEmp;
  }

  document.getElementById("txtIndex").value = "";
  document.getElementById("txtSku").value = "";
  document.getElementById("txtItemName").value = "";
  document.getElementById("txtItemPhoto").value = "";
  document.getElementById("txtItemPrice").value = "";

  document.getElementById("btnLog").innerText = "Add Item";
  DrawTable1();

});

function DrawTable() {
  let TableBody = "<tr>";
  for (let x = 0; x < Products.length; x++) {
    let quality =1;
    let total =quality * parseInt(Products[x].itemPrice);
    TableBody += "<tr>";
    TableBody += "<td>" + Products[x].empIndex + "</td>";
    TableBody += "<td>" + Products[x].itemPhoto + "</td>";
    TableBody += "<td>" + Products[x].skuNum + "</td>";
    TableBody += "<td>" + Products[x].itemName + "</td>";
    TableBody += "<td>" + Products[x].itemPrice + "</td>";
    TableBody += "<td>" + quality+ "</td>";
    TableBody += "<td>" + total+  "</td>";
    TableBody +=`<td>
                <button class='btn btn-danger btn-sm' onclick='minus(` +
     quality+','+x +
      `);'>Minus</button>
                <button class='btn btn-warning btn-sm' onclick='plus(` +
                quality+','+x +
      `);'>Plus</button>
            </td>`;
    TableBody += "</tr>";
  }

  document.getElementById("tableBody").innerHTML = TableBody;
}


function DrawTable1() {
    let TableBody1 = "<tr>";
    for (let x = 0; x < Products.length; x++) {
      TableBody1 += "<tr>";
      TableBody1 += "<td>" + "<img src='"+Products[x].itemPhoto+"' width='250' height='250'>" +"</td>";
      TableBody1 += "</tr>";
      TableBody1 += "<tr>";
      TableBody1 += "<td>" + Products[x].itemName + "</td>";
      TableBody1 += "</tr>";
      TableBody1 += "<tr>";
      TableBody1 += "<td>" + Products[x].itemPrice + "</td>";
      TableBody1 += "</tr>";
      TableBody1 += "<tr>";
      TableBody1 +=`<td>
      <button class='btn btn-success btn-sm' onclick='cart(` +
        x +
        `);'>Cart</button>
                  <button class='btn btn-warning btn-sm' onclick='edit(` +
        x +
        `);'>Modify</button>
                  <button class='btn btn-danger btn-sm' onclick='remove1(` +
        x +
        `);'>Remove</button>
              </td>`;
      TableBody1 += "</tr>";
    }
  
    document.getElementById("tableBody1").innerHTML = TableBody1;
  }

function minus(quality, x) {
    quality = quality-1;
    if(quality!=0){
    let TableBody = "<tr>";
    let total =quality * parseInt(Products[x].itemPrice);
    TableBody += "<tr>";
    TableBody += "<td>" + Products[x].empIndex + "</td>";
    TableBody += "<td>" + Products[x].itemPhoto + "</td>";
    TableBody += "<td>" + Products[x].skuNum + "</td>";
    TableBody += "<td>" + Products[x].itemName + "</td>";
    TableBody += "<td>" + Products[x].itemPrice + "</td>";
    TableBody += "<td>" + quality+ "</td>";
    TableBody += "<td>" + total+  "</td>";
    TableBody +=`<td>
                <button class='btn btn-danger btn-sm' onclick='minus(` +
    quality+','+x +
      `);'>Minus</button>
                <button class='btn btn-warning btn-sm' onclick='plus(`+quality+','+x +
      `);'>Plus</button>
            </td>`;
    TableBody += "</tr>";
  document.getElementById("tableBody").innerHTML = TableBody;
}else{
    Products.splice(x, 1);
    DrawTable();
}
}

function plus(quality, x) {
    
    let TableBody = "<tr>";
    quality=quality+1;
    let total =quality * parseInt(Products[x].itemPrice);
    console.log("quality: "+ quality+"total: "+ total);
    TableBody += "<tr>";
    TableBody += "<td>" + Products[x].empIndex + "</td>";
    TableBody += "<td>" + Products[x].itemPhoto + "</td>";
    TableBody += "<td>" + Products[x].skuNum + "</td>";
    TableBody += "<td>" + Products[x].itemName + "</td>";
    TableBody += "<td>" + Products[x].itemPrice + "</td>";
    TableBody += "<td>" + quality+ "</td>";
    TableBody += "<td>" + total+  "</td>";
    TableBody +=`<td>
                <button class='btn btn-danger btn-sm' onclick='minus(` +
    quality+','+x +
      `);'>Minus</button>
                <button class='btn btn-warning btn-sm' onclick='plus(`+quality+','+x +
      `);'>Plus</button>
            </td>`;
    TableBody += "</tr>";
  document.getElementById("tableBody").innerHTML = TableBody;
}

function remove1(index) {
    Products.splice(index, 1);
    DrawTable();
    DrawTable1();
  }

function cart(index) {
  DrawTable();
  }
  

function edit(index) {
  let EditInfo = Products[index];
  document.getElementById("btnLog").innerText = "Update Products";
  document.getElementById("txtIndex").value = index;
  document.getElementById("txtSku").value = EditInfo.skuNum;
  document.getElementById("txtItemName").value = EditInfo.itemName;
  document.getElementById("txtItemPhoto").value = EditInfo.itemPhoto;
  document.getElementById("txtItemPrice").value = EditInfo.itemPrice;
}

function isExists(idno) {
  for (let x = 0; x < Products.length; x++) {
    if (Products[x].skuNum == idno) return false;
  }

  return true;
}
