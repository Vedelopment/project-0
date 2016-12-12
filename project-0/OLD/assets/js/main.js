console.log("sanity check!");

var img1 = "url('Puppy1')"
var img2 = "url('Puppy2')"
var img3 = "url('Puppy3')"
var img4 = "url('Puppy4')"
var img5 = "url('Puppy5')"
var img6 = "url('Puppy6')"
var img7 = "url('Puppy7')"
var img8 = "url('Puppy8')"
var img9 = "url('Puppy9')"
var img10 = "url('Puppy10')"
var img11 = "url('Puppy11')"
var img12 = "url('Puppy12')"
var img13 = "url('Puppy13')"
var img14 = "url('Puppy14')"
var img15 = "url('Puppy15')"

var boardGrid = [
  [$('#num1'), $('#num11')],
  [$('#num2'), $('#num12')],
  [$('#num3'), $('#num13')],
  [$('#num4'), $('#num14')],
  [$('#num5'), $('#num15')],
]

var r = -1;
var num = "num";
var limit = 0;
var currentBox = boardGrid[r+1][0];
var boardBottom = boardGrid[4][0];
var timerIncrement = 0;

function resetInit() {
  var r = -1;
  var num = "num";
  var limit = 0;
  var currentBox = boardGrid[r+1][0];
  var boardBottom = boardGrid[4][0];
  var timerIncrement = 0;
  var boxNumber;
}

function boxEmpty(box) {
  var boxBelow = $('#num'+r).css("background-image","url('clear.png')");
  console.log(boxBelow);
  if (boxBelow!=="url('clear.png')") {
    $var boxBelow = $('#num').css("background-image","url('assets/imgs/Puppy6.png')");
    console.log("box empty");
  }
}
function boxDrop() {
    r = r + 1;
    $('#num'+r).css("background-image","url('assets/imgs/Puppy6.png')");
    console.log("box drop");
}
function boxLoop() {
  // if (currentBox!==boardBottom) {
    boxEmpty();
    boxDrop();
  // }
}
function boxDelay() {
  while (limit<=5 || $('#num'+r).css("background-image")=="url('assets/imgs/Puppy6.png')") {
    limit = limit + 1;
    setTimeout(function() {
      boxLoop();
    }
      , timerIncrement);
    timerIncrement = timerIncrement + 700;
    setTimeout(function() {
      r = -1;
      num = "num";
      limit = 0;
      timerIncrement = 0;
    }
      , 4300);
  }
}
// function getChar(event) {
//   if (event.which == null) {
//     console.log( String.fromCharCode(event.keyCode) ) // IE
//   } else if (event.which!=0 && event.charCode!=0) {
//     console.log( String.fromCharCode(event.which)  ) // the rest
//   } else {
//     console.log( null )// special key
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function clickSanity() {
  console.log('click sanity');
}
  $(document).on("ready", function() {
    start.addEventListener("click", boxDelay);

    $( "#whichkey" ).on( "keydown", function( event ) {
      if (event.which=='38') {
        boxDelay();
      } else if (event.which=='40') {
        r = r+10;
        boxDelay();
      }
    });
})
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
