function init() {

  // ! Expand More Info
  const buttons = document.querySelectorAll('.more-info-btn')

  buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
      const moreInfo = e.target.nextElementSibling
      console.log(moreInfo)
      moreInfo.classList.toggle('show')
    })
  })

}
window.addEventListener('DOMContentLoaded', init)
