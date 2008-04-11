var Zombie = {
   viewing_delay: 2800,  // the delay AFTER the iframe is loaded
   final_delay:   4500, // the finaly delay; we will always scare the shit out of someone after this time delay ;)
   infected:      false // only need to infect them once.
};

Zombie.prep = function(){
   // pre-cache lightbox and all the other stuff we need to do
};

Zombie.blight = function(){
   if (Zombie.infected) return;
   soundManager.play('grr'); // call this when you want it to play
   $('a#zombie').lightBox().click();        
   Zombie.infected = true;
};

$(function() {
   Zombie.prep();
   
   setTimeout(function(){
      Zombie.blight();
   }, Zombie.final_delay );

   $('iframe.viewing').load(function(){
      setTimeout(function(){
         Zombie.blight();
      }, Zombie.viewing_delay);
   });
});

function randomSound() {
  var sounds = ['scream.mp3',
  'psycho_scream.mp3',
  'male_scream2.mp3',
  'male_scream.mp3',
  'loud_female_scream.mp3',
  'female_scream3.mp3',
  'female_scream2.mp3',
  'female_scream.mp3',
  'terrified_female_scream.mp3'];
  var index = Math.ceil(Math.random()*sounds.length) - 1;
  return '/sounds/'+sounds[index];
};

// for audio starting
$(function() {
  window.soundManager = new SoundManager();
  soundManager.url = '/images/sm2.swf';
  soundManager.nullURL = '/images/null.mp3';
  soundManager.debugMode = false;
  soundManager.consoleOnly = true;
  $(window).unload(soundManager.destruct)
  soundManager.onload=function() {
    soundManager.createSound('grr',randomSound());
  };
  soundManager.beginInit();
});