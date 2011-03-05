// ==UserScript==
// @name             Minimalist for Google Reader
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require one time initialization on complete page load.
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {

	//---- VARIABLES ----//
	// f_* whether one-time task is done
	var f_guser = false;
	var f_user = false;
	var f_settings = false;
	var f_help = false;
	var f_out = false;
	var f_gbarToggle = false;
	var f_headerToggle = false;
	var f_navToggle = false;
	var f_nav = false;
	var hiddenG = false;
	var hiddenH = false;
	var hiddenN = false;
	var trying = false;
	var keyinit = false;
	var guser;
	var today = null;
	var running = false;
	var allow = true;
	//---- END VARIABLES ----//

	//---- CHECK PAGE LOAD ----//
	function getLoad() {
		return document.getElementById('reading-list-selector');
	}
	function init() {
		if (getLoad() == today) return;
		if (today != null)
			today.removeEventListener("DOMSubtreeModified", run, false);
		if ((today = getLoad()) != null) {
			console.log("MINIMALIST GOOGLE READER: Google Reader loaded! Work the magic...");
			today.addEventListener("DOMSubtreeModified", run, false);
			run();
		}
	}
	//---- END CHECK PAGE LOAD ----//

	//---- MAIN LOOP ----//
	function run() {
		// only run loop if it hasn't run this second and isn't running already
		if (running || !allow) return true;
		else {
			running = true;
			allow = false;
			window.setTimeout(function() {
				allow = true;
			}, 500);
		}
		// go loop go!
		console.log("MINIMALIST GOOGLE READER: **MAIN LOOP**");
		if (response.o.nav && !f_navToggle) {
			console.log("MINIMALIST GOOGLE READER: Adding the nav hook...");
			toggleNav();
			f_navToggle = true;
		}
		if (response.o.gbarH && !f_gbarToggle) {
			console.log("MINIMALIST GOOGLE READER: hiding Google Bar & adding the header hook...");
			try {
				var tbar = document.getElementById("gbar");
					minimalist(tbar, false, "hideG");
					minimalist(tbar.nextSibling, false, "hideG");
				var toggleG = document.createElement("div");
					toggleG.setAttribute("id", "gbarToggle");
					tbar.parentNode.insertBefore(toggleG, tbar);
				document.getElementById('logo-container').setAttribute('style','top: 45px;')
				document.getElementById('search').setAttribute('style','top: 45px;');
				f_gbarToggle = true;
				toggleHeader();
			} catch (e) { console.error(e); }
		}
		if (response.o.header && !f_headerToggle) {
			console.log("MINIMALIST GOOGLE READER: hiding header and adding toggle...");
			var head = document.getElementById("logo-container");
			try {
				if (!response.o.gbarH) {
					var toggle = document.createElement("div");
					toggle.setAttribute("id", "headerToggle");
					head.parentNode.insertBefore(toggle, head);
				}
				if (!response.o.gbarH )
					toggleHeader();
				f_headerToggle = true;
			} catch (e) { console.error(e); }
		}
		if (!keyinit) {
			try {
				if (response.o.gbarH) {
					hiddenG = true;
					document.getElementById('gbarToggle').addEventListener("click", toggleHeader, false);
				}
				if (response.o.header) {
					hiddenH = true;
					if (!response.o.gbarH)
						document.getElementById('headerToggle').addEventListener("click", toggleHeader, false);
				}
				if (response.o.nav) {
					hiddenN = true;
					document.getElementById('navToggle').addEventListener("click", toggleNav, false);
				}
				keyinit = true;
			} catch (e) {}
		}
		if (response.o.cbar && !document.getElementById('cbarOne')) {
			console.log("MINIMALIST GOOGLE READER: customizing Google links...");
			try {
				var one = document.getElementById("gbar").childNodes[0].childNodes[0];
					one.setAttribute("href", response.o.c_u_1);
					one.setAttribute("target", response.o.c_t_1);
					one.innerHTML = response.o.c_n_1;
				var two = document.getElementById("gbar").childNodes[0].childNodes[2];
					two.setAttribute("href", response.o.c_u_2);
					two.setAttribute("target", response.o.c_t_2);
					two.innerHTML = response.o.c_n_2;
				var three = document.getElementById("gbar").childNodes[0].childNodes[4];
					three.setAttribute("href", response.o.c_u_3);
					three.setAttribute("target", response.o.c_t_3);
					three.innerHTML = response.o.c_n_3;
				var four = document.getElementById("gbar").childNodes[0].childNodes[6];
					four.setAttribute("href", response.o.c_u_4);
					four.setAttribute("target", response.o.c_t_4);
					four.innerHTML = response.o.c_n_4;
				var five = document.getElementById("gbar").childNodes[0].childNodes[8];
					five.setAttribute("style", "font-weight: normal;");
					five.setAttribute("class", "");
					five.innerHTML = "<a target=\"" + response.o.c_t_5 + "\" id=\"cbarOne\" href=\"" + response.o.c_u_5 + "\" class=\"gb1\">" + response.o.c_n_5 + "</a>";
				var six = document.getElementById("gbar").childNodes[0].childNodes[10];
					six.setAttribute("href", response.o.c_u_6);
					six.setAttribute("target", response.o.c_t_6);
					six.innerHTML = response.o.c_n_6;
				if (response.o.cbarM) {
					var moreD = document.querySelectorAll("#gbar div.gbm")[0];
					var current = document.createElement("div");
						current.setAttribute('class','gb2');
					var hr = document.createElement("div");
						hr.setAttribute('class','gbd');
						current.appendChild(hr);
						moreD.insertBefore(current, moreD.firstChild);
					current = document.createElement("a");
						current.setAttribute('target','_blank');
						current.setAttribute('class','gb2');
						current.setAttribute('href','http://www.google.com');
						current.appendChild(document.createTextNode("Web"));
						moreD.insertBefore(current, moreD.firstChild);
					current = document.createElement("a");
						current.setAttribute('target','_blank');
						current.setAttribute('class','gb2');
						current.setAttribute('href','http://picasaweb.google.com');
						current.appendChild(document.createTextNode("Photos"));
						moreD.insertBefore(current, moreD.firstChild);
					current = document.createElement("a");
						current.setAttribute('target','_blank');
						current.setAttribute('class','gb2');
						current.setAttribute('href','http://www.google.com/calendar');
						current.appendChild(document.createTextNode("Calendar"));
						moreD.insertBefore(current, moreD.firstChild);
					current = document.createElement("a");
						current.setAttribute('target','_blank');
						current.setAttribute('class','gb2');
						current.setAttribute('href','http://docs.google.com');
						current.appendChild(document.createTextNode("Documents"));
						moreD.insertBefore(current, moreD.firstChild);
					current = document.createElement("a");
						current.setAttribute('target','_blank');
						current.setAttribute('class','gb2');
						current.setAttribute('href','http://mail.google.com/mail');
						current.appendChild(document.createTextNode("Gmail"));
						moreD.insertBefore(current, moreD.firstChild);
				} else {
					var more = document.getElementById("gbar").childNodes[0].childNodes[12];
						more.setAttribute("style","display: none !important;");
				}
			} catch (e) { console.error(e); }
		}
		if ( !f_guser && (response.o.user || response.o.settings || response.o.help || response.o.out)) {
			console.log("MINIMALIST GOOGLE READER: targetting Google User bar...");
			try {
				if (document.getElementById("guser")) {
					guser = document.getElementById("guser").firstChild;
					f_guser = true;
				}
			} catch (e) { console.error(e); }
		}
		if (response.o.user && !f_user && f_guser) {
			console.log("MINIMALIST GOOGLE READER: hiding signed in...");
			try {
				var user = guser.childNodes[2];
					user.setAttribute("style","display: none !important;");
					user.parentNode.removeChild(user.nextSibling);
				f_user = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.settings && !f_settings && f_guser) {
			console.log("MINIMALIST GOOGLE READER: hiding settings...");
			try {
				var settings = guser.childNodes[5];
					settings.setAttribute("style","display: none !important;");
					settings.parentNode.removeChild(settings.nextSibling);
				f_settings = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.help && !f_help && f_guser) {
			console.log("MINIMALIST GOOGLE READER: hiding help...");
			try {
				var help = guser.childNodes[7];
					help.setAttribute("style","display: none !important;");
					help.parentNode.removeChild(help.nextSibling);
				f_help = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.out && !f_out && f_guser) {
			console.log("MINIMALIST GOOGLE READER: hiding sign out...");
			try {
				var out = guser.childNodes[9];
					out.setAttribute("style","display: none !important;");
					out.parentNode.removeChild(out.previousSibling);
				f_out = true;
			} catch (e) { console.error(e); }
		}
		running  = false;
	}
	//---- END MAIN LOOP ----//

	//---- HELPER METHODS ----//
	function keypress(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		console.log("MINIMALIST GOOGLE READER: keystroke intercepted");
		if (String.fromCharCode(event.which)=="g") {
		}
		// [ / ]
		if (response.o.header && event.which == "47" && !event.ctrlKey && !event.metaKey) {
			console.warn('search');
			toggleHeader();
		}
		// [ \ ]
		if ((response.o.header || response.o.gbarH) && event.which == "92" && !event.ctrlKey && !event.metaKey) {
			toggleHeader();
		}
		// [ ` ] tilde key
		if (response.o.nav && event.which == "96" && !event.ctrlKey && !event.metaKey) {
			toggleNav();
		}
		// [ v ]
		if (event.which == 118) {
			var x, link;
			x = document.getElementById('current-entry');
			if (x == null) {
				return;
			}
			x = x.getElementsByTagName('a');
			link = x[0].getAttribute('href');
			event.stopPropagation();
			event.preventDefault();
			window.open(link)
			self.focus();
		}
		return true;
	}

	function toggleHeader(){
		if (response.o.gbarH && !response.o.header) {
			if (hiddenG) {
				minimalist(document.getElementById('gbar'), true, "hideG");
				minimalist(document.getElementById('guser'), true, "hideG");
				minimalist(document.getElementsByClassName('gbh')[0], true, "hideG");
				minimalist(document.getElementsByClassName('gbh')[1], true, "hideG");
				document.getElementById('logo-container').setAttribute('style','top: 45px;')
				document.getElementById('search').setAttribute('style','top: 45px;');
				document.getElementById('main').setAttribute('style','top: 75px;');
				hiddenG = false;
			} else {
				minimalist(document.getElementById('gbar'), false, "hideG");
				minimalist(document.getElementById('guser'), false, "hideG");
				minimalist(document.getElementsByClassName('gbh')[0], false, "hideG");
				minimalist(document.getElementsByClassName('gbh')[1], false, "hideG");
				document.getElementById('logo-container').setAttribute('style','top: 15px;')
				document.getElementById('search').setAttribute('style','top: 15px;');
				document.getElementById('main').setAttribute('style','top: 45px;');
				hiddenG = true;
			}
		} else if (response.o.gbarH && response.o.header) {
			if (hiddenH) {
				minimalist(document.getElementById('gbar'), true, "hideG");
				minimalist(document.getElementById('guser'), true, "hideG");
				minimalist(document.getElementsByClassName('gbh')[0], true, "hideG");
				minimalist(document.getElementsByClassName('gbh')[1], true, "hideG");
				minimalist(document.getElementById('logo-container'), true, "hideH");
				minimalist(document.getElementById('search'), true, "hideH");
				document.getElementById('main').setAttribute('style','top: 75px;');
				hiddenH = false;
			} else {
				minimalist(document.getElementById('gbar'), false, "hideG");
				minimalist(document.getElementById('guser'), false, "hideG");
				minimalist(document.getElementsByClassName('gbh')[0], false, "hideG");
				minimalist(document.getElementsByClassName('gbh')[1], false, "hideG");
				minimalist(document.getElementById('logo-container'), false, "hideH");
				minimalist(document.getElementById('search'), false, "hideH");
				document.getElementById('main').setAttribute('style','top: 10px;');
				hiddenH = true;
			}
		} else {
			if (hiddenH){
				minimalist(document.getElementById('logo-container'), true, "hideH");
				minimalist(document.getElementById('search'), true, "hideH");
				document.getElementById('main').setAttribute('style','top: 65px;')
				hiddenH = false;
			} else {
				minimalist(document.getElementById('logo-container'), false, "hideH");
				minimalist(document.getElementById('search'), false, "hideH");
				document.getElementById('main').setAttribute('style','top: 35px;')
				hiddenH = true;
			}

		}
	}

	function toggleNav() {
		if (response.o.nav) {
			if (hiddenN) {
				document.getElementsByTagName('body')[0].setAttribute("class", "webkit loaded");
				document.getElementById('chrome-lhn-menu').setAttribute("class","goog-button goog-button-base unselectable goog-inline-block goog-button-float-left goog-menu-button hidden");
				hiddenN = false;
			} else {
				document.getElementsByTagName('body')[0].setAttribute("class", "webkit loaded lhn-hidden");
				document.getElementById('chrome-lhn-menu').setAttribute("class","goog-button goog-button-base unselectable goog-inline-block goog-button-float-left goog-menu-button");
				hiddenN = true;
			}
		}
	}

	function minimalist(element, remove, minClass) {
		var classes = new Array();
		try { classes = element.getAttribute("min").split(" "); } catch(e) {}
		classes = removeItems(classes, minClass);
		if (!remove) classes.push(minClass);
		element.setAttribute("min", classes.join(" "));
	}
	
	function removeItems(array, item) {
		var i = 0;
		while (i < array.length) {
			if (array[i] == item)
				array.splice(i, 1);
			else i++;
		}
		return array;
	}
	//---- END HELPER METHODS ----//

	// LISTENERS
	window.addEventListener("click", run, false);
	document.addEventListener("keypress", keypress, true);
	window.addEventListener("DOMSubtreeModified", init, false);
});