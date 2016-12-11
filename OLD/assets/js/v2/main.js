console.log("sanity check!");

var boardGrid = [
  [$('#num1')],
  [$('#num2')],
  [$('#num3')],
  [$('#num4')],
  [$('#num5')],
]

var r = -1;
var num = "num";
var limit = 0;
// var currentBox = boardGrid[r][0];
// var boardBottom = boardGrid[4][0];
var timerIncrement = 0;

function boxEmpty(box) {
    var boxNumber = num.concat(r+1);
    console.log(boxNumber);
    $('#num'+r).css("background-color","rgb(0, 0, 0)");
    console.log("box empty");
}
function boxDrop() {
    r = r + 1;
    var boxNumber = num.concat(r+1);
    $('#num'+r).css("background-color","rgb(250, 0, 0)");
    console.log("box drop");
}
function boxLoop() {
      boxEmpty();
      boxDrop();
}
function boxDelay() {
  while (limit<=5) {
    limit = limit + 1;
    setTimeout(function() {
      boxLoop();
    }
      , timerIncrement);
    timerIncrement = timerIncrement + 700;
  }
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function clickSanity() {
  console.log('click sanity');
}

$(document).on("ready", function() {


  start.addEventListener("click", boxDelay);


})
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////   BOX ONE   /////////////////////////////
      // function boxOneDrop() {
      //     myVar = setTimeout(
      //             function boxOneDrop() {
      //             $("#one").css("background-color","rgb(250, 0, 0)");
      //             console.log("box one drop");
      //             }
      //           , 700);
      //           }
      //
      // function boxOneEmpty() {
      //     myVar = setTimeout(
      //             function boxOneEmpty() {
      //             $("#one").css("background-color","rgb(0, 0, 0)");
      //             console.log("box one empty");
      //             }
      //           , 1400);
      //           }
      // ///////////////////////   BOX TWO   /////////////////////////////
      // function boxTwoDrop() {
      //     myVar = setTimeout(
      //           function boxTwoDrop() {
      //           $("#two").css("background-color","rgb(250, 0, 0)");
      //           console.log("box two drop");}
      //           , 1400);
      //           }
      //
      // function boxTwoEmpty() {
      //     myVar = setTimeout(
      //           function boxTwoEmpty() {
      //           $("#two").css("background-color","rgb(0, 0, 0)");
      //           console.log("box two empty");
      //           }
      //           , 2100);
      //           }
      // ///////////////////////   BOX THREE   /////////////////////////////
      // function boxThreeDrop() {
      //     myVar = setTimeout(
      //           function boxThreeDrop() {
      //           $("#three").css("background-color","rgb(250, 0, 0)");
      //           console.log("box three drop");}
      //           , 2100);
      //           }
      //
      // function boxThreeEmpty() {
      //     myVar = setTimeout(
      //           function boxThreeEmpty() {
      //           $("#three").css("background-color","rgb(0, 0, 0)");
      //           console.log("box three empty");
      //           }
      //           , 2800);
      //           }
      // ///////////////////////   BOX FOUR   /////////////////////////////
      // function boxFourDrop() {
      //     myVar = setTimeout(
      //           function boxFourDrop() {
      //           $("#four").css("background-color","rgb(250, 0, 0)");
      //           console.log("box four drop");
      //           }
      //           , 2800);
      //           }
      //
      // function boxFourEmpty() {
      //     myVar = setTimeout(
      //           function boxFourEmpty() {
      //           $("#four").css("background-color","rgb(0, 0, 0)");
      //           console.log("box four empty");
      //           }
      //           , 3500);
      //           }
      // // ///////////////////////   BOX FIVE   /////////////////////////////
      // function boxFiveDrop() {
      //     console.log('five if');
      //     myVar = setTimeout(
      //           function boxFiveDrop() {
      //           ///////////////////////////////////
      //           console.log("box five drop");
      //           $("#five").css("background-color","rgb(250, 0, 0)");
      //           //boxOneDrop();
      //           }
      //           ///////////////////////////////////
      //           , 3500);
      //       }
      /////////////////////////////////////////////////////////////////////

//////////////////////////////   TEST CODE   ////////////////////////////
// var fiveColor = $('#five').css('background-color');
// //console.log(fiveColor);
// if (fiveColor=='rgb(0, 0, 0)') {
