console.log("sanity check!");
////////////////////////////////////////////////////////////////////////////////
function sanityCheck() {
  console.log('sanity check');
}
  $(document).on("ready", function() {

    var comAudio = document.getElementById("comMpeg");
    var bridgeAudio = document.getElementById("bridgeMpeg");
    var redAlertAudio = document.getElementById("redAlertMpeg");
    var shipExplodeAudio = document.getElementById("explodeMpeg");
    var transportAudio = document.getElementById("transportMpeg");

    pageLoad();

    function pageLoad() {
      kirkTalk();
      playBridge();
    }

    function shipExplodeTimer() {
      appearKirk = setTimeout(shipExplode, 60000);
    }

    function shipExplode() {
      // var shipStatus = document.getElementsByClassName("ship-status");
      playShipExplode();
      explodeDelay = setTimeout(function() {
        $('.ship-status').addClass('nothing-left');
        $('p').addClass('nothing-left');
        $('div').addClass('nothing-left');
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

    $('.communicator').on("click", function() {
      $('.spock-dog').addClass('hello-spock');
      $('.speech').addClass('disappear');
      $('.anim-three').addClass('appear');
      $('input').addClass('show-pass');
      playTransport();
      redAlert();
      playRedAlert();
      shipExplodeTimer();
      document.getElementById('wordOne').focus();
      bridgeAudio.volume = 0.03;
      //setTimeout(selfDestruct, 60000);
    })

    $('.start').on("click", function() {
      $('button').addClass('button-be-gone');
      $('.communicator').addClass('call-spot');
      playCom();
    })

    $('.audio-level').on("click", function() {
      redAlertAudio.volume = 0.05;
      bridgeAudio.volume = 0.02;

    })

    function redAlert() {
      flashRate = setInterval(flashRed, 960);
    }

    function flashRed() {
      var  emergLight = document.getElementById('redAlert');
      emergLight.style.opacity = emergLight.style.opacity == .5 ? 1 : .5;
    }

    function stopTextColor() {
      clearInterval(nIntervId);
    }

    ///////////////////   AUDIO   ///////////////////

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
      console.log('submitted');
      event.preventDefault();
      checkWordOne();
    })
    ///////////////   PASSWORD ONE   ///////////////////
    function checkWordTwo() {
      var wordOneText = $('#wordOne').val();
      console.log(wordOneText);
      if(wordOneText !== 'create') {
          alert("The password you have entered is not valid!");

      } else {
        $('#wordOne').val('');
        document.getElementById('wordTwo').focus();
        save = save + 1;
        console.log(save);
      }
    }
    ///////////////   PASSWORD TWO   ///////////////////
    function checkWordOne() {
      var wordOneText = $('#wordTwo').val();
      console.log(wordTwoText);
      if(wordTwoText !== 'create') {
          alert("The password you have entered is not valid!");

      } else {
        $('#wordTwo').val('');
        document.getElementById('wordTwo').focus();
        save = save + 1;
        console.log(save);
      }
    }
    ///////////////   PASSWORD THREE   ///////////////////
    function checkWordOne() {
      var wordOneText = $('#wordOne').val();
      console.log(wordOneText);
      if(wordOneText !== 'create') {
          alert("The password you have entered is not valid!");

      } else {
        $('#wordOne').val('');
        document.getElementById('wordTwo').focus();
        save = save + 1;
        console.log(save);
      }
    }
    ///////////////   PASSWORD FOUR   ///////////////////
    function checkWordOne() {
      var wordOneText = $('#wordOne').val();
      console.log(wordOneText);
      if(wordOneText !== 'create') {
          alert("The password you have entered is not valid!");

      } else {
        $('#wordOne').val('');
        document.getElementById('wordTwo').focus();
        save = save + 1;
        console.log(save);
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
