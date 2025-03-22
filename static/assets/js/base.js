var themeToggleDarkIcon = document.querySelectorAll('.theme-toggle-dark-icon');
var themeToggleLightIcon = document.querySelectorAll('.theme-toggle-light-icon');
var menubar = document.getElementById('mobile-menu')
var logo = document.getElementById('logo')
var scanqr = document.getElementById('scan-qr')
var scan_settings = document.getElementById('scan_settings')
var navsettings = document.querySelector('#nav-setings>*')
// loader
var loader = document.querySelectorAll('.loader')

loader.forEach(element => {
  console.log(element)
  setTimeout(() => {
    element.classList.add('hidden')
  }, 2000);
});

function checkdark() {
  if (typeof darkparticles === 'function') {
    darkparticles();
  } else {
    return
  }
}

function checklight() {
  if (typeof lightparticles === 'function') {
    lightparticles();
  } else {
    return
  }
}


//lightmode
function lighton() {
  themeToggleDarkIcon.forEach(element => {
    element.classList.remove('hidden')
  });
  themeToggleLightIcon.forEach(element => {
    element.classList.add('hidden')
  });
  document.documentElement.classList.remove('dark');
  localStorage.setItem('darkmode', 'false');
  logo.classList.add('invert')
}
function lightoff() {
  themeToggleDarkIcon.forEach(element => {
    element.classList.add('hidden')
  });
  themeToggleLightIcon.forEach(element => {
    element.classList.remove('hidden')
  });
  document.documentElement.classList.add('dark');
  localStorage.setItem('darkmode', 'true');
  logo.classList.remove('invert')
}
if (localStorage.getItem('darkmode') === 'true' || (!('darkmode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  lightoff()
  checkdark()


} else {
  lighton()
  checklight()
}

themeToggleLightIcon.forEach(element => {
  element.addEventListener('click', () => {
    lighton()
    checklight()

  })
});
themeToggleDarkIcon.forEach(element => {
  element.addEventListener('click', () => {
    lightoff()
    checkdark()
  })
});
themeToggleLightIcon.forEach(element => {
  element.addEventListener('click', () => {
    lighton()

  })
});
themeToggleDarkIcon.forEach(element => {
  element.addEventListener('click', () => {
    lightoff()
  })
});

// navsettings.addEventListener('mouseover', () => {
//   scan_settings.classList.remove('hidden')
// })
// navsettings.addEventListener('mouseout' ,()=>{
//   scan_settings.classList.add('hidden')
// })
// scan_settings.addEventListener('mouseover', () => {
//   scan_settings.classList.remove('hidden')
// })
// scan_settings.addEventListener('mouseout', () => {
//   scan_settings.classList.add('hidden')
// })

var click = true;
function menu() {
  if (click === true) {
    menubar.classList.remove('hidden')
    click = false
  }
  else {
    menubar.classList.add('hidden')
    click = true
  }

}
const date = new Date();
let year = date.getFullYear();
document.getElementById('yyyy').textContent = year;

var link = document.querySelectorAll('.links')
link.forEach(links => {
  links.innerHTML = `
<div class="flex justify-center items-center">
  <a href="https://www.facebook.com/tejorywallet"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50"
    class="dark:fill-white">
    <path
      d="M42,3H8C5.2,3,3,5.2,3,8v34c0,2.8,2.2,5,5,5h34c2.8,0,5-2.2,5-5V8C47,5.2,44.8,3,42,3z M37,19h-2c-2.1,0-3,0.5-3,2v3h5 l-1,5h-4v16h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z">
    </path>
  </svg></a>
  <a href="https://x.com/tejorywallet"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 50 50"
    class="dark:fill-white">
    <path
      d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">
    </path>
  </svg></a>
  <a href="https://www.youtube.com/@TejoryWallet"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"
    class="dark:fill-white">
    <path
      d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z">
    </path>
  </svg></a>
  <a href=""></a>
  <a href=""></a>
</div>`
});
