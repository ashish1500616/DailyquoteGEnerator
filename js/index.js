$(document).ready(function() {
	$("#new").click(function() {
		// var cb = Math.round(new Date().getTime() / 1000);
		$.ajaxSetup({
			cache: false
		});
		$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
			console.log(a);
			$("#quote").html("\""+a[0].content + "<p>&mdash; " + a[0].title +"</br>\""+ "</p>");
		});
	});
});
//what is mdash?
//what is cross.?

//facebook plugin invoke
