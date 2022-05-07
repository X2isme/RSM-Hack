var fs = document.createElement("button");
fs.innerHTML = "FullScreenHack";
document.body.appendChild(fs);
fs.id = 'fs';
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('sf').addEventListener('click', function() {
    var SFLID = document.getElementById('fullscreenMask')
    SFLID.parentNode.removeChild(SFLID);
  });
});
