//$(document).on("ready", function() {
  console.log("sanity check!");
  function boxDrop(box) {
    var myVar;
    function myFunction() {
        myVar = setTimeout(boxDrop, 1000);
    }
    myFunction();
    $("#one").css("background-color","red");
  };
  boxDrop();
//});
