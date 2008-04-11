var Zombie = {};
Zombie.delay = 1500;
$(function() {
   $('iframe.viewing').load(function(){
      setTimeout(function(){
         $('a#zombie').lightBox().click();         
      }, Zombie.delay)
   });
});

// for audio starting
$(function() {
  var sm2 = new SoundManager();
  window.soundManager = sm2;
  sm2.url = '/images/sm2.swf';
  sm2.nullURL = '/images/null.mp3';
  sm2.debugMode = false;
  sm2.consoleOnly = true;
  $(window).unload(sm2.destruct)
  sm2.onload=function() {
    console.log('tog')
    sm2.createSound('grr','/sounds/grar.mp3');
    sm2.play('grr');
  };
  sm2.beginInit();
});