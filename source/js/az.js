
var wrapper = document.getElementById('content-wrapper')
var sider = document.getElementById('sider')
var content = document.getElementById('content')
var header = document.getElementById('header')
var headerHeight = getComputedSize(header, 'height')

function getComputedSize(el, prop) {
  return window.getComputedStyle(el).getPropertyValue(prop).replace('px', '') * 1
}

document.addEventListener('scroll', function (e) {
  var classes = wrapper.className.split(/\s/).filter(function (x) { return x !== 'affix' }).join(' ')
  if (e.pageY > headerHeight) {
    var siderWidth = getComputedSize(sider, 'width')
    var contentWidth = getComputedSize(content, 'width')
    var siderRight = (window.innerWidth - contentWidth - siderWidth)/2
    console.log(
      'sider right:' + siderRight,
      'content width:' + contentWidth,
      'sider width:' + siderWidth,
      'window:' +window.innerWidth)
    wrapper.className = classes + 'affix'
    sider.style.right = siderRight + 'px'
  } else {
    wrapper.className = classes
  }
})

