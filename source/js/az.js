
var wrapper = document.getElementById('content-wrapper')
var headerHeight = window.getComputedStyle(document.getElementById('header')).getPropertyValue('height').replace('px', '') * 1

document.addEventListener('scroll', function (e) {
  var classes = wrapper.className.split(/\s/).filter(function (x) { return x !== 'affix' }).join(' ')
  if (e.pageY > headerHeight) {
    wrapper.className = classes + 'affix'
  } else {
    wrapper.className = classes
  }
})

document.addEventListener('click', function (e) {
  console.log(headerHeight)
})
