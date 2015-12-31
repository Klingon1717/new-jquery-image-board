'use strict';
$(document).ready(function(){
	var menu = $('#menu');
	var pic = $('#pic');
	var url = $('#url');
	var cap = $('#cap');
	var selfie = $('#selfie');
	var display = $('#display');
	var cancel = $('#cancel');

$.get(
	'http://tiyfe.herokuapp.com/collections/deathtoselfie',
	function(response){
		response.forEach(function(response, index){
			display.append('<div class = "photoBox"><div><img class = "newPhoto"s src= '+ response.photo+'></img></div><div class ="newCap"> '+response.caption+'</div></div>')
		})
	},
	'json'
);
menu.click(function(e){
	e.preventDefault();
	pic.slideToggle('slow');
	var newUrl = url.val();
	var newCap =cap.val();
});

selfie.submit(function(e){
	e.preventDefault();
	var newUrl = url.val();
	var newCaption = cap.val();


	$.post(
		'http://tiyfe.herokuapp.com/collections/deathtoselfie',
		{
			photo: newUrl,
			caption: newCaption
		},
		function(response){
			display.prepend('<div class = "photoBox"><div><img class = "newPhoto" src= '+ response.photo+'></img></div><div class ="newCap"> '+response.caption+'</div></div>')
		},
		'json'
		)
	pic.slideToggle('fast');
});
	cancel.click(function(){
		url.val();
		cap.val();

	});
});


