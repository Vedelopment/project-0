console.log("sanity check!");
////////////////////////////////////////////////////////////////////////////////
  $(document).on("ready", function() {

    var comAudio = document.getElementById("comMpeg");
    var bridgeAudio = document.getElementById("bridgeMpeg");
    var redAlertAudio = document.getElementById("redAlertMpeg");
    var shipExplodeAudio = document.getElementById("explodeMpeg");
    var transportAudio = document.getElementById("transportMpeg");

    ///////////////////////////////////////////////////////////
    //////////////////////   MAJOR EVENTS   ///////////////////
    ///////////////////////////////////////////////////////////

    pageLoad();

    function pageLoad() {
      kirkTalk();
      playBridge();
    }

    function checkForWin() {
      console.log(save);
      if (save>=3) {
        window.clearTimeout(explodeTimer);
        redAlertAudio.pause();
        alert('you saved the day!');
      } else {
        console.log('keep trying...');
      }
    }

    function shipExplodeTimer() {
      explodeTimer = setTimeout(shipExplode, 60000);
    }

    // function gameOver() {
    //
    // }
    //
    // function youWon() {
    //   // playWin();
    //   explodeDelay = setTimeout(function() {
    //     $('.ship').addClass('nothing-left');
    //     $('body').css('background-image', 'none');
    //     $('p').addClass('nothing-left');
    //     $('div').addClass('nothing-left');
    //     $('#reload').css('visibility', 'visible');
    //     bridgeAudio.pause();
    //     redAlertAudio.pause();
    //   }, 100);
    // }

    function shipExplode() {
      // var shipStatus = document.getElementsByClassName("ship-status");
      playShipExplode();
      explodeDelay = setTimeout(function() {
        $('.ship').addClass('nothing-left');
        $('body').css('background-image', 'none');
        $('p').addClass('nothing-left');
        $('div').addClass('nothing-left');
        $('#reload').css('visibility', 'visible');
        bridgeAudio.pause();
        redAlertAudio.pause();
        bridgeAudio.volume = 0.5;
      }, 100);
    }

    function kirkTalk() {
      appearKirk = setTimeout(kirkBubbleShow, 1500);
    }

    function kirkBubbleShow() {
      var  kirkText = document.getElementsByClassName('kirk');
      console.log(kirkText);
      kirkText.style.opacity = kirkText.style.opacity == 0 ? 1 : 0;
    }

    ///////////////////////////////////////////////////////////
    ////////////////////   EVENT HANDLERS   ///////////////////
    ///////////////////////////////////////////////////////////

    $('.start').on("click", function() {
      $('.start').addClass('button-be-gone');
      $('.communicator').addClass('call-spot');
      playCom();
    })

    $('.communicator').on("click", function() {
      $('.spock-dog').addClass('hello-spock');
      $('.speech').addClass('disappear');
      $('.anim-three').addClass('appear');
      $('input').addClass('show-pass');
      playTransport();
      redAlert();
      playRedAlert();
      shipExplodeTimer();
      document.getElementById('passOne').focus();
      bridgeAudio.volume = 0.03;
      //setTimeout(selfDestruct, 60000);
    })

    $('#reload').click(function() {
      location.reload(true);
    })

    $('.audio-level').on("click", function() {
      redAlertAudio.volume = 0.05;
      bridgeAudio.volume = 0.02;

    })

    ///////////////////////////////////////////////////////////
    ///////////////////   STYLE FUNCTIONS   ///////////////////
    ///////////////////////////////////////////////////////////

    function redAlert() {
      flashRate = setInterval(flashRed, 960);
    }

    function flashRed() {
      var  emergLight = document.getElementById('redAlert');
      emergLight.style.opacity = emergLight.style.opacity == .5 ? 1 : .5;
    }

    ///////////////////////////////////////////////////////////
    ////////////////////  AUDIO FUNCTIONS   ///////////////////
    ///////////////////////////////////////////////////////////

    function playCom() {
      comAudio.play();
    }
    function playBridge() {
      bridgeAudio.play();
      bridgeAudio.volume = 0.1;
    }
    function playRedAlert() {
      redAlertAudio.play();
      redAlertAudio.volume = 0.5;
    }
    function lowerRedAlert() {
      redAlertAudio.volume = 0.2;
    }
    function playShipExplode() {
      shipExplodeAudio.play();
    }
    function playTransport() {
      transportAudio.play();
      transportAudio.volume = 0.5;
    }
    ///////////////////////////////////////////////////////////
    ///////////////   PASSWORD VALIDATION   ///////////////////
    ///////////////////////////////////////////////////////////
    var save = 0;

    $('form').on("submit", function(event) {
      event.preventDefault();
    })

    $('form').on("submit", function(event) {
      event.preventDefault();
      var formId = $(this).attr('id');
      console.log(formId);
      console.log('submitted');
      if (formId==='wordOne') {
        checkWordOne();
        console.log('checking one');
      }
      else if (formId=='wordTwo') {
        checkWordTwo();
        console.log('checking two');
      }
      else if (formId=='wordThree') {
        checkWordThree();
        console.log('checking three');
      }
      else if (formId=='wordFour') {
        checkWordFour();
        console.log('checking four');
      }
    })
    ///////////////   PASSWORD ONE   ///////////////////
    function checkWordOne() {
      var wordOneText = $('#passOne').val();
      console.log(wordOneText);
      if(wordOneText !== 'create') {
          alert("The password you have entered is not valid!");
          $('#passOne').val('');

      } else {
        $("#passOne").attr("disabled", true);
        checkForWin();
        document.getElementById('passTwo').focus();
        save = save + 1;
      }
    }
    ///////////////   PASSWORD TWO   ///////////////////
    function checkWordTwo() {
      var wordTwoText = $('#passTwo').val();
      console.log(wordTwoText);
      if(wordTwoText !== 'read') {
          alert("The password you have entered is not valid!");
          $('#passTwo').val('');

      } else {
        $("#passTwo").attr("disabled", true);
        checkForWin();
        document.getElementById('passThree').focus();
        save = save + 1;
      }
    }
    ///////////////   PASSWORD THREE   ///////////////////
    function checkWordThree() {
      var wordThreeText = $('#passThree').val();
      console.log(wordThreeText);
      if(wordThreeText !== 'update') {
          alert("The password you have entered is not valid!");
          $('#passThree').val('');

      } else {
        $("#passThree").attr("disabled", true);
        checkForWin();
        document.getElementById('passFour').focus();
        save = save + 1;
      }
    }
    ///////////////   PASSWORD FOUR   ///////////////////
    function checkWordFour() {
      var wordFourText = $('#passFour').val();
      console.log(wordFourText);
      if(wordFourText !== 'delete') {
          alert("The password you have entered is not valid!");
          $('#passFour').val('');
      } else {
        $("#passFour").attr("disabled", true);
        checkForWin();
        // document.getElementById('wordTwo').focus();
        save = save + 1;
      }
    }

})
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// CODE IDEAS ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


    // $( "#whichkey" ).on( "keydown", function( event ) {
    //   if (event.which=='38') {
    //   } else if (event.which=='40') {
    //   }
    // });
