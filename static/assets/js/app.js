
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



try {
  fetch('https://api.coinpaprika.com/v1/tickers')
  .then((response) => response.json())
  .then(response => {
    console.log(response)
    
    var coins = response
    var coinbody = document.getElementById('coin-body')
    const template = document.getElementById("mytemp");

    var limit=5;
    var counter=0;

    for(i in coins) {
      if (counter >= limit){
        return
      } else {
        let tdtemplate = template.cloneNode(true);

        tdtemplate.id = "coinid-" + coins[i].id;
        tdtemplate.classList.remove("hidden");
        tdtemplate.querySelector("[data-coin='rank']").innerText = coins[i].rank;
        tdtemplate.querySelector("[data-coin='name']").innerText = coins[i].symbol;  
        var number=coins[i].quotes.USD.price
        rounded = Math.round(number * 100) / 100
        tdtemplate.querySelector("[data-coin='price']").innerText = "$ "+rounded;

        coinbody.appendChild(tdtemplate)
        counter++
      }
    }

    // var coins = response.data
    // var limit=5;
    // var counter=0;
    // for (i in coins) {
    //   if (coins[i].symbol == "USDT") {
    //     continue;
    //   }
    //   if (coins[i].symbol == "USDC") {
    //     continue;
    //   }
    //   // console.log(coins[i])
    //   if(counter >= limit){

    //   }
    //   else{
    //     let tdtemplate = template.cloneNode(true);

    //     tdtemplate.id = "coinid-" + coins[i].id;
    //     tdtemplate.classList.remove("hidden");
    //     tdtemplate.querySelector("[data-coin='rank']").innerText = coins[i].rank;
    //     tdtemplate.querySelector("[data-coin='name']").innerText = coins[i].symbol;  
    //     var number=coins[i].priceUsd
     
    //     rounded = Math.round(number * 100) / 100
    //     tdtemplate.querySelector("[data-coin='price']").innerText = "$ "+rounded;
    //     coinbody.appendChild(tdtemplate)
    //     counter++;
    //   }
     
  
    // }

  }).catch(error =>{
    console.log(error)
  })
} catch (error) {
  console.log(error)
}

