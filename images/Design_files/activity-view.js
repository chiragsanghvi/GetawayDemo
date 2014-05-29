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

        var activityId = getQueryStrings()["id"];

        var self = this;

    	this.model = new app.Activity({ id: activityId });

    	this.model.fetch().then(function() {
	        self.$el.html(Mustache.render(self.activityTemplate, self.model));

            basket
                .require({ url: 'js/infra/tabs.js', unique: 'v1' })
                .then(function () {
                    $('#preLoader').hide();
                    self.renderMap();
                });

    	}, function() {
            alert("Error fetching activity");
    	});
    },

    renderMap: function() {
        var location = this.model.get('geocode');
        var position = new google.maps.LatLng(location.lat, location.lng);

        var myOptions = {
          zoom: 10,
          center: position,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        var contentString = '<div><h3>' + this.model.get('long_name') + '</h3><br/><h4>' + this.model.get('location_name') + '<h4></div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 300
        });

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: this.model.get('long_name')
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }

});
