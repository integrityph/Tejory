var themeToggleDarkIcon = document.querySelectorAll('.theme-toggle-dark-icon');
var themeToggleLightIcon = document.querySelectorAll('.theme-toggle-light-icon');
var menubar=document.getElementById('mobile-menu')
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

 function checkdark(){
  if (typeof darkparticles === 'function') {
    darkparticles();
 } else {
   return
 }
 }

 function checklight(){
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
  
  var click=true;
  function menu(){
    if(click===true){
      menubar.classList.remove('hidden')
     click=false
    }
    else{
      menubar.classList.add('hidden')
      click=true
    }
  
  }