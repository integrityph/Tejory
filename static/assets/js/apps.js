function getOS() {
  const userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

var appLink = document.querySelector('#AppLink')
var redirectLink = document.querySelector('#redirectLink')
var counter = 5;

if(getOS() == 'Mac OS'){
  appLink.href = "https://play.google.com/store/apps/details?id=ph.integritynet.tejory"
} else if (getOS() == 'iOS') {
  appLink.href = "https://play.google.com/store/apps/details?id=ph.integritynet.tejory"
} else if (getOS() == 'Android') {
  appLink.href = "https://play.google.com/store/apps/details?id=ph.integritynet.tejory"
} else if (getOS() == 'Windows') {
  appLink.href = "https://play.google.com/store/apps/details?id=ph.integritynet.tejory"
} else if (getOS() == 'Linux'){
  appLink.href = "https://play.google.com/store/apps/details?id=ph.integritynet.tejory"
} else {
  appLink.href = "https://play.google.com/store/apps/details?id=ph.integritynet.tejory"
}

setInterval(function() {
  counter--;

  if (counter >= 0) {
    span = document.getElementById("counter");
    span.innerHTML = counter;
  }

  if (counter === 0) {
    redirectLink.classList.remove('invisible')
    clearInterval(counter);
  }
}, 1000);

window.setTimeout(function() {
  window.location.href = appLink.href;
}, 5000);

// window.location.replace("http://www.w3schools.com");
// alert(getOS());