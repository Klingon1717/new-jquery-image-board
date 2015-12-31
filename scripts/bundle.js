(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var menu = $('#menu');
	var pic = $('#pic');
	var url = $('#url');
	var cap = $('#cap');
	var selfie = $('#selfie');
	var display = $('#display');
	var cancel = $('#cancel');

	$.get('http://tiyfe.herokuapp.com/collections/deathtoselfie', function (response) {
		response.forEach(function (response, index) {
			display.append('<div class = "photoBox"><div><img class = "newPhoto"s src= ' + response.photo + '></img></div><div class ="newCap"> ' + response.caption + '</div></div>');
		});
	}, 'json');
	menu.click(function (e) {
		e.preventDefault();
		pic.slideToggle('slow');
		var newUrl = url.val();
		var newCap = cap.val();
	});

	selfie.submit(function (e) {
		e.preventDefault();
		var newUrl = url.val();
		var newCaption = cap.val();

		$.post('http://tiyfe.herokuapp.com/collections/deathtoselfie', {
			photo: newUrl,
			caption: newCaption
		}, function (response) {
			display.prepend('<div class = "photoBox"><div><img class = "newPhoto" src= ' + response.photo + '></img></div><div class ="newCap"> ' + response.caption + '</div></div>');
		}, 'json');
		pic.slideToggle('fast');
	});
	cancel.click(function () {
		url.val();
		cap.val();
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map