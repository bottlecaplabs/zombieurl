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
  window.soundManager = new SoundManager();
  soundManager.url = '/images/sm2.swf';
  soundManager.nullURL = '/images/null.mp3';
  soundManager.debugMode = false;
  soundManager.consoleOnly = true;
  $(window).unload(soundManager.destruct)
  sm2.onload=function() {
    soundManager.createSound('grr','/sounds/grar.mp3');
    soundManager.play('grr'); // call this when you want it to play
  };
  soundManager.beginInit();
});