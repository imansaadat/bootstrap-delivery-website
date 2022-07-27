const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
navLinks.forEach((l) => {
    l.addEventListener('click',()=>{
      menuToggle.classList.toggle('show')
    })
})

