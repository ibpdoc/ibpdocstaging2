// conversion tracking for ticket defections
function trackTicketDefections() {
	if (window.location.hash.indexOf('deflection=') >= 0) {
		var regex = /deflection=([^;&]+)/;
		var query = regex.exec(window.location.hash)[1];
		$.ajax({
			url: '//search-api.swiftype.com/api/v1/public/engines/search.json?callback=?',
			data: {
			q: decodeURIComponent(query),
			engine_key: 'eVDGF5o9AkJQaQGPPoL1'
			},
			xhrFields: { withCredentials: true },
			dataType: 'json',
			success: function(data, status, jqXHR) {
				// record conversion here
				_st('conversion', 'ZT685gokyiU3zzzfByq2');
			}
			});
	}
}

$("document").ready(function() {trackTicketDefections();})