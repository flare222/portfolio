// TODO Come back to this later

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelector('.carousel-slide img')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1
const size = carouselImages[1].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', () => {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out'
  counter++
})