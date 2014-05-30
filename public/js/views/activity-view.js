/*global Backbone, jQuery, Appacitive */
var app = app || {};

'use strict';

// The Application
// ---------------

// Our overall **TodosView** is the top-level piece of UI.
app.ActivityView = Backbone.View.extend({

	// Instead of generating a new element, bind to the existing skeleton of
	// the App already present in the HTML.
	el: '#divActivity',

	// Main todos template
    activityTemplate: $("#activity-template").html(),

    initialize: function() {

        var qs  = window.location.pathname.split('/');

        var activityId = '60362378919936364';

        if (qs.length > 1) activityId = qs[1];

        if(!activityId || activityId.length == 0) activityId = '60362378919936364';

        var self = this;

    	this.model = new app.Activity({ id: activityId });

    	this.model.fetch().then(function() {
            $('title').html(self.model.get('name') + ' - Getaway');

	        self.$el.html(Mustache.render(self.activityTemplate, self.model));

            basket
                .require({ url: 'js/infra/tabs.js' })
                .then(function () {
                    $('#preLoader').hide();
                    self.renderMap("map_canvas");
                    self.renderMobileMap("map_canvas2");
                });

    	}, function() {
            alert("Error fetching activity");
    	});
    },


    renderMobileMap: function(canvasId) {
        var location = this.model.get('geocode');
        var mapLoc = "http://maps.googleapis.com/maps/api/staticmap?center=" + location.toString() + "&zoom=13&scale=false&size=600x300&maptype=roadmap&sensor=false&format=png&visual_refresh=true&markers=size:mid%7Ccolor:red%7C" + location.toString();
        var content = '<a target="_blank" href="http://maps.google.com?q=' + location.toString() + '" target="_blank"><img width="100%" height="100%" src="' + mapLoc + '"/></a>';
        $('#' + canvasId).html(content);
    },  

    renderMap: function(canvasId) {
        var location = this.model.get('geocode');
        var position = new google.maps.LatLng(location.lat, location.lng);

        var myOptions = {
          zoom: 10,
          center: position,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById(canvasId), myOptions);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: this.model.get('long_name')
        });

        var contentString = '<div><h3>' + this.model.get('long_name') + '</h3><br/><h4>' + this.model.get('location_name') + '<h4></div>';
        var width = 300;


        var infowindow= new google.maps.InfoWindow({
          content: contentString,
          maxWidth: width
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }

});
