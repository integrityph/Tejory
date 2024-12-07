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

  navsettings.addEventListener('mouseover', () => {
    scan_settings.classList.remove('hidden')
  })
  // navsettings.addEventListener('mouseout' ,()=>{
  //   scan_settings.classList.add('hidden')
  // })
  scan_settings.addEventListener('mouseover', () => {
    scan_settings.classList.remove('hidden')
  })
  scan_settings.addEventListener('mouseout', () => {
    scan_settings.classList.add('hidden')
  })
  
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

const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");

wrapper.addEventListener("mousemove", (event) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--xPos", `${x}px`);
    card.style.setProperty("--yPos", `${y}px`);
  });
})

  var btns = document.querySelectorAll('.btn-next')

  btns.forEach((e, index) => {
    e.addEventListener('click', () => {
      cards[index + 1].classList.remove('hidden')      
    })
  });

  var faqList = document.querySelectorAll('#faq-list li')
  var faqDesc = document.querySelectorAll('#faq-desc p')

  faqList.forEach((e, index) => {
    e.addEventListener('click', () => {
      faqList.forEach(a => {
        a.classList.remove('active')
      })
      e.classList.add('active')
      faqList.forEach(x => {
        if(x.classList.contains('active')){
          x.classList.add('dark:bg-gray-800', 'bg-gray-200')
          x.classList.remove('dark:bg-gray-700', 'bg-gray-50')
        } else {
          x.classList.remove('dark:bg-gray-800', 'bg-gray-200')
          x.classList.add('dark:bg-gray-700', 'bg-gray-50')
        }
      })

      faqDesc.forEach(e => {
        e.classList.add('hidden')
        faqDesc[index].classList.remove('hidden')
      })

    })
  });