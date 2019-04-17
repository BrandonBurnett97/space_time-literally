function toggleNav(toggleClass, activeClass) {
  if (document.querySelector('.' + toggleClass)) {
    function toggle() {
      if (!document.body.classList.contains(activeClass)) {
        document.body.classList.add(activeClass)
      } else {
        document.body.classList.remove(activeClass)
      }
    }
    document.querySelector('.' + toggleClass).addEventListener('click', toggle)
  }
}

toggleNav('nav-toggle', 'nav-active')


// set position

var positions = document.querySelectorAll('.position-at')
var earthOrbit = document.querySelector('#earthOrbit')

for (var i = 0; i < positions.length; i++) {
  positions[i].addEventListener('click', setPosition)
}

function setPosition(e) {
  e.preventDefault()
  earthOrbit.className = 'pause'
  if (this.classList.contains('september')) {
    earthOrbit.style.transform = 'rotate(270deg)'
  } else if (this.classList.contains('december')) {
    earthOrbit.style.transform = 'rotate(180deg)'
  } else if (this.classList.contains('march')) {
    earthOrbit.style.transform = 'rotate(100deg)'
  } else if (this.classList.contains('june')) {
    earthOrbit.style.transform = 'rotate(50deg)'
  } 
}