

document.querySelector('.nav-icon').addEventListener('click', function()  {

	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');

	document.querySelector('.close').style.display = 'block';

});

document.querySelector('.close').addEventListener('click', function() {

	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');

	document.querySelector('.close').style.display = 'none';


});
