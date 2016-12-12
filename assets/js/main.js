console.log("sanity check!");
////////////////////////////////////////////////////////////////////////////////
  $(document).on("ready", function() {

    var comAudio = document.getElementById("comMpeg");
    var bridgeAudio = document.getElementById("bridgeMpeg");
    var redAlertAudio = document.getElementById("redAlertMpeg");
    var shipExplodeAudio = document.getElementById("explodeMpeg");
    var transportAudio = document.getElementById("transportMpeg");
    var illogicalAudio = document.getElementById("illogicalMpeg");
    var prosperAudio = document.getElementById("prosperMpeg");
    var themeAudio = document.getElementById("themeMpeg");
    var flyAudio = document.getElementById("flyMpeg");

    ///////////////////////////////////////////////////////////
    //////////////////////   MAJOR EVENTS   ///////////////////
    ///////////////////////////////////////////////////////////

    pageLoad();

    function pageLoad() {
      // kirkTalk();
      // $('.speech').removeClass('hidden');
      playBridge();
    }

    function checkForWin() {
      if (save>=3) {
        window.clearTimeout(explodeTimer);
        redAlertAudio.pause();
        bridgeAudio.pause();
        stopRedAlert();
        playProsper();
        playTheme();
        playFly();
        $('h1').text('Live Long and Prosper!!');
        $('.spock-dog').removeClass('hello-spock');
        $('.anim-three').removeClass('appear');
        $('input').removeClass('show-pass');
        $('.communicator').removeClass('call-spot');
        $('body').addClass('win')
      }
    }

    function shipExplodeTimer() {
      explodeTimer = setTimeout(shipExplode, 30000);
    }

    function shipExplode() {
      playShipExplode();
      explodeDelay = setTimeout(function() {
        $('.ship').addClass('nothing-left');
        $('body').css('background-image', 'none');
        $('p').addClass('nothing-left');
        $('div').addClass('nothing-left');
        $('#reload').css('visibility', 'visible');
        bridgeAudio.pause();
        redAlertAudio.pause();
      }, 100);
    }
    ///////////   FUTURE TALK BUBBLE ANIMATION   ///////////////
    // function kirkTalk() {
    //   appearKirk = setTimeout(kirkBubbleShow, 1500);
    // }
    //
    // function kirkBubbleShow() {
    //   var  kirkText = document.getElementsByClassName('kirk');
    //   console.log(kirkText);
    //   kirkText.style.opacity = kirkText.style.opacity == 0 ? 1 : 0;
    // }

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
    })

      passOne.onfocus = function () {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }

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

    function stopRedAlert() {
      $('#redAlert').removeClass('red-alert');
    }

    ///////////////////////////////////////////////////////////
    ////////////////////  AUDIO FUNCTIONS   ///////////////////
    ///////////////////////////////////////////////////////////

    function playCom() {
      comAudio.play();
    }
    function playBridge() {
      bridgeAudio.play();
      bridgeAudio.volume = 0.2;
    }
    function playRedAlert() {
      redAlertAudio.play();
      redAlertAudio.volume = 0.3;
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
    function playIllogical() {
      illogicalAudio.play();
      illogicalAudio.volume = 0.9;
    }
    function playProsper() {
      prosperAudio.play();
      prosperAudio.volume = 0.8;
    }
    function playTheme() {
      themeAudio.play();
      themeAudio.volume = 1;
    }
    function playFly() {
      flyAudio.play();
      themeAudio.volume = 1;
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
      if (formId==='wordOne') {
        checkWordOne();
      }
      else if (formId=='wordTwo') {
        checkWordTwo();
      }
      else if (formId=='wordThree') {
        checkWordThree();
      }
      else if (formId=='wordFour') {
        checkWordFour();
      }
    })
    ///////////////   PASSWORD ONE   ///////////////////
    function checkWordOne() {
      var wordOneText = $('#passOne').val();
      if(wordOneText !== 'create') {
          playIllogical();
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
      if(wordTwoText !== 'read') {
          alert("The password you have entered is not valid!");
          $('#passTwo').val('');
          playIllogical();

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
      if(wordThreeText !== 'update') {
          alert("The password you have entered is not valid!");
          $('#passThree').val('');
          playIllogical();

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
      if(wordFourText !== 'delete') {
          alert("The password you have entered is not valid!");
          $('#passFour').val('');
          playIllogical();
      } else {
        $("#passFour").attr("disabled", true);
        checkForWin();
        save = save + 1;
      }
    }

})
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// CODE IDEAS ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

    ///////////////   FUTURE: BIND TAB TO SUBMIT FORM   ///////////////////
    // $( "#whichkey" ).on( "keydown", function( event ) {
    //   if (event.which=='38') {
    //   } else if (event.which=='40') {
    //   }
    // });
