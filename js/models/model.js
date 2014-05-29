/*global $ */
/*jshint unused:false */
var app = app || {};

app.Activity = Appacitive.Object.extend('activity', {

    photos: function() {
        var pics = [];

        this.get('photos').forEach(function(p, i) {
            pics.push({ url: p, index: i+1, slide: i, active: (i == 0) ? true : false });
        });

        return pics;
    },

	fetch: function(options) {
		var self = this;

        // Create grpah projection query by pass acitvity id
        var query = new Appacitive.Queries.GraphAPI('get_activity', [this.id]);
        
        // Create a promise
        var promise = Appacitive.Promise.buildPromise(options);
        
        // Call fetch
        query.fetch().then(function(activities) {
        	 // As we've overrided fetch function we'll need to copy 
            // activity attributes in existing object
            self.copy(activities[0].toJSON(), true);
            
            // Contains all children who're connected to this activity 
            self.children = activities[0].children;

            self.description = self.children.description.length ? self.children.description[0].get('text') : "";

            self.terms = self.children.terms.length ? self.children.terms[0].get('text') : "";

            self.inclusions = self.children.inclusions;

            self.details = self.children.details;

            self.infos = self.children.infos;

    	    // Fulfill the promise
            promise.fulfill.apply(promise, [self]);
        }, function() {
            // Reject the promise
            promise.reject.apply(promise, arguments);
        });

    	return promise;
	},

	currency: function() {
		if (this.get('currency') == 'USD') return '$';
		return this.get('currency'); 
	}

});

app.Description = Appacitive.Object.extend('description', {
    text: function() {
        return this.get('text');
    }
});

app.Info = Appacitive.Object.extend('info', {

    cssClass: function() {
        switch(this.get('type')) {
            case 'availability' : return 'availability';
            case 'duration' : return 'duration';
            case 'location' : return 'experience-location';
            case 'airport' : return 'airport';
            case 'info' : return 'about-merchant';
        }
    },

    text: function() {
        return this.get('text');
    }    

});