
$(document).ready(function() {

  $("#btnHide").on('click' ,function(evt) {  
    console.log(evt);
    $("#div-element").addClass("text-white");
  });

  $("#btnShow").on('click' ,function() {
    // let Value = document.querySelector("#txtValue").value;
    let Value = $("#txtValue").val();
    $("#div-element").html("<b>text-white</b>");

    console.log(Value);
    
  });
});

