/*global Backbone, jQuery, Appacitive */
var app = app || {};

'use strict';

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
// The main view for the app
app.AppView = Backbone.View.extend({
	// Instead of generating a new element, bind to the existing skeleton of
	// the App already present in the HTML.
	el: $("#container"),

	initialize: function() {
	  	this.render();
	},

	render: function() {
		new app.ActivityView();
	}
});
