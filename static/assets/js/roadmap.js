window.onload = function() {
  var latestV = document.querySelector('#latestV')
  latestV.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
}