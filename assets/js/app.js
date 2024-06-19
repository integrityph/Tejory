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

if (localStorage.getItem('darkmode') === 'true' || (!('darkmode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  lightoff()
} else {
  lighton()
}

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


