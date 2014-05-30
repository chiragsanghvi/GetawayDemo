/*global $ */
/*jshint unused:false */
var app = app || {};

Appacitive.initialize({ 
  apikey: "PYK+CpSH9A3NMwGb2JpPW+6kEF8yvK3Wb8OUmMu134U=",// The master or client api key for your app on appacitive.
  env: "sandbox",      // The environment that you are targetting (sandbox or live).
  appId: "60351872104530604"     // The app id for your app on appacitive. 
});

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});