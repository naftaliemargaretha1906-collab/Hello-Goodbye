// Membungkus seluruh isi dalam IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Memasang helloSpeaker ke objek global (window)
  window.helloSpeaker = helloSpeaker;

})(window);