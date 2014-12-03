(function($) {
  window.debug = function() {
    var events = [
      'abort',
      'canplay',
      'canplaythrough',
      'durationchange',
      'emptied',
      'ended',
      'error',
      'interruptbegin',
      'interruptend',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'mozaudioavailable',
      'pause',
      'play',
      'playing',
      // 'progress', // Happens all the time
      'ratechange',
      'seeked',
      'seeking',
      'stalled',
      'suspend',
      // 'timeupdate', // Happens all the time
      'volumechange',
      'waiting'
    ];

    var b = function(e) {
      var options = {
        hour: "2-digit", minute: "2-digit"
      }
      var msg = date.toLocaleDateString("en-US", options);
      console.log(msg + ': ' + e.type) 
    };
    for (var i = 0; i < events.length; i++) {
      // console.log(events[i]);
      $('audio').on(events[i], b);
    }
  };
})($)


