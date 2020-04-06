function init() {

  const canvas = document.querySelector('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const c = canvas.getContext('2d')
  const maxRadius = 30


  const mouse = {
    x: undefined,
    y: undefined
  }


  window.addEventListener('mousemove', function(e) {
    mouse.x = e.x
    mouse.y = e.y
  })

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    init()
  })

  function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    // this.colour = '#' + Math.floor(Math.random() * 16777215).toString(16)

    this.draw = function() {
      c.beginPath() 
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = 'rgb(26, 144, 109)'
      c.lineWidth = 7
      c.fill()
      c.shadowBlur = 10
      c.shadowColor = 'rgb(26, 144, 109)'

    }

    this.update = function() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx
      }
  
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy

      //! Interactivity

      if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1
        }    
      } else if (this.radius > this.minRadius) {
        this.radius -= 1
      }

      this.draw()
    }
  }

  let circleArr = []

  function init() {

    circleArr = []
    
    for (let i = 0; i < 900; i++) {
      const radius = Math.random() * 6 + 1
      const x = Math.random() * (innerWidth - radius * 2) + radius
      const dx = (Math.random() - 0.5) * 5
      const y = Math.random() * (innerHeight - radius * 2) + radius
      const dy = dx
      circleArr.push(new Circle(x, y, dx, dy, radius))
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update()
    }
  }

  animate()
  init()

}
window.addEventListener('DOMContentLoaded', init)