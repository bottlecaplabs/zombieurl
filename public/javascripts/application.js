var Zombie = {
   viewing_delay:    2000,  // the delay AFTER the iframe is loaded
   final_delay:      5000,  // the finaly delay; we will always scare the shit out of someone after this time delay ;)
   post_msg_delay:   3000,
   infected:         false, // only need to infect them once.
   rand_img: null,
   rand_snd: null,
   images: [],
   sounds: []
};


// Zombie.load_delayed_images = function(){
//    $('img[delay_load]').each(function(i, img){
//       img = $(img);
//       img.attr('src', img.attr('delay_load'))
//       img.removeAttr('delay_load');
//       //NOTE: usiing img.load(); doesn't work..... it throws an erro in jquery, though this does.  odd
//       img.trigger('load');
//    });
// }

Zombie.prep = function(){
   // Zombie.load_delayed_images();
   // pre-cache lightbox and all the other stuff we need to do
   window.soundManager = new SoundManager();
   soundManager.url = '/images/sm2.swf';
   soundManager.nullURL = '/images/null.mp3';
   soundManager.debugMode = false;
   soundManager.consoleOnly = true;
   $(window).unload(soundManager.destruct);
   soundManager.onload=function() {
     soundManager.createSound('grr', Zombie.randomSound());
   };
   soundManager.beginInit();
   
   $('iframe.viewing').after("<a href='" + Zombie.randomImage() + "' id='zombie' class='hide'></a>");
   $('iframe.viewing').after("<img src='" + Zombie.randomImage() + "' class='hide'></a>");
};

Zombie.spread = function(){
 	$('#message').prepend("<a href='/'><img src='/images/bottlecap_labs_zombie_url.gif' id='zombiecap'/></a>You've been Zombied!<br/>" + Zombie.mailto_link + "<br/><a id='hide-message' href='#'>[hide]</a></span>").show();

	$("#hide-message").bind("click", function(){
		$("#message").remove();
		$("#jquery-lightbox").remove();
		$("#jquery-overlay").remove();
	})
};


Zombie.blight = function(){
   if (Zombie.infected) return;
   $('a#zombie').lightBox().click();        
   soundManager.play('grr'); // call this when you want it to play
   Zombie.infected = true;
   setTimeout(function(){
      Zombie.spread();
   }, Zombie.post_msg_delay); 
};


Zombie.randomSound = function(){
   if(Zombie.rand_snd) return Zombie.rand_snd;
   var index = Math.ceil(Math.random() * Zombie.sounds.length) - 1;
   Zombie.rand_snd = Zombie.sounds[index];
   return Zombie.rand_snd;
};

Zombie.randomImage = function(){
   if(Zombie.rand_img) return Zombie.rand_img;
   var index = Math.ceil(Math.random() * Zombie.images.length) - 1;
   Zombie.rand_img = Zombie.images[index];
   return Zombie.rand_img;
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


