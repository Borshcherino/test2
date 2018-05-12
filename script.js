/*eslint-disable no-unused-vars*/
var document;
function friendToggle() {
	"use strict";
	var se = document.querySelector('.makeafriend_hidden');
	if (se.classList.contains('show')) {
		se.classList.remove('show');
		se.classList.add('hide');
	} else {
		se.classList.remove('hide');
		se.classList.add('show');
	}
}