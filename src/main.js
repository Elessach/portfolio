function cursorLight(e){
	const newX = (e.clientX / window.innerWidth) * 100
	const newY = (e.clientY / window.innerHeight) * 100
	document.body.style.background = "radial-gradient(1200.00px at " + newX + "% " + newY + "%, rgba(196, 196, 196, 0) 0%, #000000 100%), linear-gradient(149.35deg, #00FFA3 24.09%, #00BD79 40.54%, #FF4D00 88.23%)"
}
document.body.addEventListener('mousemove', cursorLight)