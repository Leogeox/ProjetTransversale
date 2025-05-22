let closebtn = document.querySelector(".closeBtn")
let gamification = document.querySelector(".gamificationContainer")
let blurs = document.querySelectorAll('.bgBlur')

closebtn.addEventListener('click', function() {
    gamification.classList.add('displayNone');
    blurs.forEach(blury => {
        blury.classList.remove('bgBlur');
    })
})