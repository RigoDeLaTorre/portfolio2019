//Animate on scroll library = https://github.com/michalsnik/aos

import AOS from './aos'

AOS.init({
	duration: 1200
})

document.addEventListener('DOMContentLoaded', function(event) {
	var elems = document.querySelectorAll('.sidenav')
	var instances = M.Sidenav.init(elems)
})
//test function on index.html h1 tag
const getElement = name => {
	console.log(name)
}

export { getElement }
