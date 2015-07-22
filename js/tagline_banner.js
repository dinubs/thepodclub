if (Meteor.isClient) {
	Template.tagline_banner.helpers({ 
		homepage: function() {
	    return window.location.pathname === '/';
	  }
	});
}