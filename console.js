var PROMPT = "rhor@console:~$ ";

$(function() {
});

$('#cmdline').keypress(function (e) {
	var key = e.which;
	if(key == 13) {
		var command = $('#cmdline').val();
		
		log(PROMPT + command);
		
		var r = Math.floor((Math.random() * 4));
		
		switch(r) {
			case 0:
				log("OK !");
				break;
			case 1:
				info(new Date());
				break;
			case 2:
				warn("Commande invalide...");
				break;
			case 3:
				error("Fatal error !");
				break;
		}
		
		$('#cmdline').val("");
		return false;  
	}
});  

function log(string) {
	console.log(string);
	$("#logs").append('<li>' + string + '</li>');
}

function info(string) {
	console.info(string);
	$("#logs").append('<li class="info">' + string + '</li>');
}

function warn(string) {
	console.warn(string);
	$("#logs").append('<li class="warn">' + string + '</li>');
}

function error(string) {
	console.error(string);
	$("#logs").append('<li class="error">' + string + '</li>');
}