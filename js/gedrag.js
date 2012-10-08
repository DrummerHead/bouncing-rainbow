jQuery(function($){


var $body = $('body');
$body.append("<canvas data-processing-sources='js/bouncing-rainbow.pde'></canvas>");


var audio = new Audio();
var isSupported = !!audio.canPlayType && audio.canPlayType('audio/mp4');


var injectAudio = function(){
  var audioMarkup = '<audio src="audio/8bp123-01-jellica-dennye.mp3" preload="auto" autobuffer></audio>';
  $body.append(audioMarkup);
};


var injectControls = function(){
  var $controlsMarkup = $('<div id="controls" class="play" title="Play music"></div>');
  var audio = $('audio').get(0);
  $('canvas').after($controlsMarkup);
  $controlsMarkup.toggle(
    function(){
      $(this).attr('class', 'pause').attr('title', 'Pause music');
      audio.play();
    },
    function(){
      $(this).attr('class', 'play').attr('title', 'Play music');
      audio.pause();
    }
  );
}


if(isSupported){
  injectAudio();
  injectControls();
}




})
