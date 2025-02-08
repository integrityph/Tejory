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
          x.classList.add('dark:bg-[#171717]', 'bg-gray-200')
          // x.classList.remove('dark:bg-[#171717]', 'bg-gray-50')
        } else {
          x.classList.remove('dark:bg-[#171717]', 'bg-gray-200')
          // x.classList.add('dark:bg-[#171717]', 'bg-gray-50')
        }
      })

      faqDesc.forEach(e => {
        e.classList.add('hidden')
        faqDesc[index].classList.remove('hidden')
      })

    })
  });