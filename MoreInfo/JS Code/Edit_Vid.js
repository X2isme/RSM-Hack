navigator.getUserMedia (
   // constraints
   {
      video: true
   },

   function(localMediaStream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) {
        
      };
   },

   function(err) {
    if(err === "PERMISSION_DENIED") {
      
    }
   }
);
