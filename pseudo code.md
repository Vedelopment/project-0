//////////   box drop function   //////////
//////////   3 columns, 4 rows   //////////
function {
  change the box background color to class "box-on"
    FOR DIV: coordinates: column var=vert, row var=horz; (this will always start at .row-one, .column-two)
    now wait an interval of time;

    IF box below is class "box-on" && class=="row-one" {
      <!-- (can this be stored as a global variable?) -->
      stop the game and display "you lost" (eventually "other player won");

    } ELSE IF box below is class "box-on" && class!=="row-one" {
      stop and run this function again

    } ELSE {
      change the background color to class "empty-box"
      then change the new background color to class "box";
        FOR NEW COORDINATES: coordinates: column var=vert, row var=horz;
        now wait an interval of time;
    }

  IF  

}
