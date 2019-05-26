let panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
	panel.addEventListener('click', toggleOpen);
});
panels.forEach((panel) => {
	panel.addEventListener('transitionend', toggleClose);
});

function toggleOpen() {
	this.classList.toggle('open');
}
function toggleClose(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
