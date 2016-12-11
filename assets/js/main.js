console.log("sanity check!");


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function clickSanity() {
  console.log('click sanity');
}
  $(document).on("ready", function() {
    // start.addEventListener("click", console.log('ruff'));

    $('.communicator').on("click", function() {
      $('.spock-dog').addClass('hello-spock');
      $('.speech').addClass('clear');
      $('.spot-bubble').addClass('appear');
    })

    $('.start').on("click", function() {
      $('.communicator').addClass('call-spot');
    })

    $('.start').on("click", function() {
      $('button').addClass('button-be-gone');
      var playCom = $('#comId');
      console.log(playCom);
      function playCom() {
        playCom.play();
      }
      //  playCom();
    })

    // $( "#whichkey" ).on( "keydown", function( event ) {
    //   if (event.which=='38') {
    //   } else if (event.which=='40') {
    //   }
    // });
})
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
