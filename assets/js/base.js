  // loader
  var loader = document.querySelectorAll('.loader')

  loader.forEach(element => {
    console.log(element)
    setTimeout(() => {
    element.classList.add('hidden')
  }, 2000);
  });

  //lightmode
  if (localStorage.getItem('darkmode') === 'true' || (!('darkmode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkmode', 'true');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkmode', 'false');
  }