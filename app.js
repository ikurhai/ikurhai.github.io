$(function() {
	console.log("SW-Test");
	
	console.log("Vérification compatibilité du navigateur avec les Service Workers");
	if ("serviceWorker" in navigator) {
		console.log("OK !");
		
		console.log("Enregistrement du service worker");
		navigator.serviceWorker.register("/rhor.bitbucket.org/sw.js", { scope: "/rhor.bitbucket.org/" }).then(function(reg) {
			console.log("OK ! Scope : " + reg.scope);
		}).catch(function(error) {
			console.error(error);
		});
	} else {
		console.log("Navigateur incompatible");		
	}
});
