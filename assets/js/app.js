var themeToggleDarkIcon = document.querySelectorAll('.theme-toggle-dark-icon');
var themeToggleLightIcon = document.querySelectorAll('.theme-toggle-light-icon');
var logo = document.getElementById('logo')
var lightphone = document.getElementById('lightphone')
var darkphone = document.getElementById('darkphone')
var scanqr = document.getElementById('scan-qr')
var scan_settings = document.getElementById('scan_settings')
var navsettings = document.querySelector('#nav-setings>*')
var menubar=document.getElementById('mobile-menu')

function lighton() {
  themeToggleDarkIcon.forEach(element => {
    element.classList.remove('hidden')
  });
  themeToggleLightIcon.forEach(element => {
    element.classList.add('hidden')
  });
  document.documentElement.classList.remove('dark');
  localStorage.setItem('darkmode', 'false');
  darkphone.classList.add('hidden')
  lightphone.classList.remove('hidden')
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
  darkphone.classList.remove('hidden')
  lightphone.classList.add('hidden')
  logo.classList.remove('invert')
}
function darkparticles(){
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
}
function lightparticles(){
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

if (localStorage.getItem('darkmode') === 'true' || (!('darkmode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  lightoff()
  darkparticles()
} else {
  lighton()
  lightparticles()
}

themeToggleLightIcon.forEach(element => {
  element.addEventListener('click', () => {
    lighton()
    lightparticles()
  
  })
});
themeToggleDarkIcon.forEach(element => {
  element.addEventListener('click', () => {
    lightoff()
      darkparticles()
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

fetch('https://api.coincap.io/v2/assets')
  .then((response) => response.json())
  .then(response => {
    // console.log(response.data)
    var coins = response.data
    var coinbody = document.getElementById('coin-body')
    const template = document.getElementById("mytemp");
    var limit=5;
    var counter=0;
    for (i in coins) {
      if (coins[i].symbol == "USDT") {
        continue;
      }
      if (coins[i].symbol == "USDC") {
        continue;
      }
      // console.log(coins[i])
      if(counter >= limit){

      }
      else{
        let tdtemplate = template.cloneNode(true);

        tdtemplate.id = "coinid-" + coins[i].id;
        tdtemplate.classList.remove("hidden");
        tdtemplate.querySelector("[data-coin='rank']").innerText = coins[i].rank;
        tdtemplate.querySelector("[data-coin='name']").innerText = coins[i].symbol;  
        var number=coins[i].priceUsd
     
        rounded = Math.round(number * 100) / 100
        console.log(rounded)
        tdtemplate.querySelector("[data-coin='price']").innerText = "$ "+rounded;
        coinbody.appendChild(tdtemplate)
        counter++;
      }
     
  
    }

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



