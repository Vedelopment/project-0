$(document).on("ready", function() {
  start.addEventListener("click", boxOneDrop);
    console.log("sanity check!");
      console.log("myFunction")
      function boxOneDrop() {
          myVar = setTimeout(
                function boxOneDrop() {
                $("#one").css("background-color","red");
                console.log("box one drop");}
                , 700);
                boxOneEmpty();}
      function boxOneEmpty() {
          myVar = setTimeout(
                function boxOneEmpty() {
                $("#one").css("background-color","black");
                console.log("box one empty");
                }
                , 1400);
                boxTwoDrop();
      };
      ///////////////////////   BOX TWO   /////////////////////////////
      function boxTwoDrop() {
          myVar = setTimeout(
                function boxTwoDrop() {
                $("#two").css("background-color","red");
                console.log("box two drop");}
                , 1400);
                boxTwoEmpty();}
      function boxTwoEmpty() {
          myVar = setTimeout(
                function boxTwoEmpty() {
                $("#two").css("background-color","black");
                console.log("box two empty");
                }
                , 2100);
                boxThreeDrop();
      };
      ///////////////////////   BOX THREE   /////////////////////////////
      function boxThreeDrop() {
          myVar = setTimeout(
                function boxThreeDrop() {
                $("#three").css("background-color","red");
                console.log("box three drop");}
                , 2100);
                boxThreeEmpty();}
      function boxThreeEmpty() {
          myVar = setTimeout(
                function boxThreeEmpty() {
                $("#three").css("background-color","black");
                console.log("box three empty");
                }
                , 2800);
                boxFourDrop();
      };
      ///////////////////////   BOX FOUR   /////////////////////////////
      function boxFourDrop() {
          myVar = setTimeout(
                function boxFourDrop() {
                $("#four").css("background-color","red");
                console.log("box four drop");}
                , 2800);
                boxFourEmpty();}
      function boxFourEmpty() {
          myVar = setTimeout(
                function boxFourEmpty() {
                $("#four").css("background-color","black");
                console.log("box four empty");
                }
                , 3500);
                boxFiveDrop();
      };
      // ///////////////////////   BOX FIVE   /////////////////////////////
      function boxFiveDrop() {
          myVar = setTimeout(
                function boxFiveDrop() {
                console.log("box five drop");
                $("#five").css("background-color","red");
                //boxOneDrop();
                }
                , 3500);
      };
});
