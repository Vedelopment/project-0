console.log("sanity check!");

$(document).on("ready", function() {

  start.addEventListener("click", boxOneDrop);
      console.log("myFunction")
      function boxOneDrop() {
          myVar = setTimeout(
                function boxOneDrop() {
                $("#one").css("background-color","rgb(250, 0, 0)");
                console.log("box one drop");}
                , 700);
                boxOneEmpty();}

      function boxOneEmpty() {
          myVar = setTimeout(
                function boxOneEmpty() {
                $("#one").css("background-color","rgb(0, 0, 0)");
                console.log("box one empty");
                }
                , 1400);
                boxTwoDrop();
      };
      ///////////////////////   BOX TWO   /////////////////////////////
      function boxTwoDrop() {
          myVar = setTimeout(
                function boxTwoDrop() {
                $("#two").css("background-color","rgb(250, 0, 0)");
                console.log("box two drop");}
                , 1400);
                boxTwoEmpty();}

      function boxTwoEmpty() {
          myVar = setTimeout(
                function boxTwoEmpty() {
                $("#two").css("background-color","rgb(0, 0, 0)");
                console.log("box two empty");
                }
                , 2100);
                boxThreeDrop();
      };
      ///////////////////////   BOX THREE   /////////////////////////////
      function boxThreeDrop() {
          myVar = setTimeout(
                function boxThreeDrop() {
                $("#three").css("background-color","rgb(250, 0, 0)");
                console.log("box three drop");}
                , 2100);
                boxThreeEmpty();}

      function boxThreeEmpty() {
          myVar = setTimeout(
                function boxThreeEmpty() {
                $("#three").css("background-color","rgb(0, 0, 0)");
                console.log("box three empty");
                }
                , 2800);
                boxFourDrop();
      };
      ///////////////////////   BOX FOUR   /////////////////////////////
      function boxFourDrop() {
          myVar = setTimeout(
                function boxFourDrop() {
                $("#four").css("background-color","rgb(250, 0, 0)");
                console.log("box four drop");}
                , 2800);
                emptyFourIf();
                }
      ///////////////
      function emptyFourIf() {
        var fiveColor = $('#five').css('background-color');
        console.log(fiveColor);
        if (fiveColor=='rgb(0, 0, 0)') {
          boxFourEmpty();
          //console.log(fiveColor);
          function boxFourEmpty() {
              myVar = setTimeout(
                    function boxFourEmpty() {
                    $("#four").css("background-color","rgb(0, 0, 0)");
                    console.log("box four empty");
                    }
                    , 3500);
                    boxFiveDrop();
          };
        };
      }
      // ///////////////////////   BOX FIVE   /////////////////////////////
      function boxFiveDrop() {
        var fiveColor = $('#five').css('background-color');
        //console.log(fiveColor);
        if (fiveColor=='rgb(0, 0, 0)') {
          console.log('five if');
          myVar = setTimeout(
                function boxFiveDrop() {
                ///////////////////////////////////
                console.log("box five drop");
                $("#five").css("background-color","rgb(250, 0, 0)");
                //boxOneDrop();
                }
                ///////////////////////////////////
                , 3500);
            }
      };
});
