/////////////////////////// Friday Dec 8th --- Stage 1 //////////////////////////////
------------------------------------------
ASSUMING A BOARD GRID OF 5 ROWS, 3 COLUMNS -- test with one column
------------------------------------------
Create array of row arrays that index each grid Id by $('#Id')

var row = grid[0];
var col = grid.row[0];

function dropBox {
  While (boxBelow==false || boxStatus < 5) {

    (DROP A BOX)

    var boxStatus = 0

    $(var row and var col) = ".active";

    delayStatus = function emptyBox({
        class=".inactive";
        var row += 1;
        var boxStatus += 1;
      }, 700)

  }
}









/////////////////////////// Thursday Dec 8th --- Initial Design //////////////////////////////

//////////   box drop function   //////////
//////////   3 columns, 4 rows   //////////
function {
  change this.box to class "box-on"
    FOR DIV: coordinates: column var=vert, row var=horz; (this will always start at .row-one, .column-two)
    now wait an interval of time;

    IF box below is class "box-on" && class=="row-one" {
      <!-- (can this be stored as a global variable?) -->
      stop the game and display "you lost" (eventually "other player won");

    } ELSE IF box below is class "box-on" && class!=="row-one" {
      stop and run this function again

    } ELSE {
      change this.box to class "empty-box"
      then change the new box to class "box";
        FOR NEW COORDINATES: coordinates: column var=vert, row var=horz;
        now wait an interval of time;
    }

    //////////   REPEAT THIS 3 TIMES TO GET BOX TO BOTTOM ROW //////////

    IF box below is class "box-on" && class=="row-one" {
      <!-- (can this be stored as a global variable?) -->
      stop the game and display "you lost" (eventually "other player won");

    } ELSE IF box below is class "box-on" && class!=="row-one" {
      stop and run this function again

    } ELSE {
      change this.box to class "empty-box"
      then change the new box to class "box";
        FOR NEW COORDINATES: coordinates: column var=vert, row var=horz;
        now wait an interval of time;
    }

  IF  

}
