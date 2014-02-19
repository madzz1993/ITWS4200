$(document).ready(function(){
$.ajax({
type: "GET",
url: "tweets-clean.json",
dataType: 'json',
error: function(jqXHR, Status, ErrorThrown) {
	alert("Could not load file: " + ErrorThrown);

},
success: function (data) {
	var tweets= [];
	$.each(data, function(i, item) {
		var temporary=[];
		temporary.push(item.text);
		temporary.push(item.user.screen_name);
		temporary.push(item.user.name);
		temporary.push(item.created_at);
		tweets.push(temporary);

	} );

	//create an html for the tweets
	var output= '';
	$.each(tweets, function(i, tweet){
		output+='<li>';
		output+=  '<a href= "twitter.com/'+tweet[1]+'">';
		output+= tweet[3];
		output+= '</a>'
		output+= '<p>' + tweet[2] + '</p>';
		output+= '<p>' + tweet[0] + '</p>'
		output+= '</li>'

	});

	$('#tweets ul').html(output);

	$('#tweets li').slice (0,5).show();
	var interval=5;
	setInterval(function() {
		if(interval==150) {

			$('#tweets li').slice (interval-5, interval).hide('slow');
			interval=5;
		}
		else {
			$('#tweets li').slice (interval-5, interval).hide('slow'); }

		$('#tweets li').slice (interval, interval+5).slideDown('slow');
		
		interval= interval+5;





	},3000);


	


}

});

});