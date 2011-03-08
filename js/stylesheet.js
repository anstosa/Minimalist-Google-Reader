// ==UserScript==
// @name             Minimalist for Google Reader
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Stylesheet construction and injection
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var css = "";

	css += "input:not(#search-restrict-input), textarea { outline: 0; margin: 1px !important; border: 1px solid !important; border-color: #585858 #B0B0B0 #B0B0B0 #B0B0B0 !important; }\n";
	css += "input:focus, textarea:focus { outline: 0; margin: 0px !important; border: 2px solid #BCF !important; }\n";
	css += "#nav:not([min ~= 'hideN']) { width: " + response.o.navW + "px !important; }\n";
	css += "#chrome { margin-left: " + response.o.navW + "px; }\n";
	css += "#chrome[min ~= 'hideN'] { margin-left: 0; }\n";
	css += "#gbar, #guser { height: 20px; padding-bottom: 0 !important; }\n";
	css += ".subscribe-button { padding-left: 0 !important; background: none; }\n";	
	
	/*css += "#nav { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAK8CAMAAAD/Ke59AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5QTFRFHx8fMzMzMjIyNjY2MTExMDAwLi4uLy8vLS0tNTU1NDQ0Hh4eKysrHR0dLCwsKioqKCgoKSkpICAgJSUlJiYmJycnJCQkISEhIyMjIiIiHhf88QAAAR9JREFUeNrs1NtuwyAMBmCS5tSWcgiHwPu/6LwsEm2BhATSadJuflnflYWN0eVCKSJkHJFSVYUeD87Rv51s9Y9dr87qMw3jFOO+8W1jLGi3235rmrDdX0xKsPsZVlWFrH0ySmdrC1hdpxpEAev7b1O+qbA1TaZxOk2e8ah1IesWa31rd5sQYAjFTfmmPOt7Z8NQyBhzJmWydd26EfI5G4aQQSyG8YYpdchIyMhe0xqu6DgKkWUYZ5qUUYPLsBjEm1H6+wY/ajbOU0z7phcTopgx5gy2c8UgnE3TixlTwpRaN5j0umlhrWf6kEmZYMZsGrzkToNIMCEyzZioQVfZpkOmS5i1YNYeNKiiZkyCzV2FzIbMJttcnWDWtz8SXwIMAM8UwWqEpG2GAAAAAElFTkSuQmCC) repeat-x #222 !important;}"
		+ "#nav [class*='link'], #nav [id*='link'], #nav [class*='lk'], #nav [id*='lk'] { color: #fff !important; }"
		+ ".scroll-tree li, .lhn-section  { background: transparent !important; background-color: transparent !important; }"
		+ "#sub-tree::-webkit-scrollbar { width: 0px; }";*/

	// GENERAL
		if (response.o.trans)
			css += "* { -webkit-transition-property: background-color, border-color, color, opacity, width, top; -webkit-transition-duration: .15s; -webkit-transition-timing-function: ease-out; }\n";
		if (response.o.corners)
			css += "input, textarea { -webkit-border-radius: 5px; }\n";
		if (response.o.backC) {
			css += "body, .scroll-tree li, .lhn-section, #entries .entry { background: " + response.o.backCLR + " !important;  background-color: " + response.o.backCLR + " !important; }\n";
		}
		if (response.o.borders) {
			css += "#chrome-header, #chrome-view-links, #chrome-lhn-toggle:hover, #lhn-selectors .selected, #lhn-selectors .selected:hover, .scroll-tree li .tree-link-selected, .scroll-tree li .tree-link-selected:hover, .scroll-tree li a.tree-link-selected .tree-item-action-container { background: " + response.o.borderCLR + " !important; background-color: " + response.o.borderCLR + " !important; }\n";
			css += "#viewer-footer, #viewer-header, #chrome-lhn-toggle, .selector:not(.selected):hover, a.link:hover { background: " + lighten(lighten(response.o.borderCLR)) + " !important; background-color: " + lighten(lighten(response.o.borderCLR)) + " !important; }\n";
			css += "a.link:hover div:last-child { background-color: " + lighten(lighten(response.o.borderCLR)) + "; }\n";
			css += "#viewer-container { background: " + lighten(lighten(lighten(response.o.borderCLR))) + " !important; background-color: " + lighten(lighten(lighten(response.o.borderCLR))) + " !important; }\n";
			css += ".selected > a.link:hover { background: transparent !important; background-color: transparent !important; }\n";
			css += "#current-entry .card, #viewer-footer, #viewer-top-controls, #chrome, .lhn-section, .gbh, .gbd, #entries.list #current-entry .collapsed, #entries.list #current-entry.expanded, #entries.list #current-entry.expanded .entry-actions { border-color: " + response.o.borderCLR + " }\n";
			css += "#chrome-lhn-toggle-icon { display: none; }\n";
		}
		if (response.o.BTN) {
			css += ".goog-button-base-content { color: " + response.o.BTNcolor + " !important; }\n";
			css += ".goog-button-base-inner-box { background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNbottom + "),to(" + response.o.BTNtop + ")) !important; }\n";
			css += ".goog-button-base-top-shadow { display: none; }\n";
			css += ".goog-button-base-pos { border-color: " + response.o.BTNborder + " !important; }\n";
		} else {
			css += ".goog-button-base-content { color: #000 !important; }\n";
			css += ".goog-button-base-inner-box { background: -webkit-gradient(linear,0% 40%,0% 70%,from(#f9f9f9),to(#ded5de)) !important; }\n";
			css += ".goog-button-base-top-shadow { display: none; }\n";
			css += ".goog-button-base-pos { border-color: #bbb !important; }\n";
		}
		if (response.o.linkC)
			css += "[class *= 'link'], [id *= 'link'], [class *= 'lk'], [id *= 'lk'], .st-more, .mv-dayname, .dp-sb-cur, .mg-print, .mg-refresh, .ui-dtsr-unselected, .qnb-quickadd, a, a[class *= 'gb'] { color: " + response.o.linkCLR + " !important; }\n";
	// GOOGLE BAR
		if (response.o.gbar)
			css += "#gbar { display: none !important; }\n";
		if (response.o.gbarH) {
			css += "#gbarToggle { background-color: rgb(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#gbarToggle:hover { background-color: rgba(0,0,0,.5); }\n";
			css += ".gbh, .gbd { top: 34px; }\n";
			css += "#logo-container[min ~= 'hideG'] { top: 50px !important; }\n";
			css += "#logo-search[min ~= 'hideG'] { top: 50px !important; }\n";
			css += "#search[min ~= 'hideG'] { top: 75px !important; }\n";
		}
		if (response.o.gbarO) {
			css += "#guser, #gbar { opacity: 0; -webkit-transition-delay: .25s; }\n";
			css += "#gbar:hover, #guser:hover { opacity: 1; }\n"
		}
		if (response.o.gbarB)
			css += ".gbh, .gbd { border: 0 !important; }\n";
	// HEADER
		if (response.o.header || response.o.gbarH) {
			css += "[min ~= 'hideH'], [min ~= 'hideH'] *, [min ~= 'hideG'], [min ~= 'hideG'] * { opacity: 0; margin: 0 !important; padding: 0 !important; height: 0 !important; }\n";
			css += "[min ~= 'hideH'] *, [min ~= 'hideG'] * { display: none; }\n";
		}
		if (response.o.header) {
			//css += "[min ~= 'hideH'] #ntowner { margin-top: -20px !importnat; opacity: 1 !important; }\n";
		}
		if (response.o.header && !response.o.gbarH) {
			css += "#headerToggle { z-index: 9999; background-color: rgba(0,0,0,0); position: absolute; top: 25px; height: 10px !important; width: 100%; cursor: pointer !important;}\n";
			css += "#headerToggle:hover { background-color: rgba(0,0,0,.15); }\n";
		}
		if (response.o.logo) {
			css += "#logo { background: url(" + response.o.logoSRC + ") !important; background-position: 0% 0%; background-repeat: no-repeat no-repeat; }\n";
		}
		if (response.o.logoH) {
			css += "#logo-container { display: none !important; }\n";
			css += "#search { left: 10px !important; }\n";
		}
		if (response.o.s_all)
			css += "#search { display: none !important; }\n";
		if (response.o.s_filter)
			css += "#search-restrict { display: none !important; }\n";
		if (response.o.s_button)
			css += "#search-submit { display: none !important; }\n";
	// MAIN
		if (response.o.t_title) {
			css += "#chrome-header { display: none !important; }\n";
			if (response.o.borders)
				css += "#chrome-viewer-container { border-top: 1px solid " + response.o.borderCLR + " !important; }\n";
			else css += "#chrome-viewer-container { border-top: 1px solid #C2CFF1 !important; }\n";
		}
		if (response.o.t_el)
			css += "#chrome-view-links { display: none; }\n";
		if (response.o.t_top)
			css += "#viewer-header { display: none; }\n";
		if (response.o.n_na)
			css += "#viewer-all-new-links { display: none; }\n";
		if (response.o.n_read)
			css += "#mark-all-as-read-split-button { display: none; }\n";
		if (response.o.t_refresh)
			css += "#viewer-refresh { display: none; }\n";
		if (response.o.t_view)
			css += "#stream-prefs-menu { display: none; }\n";
		if (response.o.footer)
			css += "#viewer-footer { display: none; }\n";
		if (response.o.h_side)
			css += "#right-section { display: none; }\n";
		if (response.o.h_tips)
			css += "#tips { display: none; }\n";
		if (response.o.h_blog)
			css += "#team-messages { display: none; }\n";
		if (response.o.h_footer) {
			css += "#overview-footer { display: none; }\n";
			css += "#sections { border: 0 !important; border-color: transparent !important; }\n";
		}
		if ((response.o.itemW != 0) && (response.o.itemW != 650))
			css += ".entry .entry-body, .entry .entry-title, .entry .entry-likers { max-width: " + response.o.itemW + "px !important; }\n";
		if (response.o.i_break)
			css += ".entry-title-go-to { background: none !important; }\n";
		if (response.o.i_footer)
			css += ".entry-actions { display: none; }\n";
		if (response.o.i_text) {
			css += ".entry-actions span, .entry-actions span span { display: inline-block; width: 16px !important; margin: 0 5px 0 0 !important; padding: 0 !important; color: transparent !important; }\n";
			css += ".action-area { margin-top: -4px !important; }\n";
			css += ".entry-actions span:nth-of-type(7) { display: none !important; }\n";
		}
		if (response.o.i_star)
			css += ".star { display: none !important; }\n";
		if (response.o.i_like)
			css += ".like { display: none !important; }\n";
		if (response.o.i_share)
			css += ".broadcast { display: none !important; }\n";
		if (response.o.i_note)
			css += ".broadcast-with-note { display: none !important; }\n";
		if (response.o.i_email)
			css += ".email { display: none !important; }\n";
		if (response.o.i_unread)
			css += ".read-state { display: none !important; }\n";
		if (response.o.i_tags)
			css += ".tag { display: none !important; }\n";
	// NAVIGATION
		if (response.o.nav) {
			css += "#navToggle { z-index: 999; background-color: rgba(0,0,0,0); width: 10px !important; cursor: pointer !important; }\n";
			css += "#navToggle:hover { background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.15)), to(rgba(0,0,0,0))); }\n";
			css += "td[min ~= 'hideN'] { width: 0px !important; opacity: 0 !important; overflow: hidden !important; }\n";
			css += "#sidebar:not([min ~= 'hideN']) { width: " + (parseInt(response.o.navW) + 10) + "px !important; }\n";
			css += "#sidebar, #sidebar[min ~= 'hideN'] + #mainnav { border-left: 10px solid #fff; }\n";
			//css += "#sidebar, #nav { width: " + response.o.navW + "px; opacity: 1; }\n";
		}
		if (response.o.navA)
			css += "#lhn-add-subscription-section { display: none; }\n";
		if (response.o.n_icons) {
			css += ".selector-icon, .scroll-tree .icon, .scroll-tree .sub-icon, #recommendations-tree .sub-icon { display: none; }\n";
			css += ".scroll-tree .name { padding-left: 0;}"
		}
		if (response.o.n_dim) {
			css += ".scroll-tree .icon { opacity: .5; }\n";
			css += ".scroll-tree li:hover > a > .icon { opacity: 1;}"
		}
		if (response.o.n_manage || response.o.n_shareS)
			css += ".lhn-section-footer, .lhn-section-footer * { visibility: hidden !important; height: 0px !important; }\n";
		if (response.o.n_home)
			css += "#lhn-selectors { display: none; }\n";
		if (response.o.n_all)
			css += "#reading-list-selector { display: none; }\n";
		if (response.o.n_star)
			css += "#star-selector { display: none; }\n";
		if (response.o.n_your)
			css += "#your-items-tree-item-0-main { display: none; }\n";
		if (response.o.n_share)
			css += "#your-items-tree-item-1-link { display: none; }\n";
		if (response.o.n_notes)
			css += "#your-items-tree-item-2-link { display: none; }\n";
		if (response.o.n_trends)
			css += "#trends-selector { display: none; }\n";
		if (response.o.n_browse)
			css += "#directory-selector { display: none; }\n";
		if (response.o.n_follow)
			css += "#friends-tree-container { display: none; }\n";
		if (response.o.n_new)
			css += "#lhn-friends-indicator { display: none; }\n";
		if (response.o.n_explore)
			css += "#recommendations-tree-container { display: none; }\n";
	// CUSTOM
		if (response.o.customCSS)
			css += response.o.customCSSval;

	//---- INJECT CSS ----//
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
	//---- END INJECT CSS ----//

	//---- HELPER METHODS ----//
	function HexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
	function HexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
	function HexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
	function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1,7) : h }
	function lighten(one) {
		if (one.indexOf('rgb') == -1) {
			var r = HexToR(one) + 30;
			var g = HexToG(one) + 30;
			var b = HexToB(one) + 30;
		} else {
			var rgb = one.split(",");
			var r = parseInt(rgb[0].substring(4)) + 20;
			var g = parseInt(rgb[1]) + 20;
			var b = parseInt(rgb[2].substring(0,rgb[2].indexOf("\)"))) + 20;
		}
		if (r > 255)
			r = 255;
		if (g > 255)
			g = 255;
		if (b > 255)
			b = 255;
		return "rgb(" + r + "," + g + "," + b + ")";
	}
	//---- HELPER METHODS ----//
});