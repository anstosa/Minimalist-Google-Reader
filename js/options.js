$(function(){
	//---- LOAD ----//
		// defaults
		if (!localStorage["options"]) localStorage["options"] = "{}";
		if (!localStorage["backCLR"]) localStorage["backCLR"] = "#ffffff";
		if (!localStorage["borderCLR"]) localStorage["borderCLR"] = "#BBCCFF";
		if (!localStorage["linkCLR"]) localStorage["linkCLR"] = "#2200cc";
		if (!localStorage["Hcolor"]) localStorage["Hcolor"] = "#bbbbbb";
		if (!localStorage["BTNcolor"]) localStorage["BTNcolor"] = "#000000";
		if (!localStorage["BTNborder"]) localStorage["BTNborder"] = "#bbbbbb";
		if (!localStorage["BTNbottom"]) localStorage["BTNbottom"] = "#f9f9f9";
		if (!localStorage["BTNtop"]) localStorage["BTNtop"] = "#e3e3e3";
		if (!localStorage["customCSSval"]) localStorage["customCSSval"] = " ";
		if (!localStorage["EIC_1"]) localStorage["EIC_1"] = "";
		if (!localStorage["EIC_2"]) localStorage["EIC_2"] = "";
		if (!localStorage["EIC_3"]) localStorage["EIC_3"] = "";

	if(localStorage['options']){
		var o = JSON.parse(localStorage['options']);
		// GENERAL
			$("#mricon").attr('checked', o.mricon);
			$("#favicon").attr('checked', o.favicon);
			$("#v").attr('checked', o.v);
			$("#trans").attr('checked', o.trans);
			$("#corners").attr('checked', o.corners);
			$("#customCSS").attr('checked', o.customCSS);
			if ((o.customCSSval != null) && (o.customCSSval != ""))
				$("#customCSSval").val(localStorage["customCSSval"]);
		// THEME
			$("#backC").attr('checked', o.backC);
				if ((o.backCLR != null) && (o.backCLR != ""))
					$("#backCLRsub").attr("style","background-color:" + o.backCLR + ";");
			$("#borders").attr('checked', o.borders);
				if ((o.borderCLR != null) && (o.borderCLR != ""))
					$("#borderCLRsub").attr("style","background-color:" + o.borderCLR + ";");
			$("#linkC").attr('checked', o.linkC);
				if ((o.linkCLR != null) && (o.linkCLR != ""))
					$("#linkCLRsub").attr("style","background-color:" + o.linkCLR + ";");
			$("#BTN").attr('checked', o.BTN);
				if ((o.BTNcolor != null) && (o.BTNcolor != ""))
					$("#BTNcolorSUB").attr("style","background-color:" + o.BTNcolor + ";");
				if ((o.BTNborder != null) && (o.BTNborder != ""))
					$("#BTNborderSUB").attr("style","background-color:" + o.BTNborder + ";");
				if ((o.BTNbottom != null) && (o.BTNbottom != ""))
					$("#BTNbottomSUB").attr("style","background-color:" + o.BTNbottom + ";");
				if ((o.BTNtop != null) && (o.BTNtop != ""))
					$("#BTNtopSUB").attr("style","background-color:" + o.BTNtop + ";");
			$("#testButton").attr("style","color: " + o.BTNcolor + ";border: 1px solid " + o.BTNborder + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + o.BTNbottom + "),to(" + o.BTNtop + "));");
		// GOOGLE BAR
			$("#gbarH").attr('checked', o.gbarH);
			$("#gbarO").attr('checked', o.gbarO);
			$("#gbarB").attr('checked', o.gbarB);
			$("#gbar").attr('checked', o.gbar);
			$("#cbar").attr('checked', o.cbar);
				if ((o.c_n_1 != null) && (o.c_n_1 != ""))
					$("#c_n_1").val(o.c_n_1);
				else $("#c_n_1").val("Gmail");
				if ((o.c_u_1 != null) && (o.c_u_1 != ""))
					$("#c_u_1").val(o.c_u_1);
				else $("#c_u_1").val("https://mail.google.com");
				if ((o.c_t_1 != null) && (o.c_t_1 != ""))
					$("#c_t_1").val(o.c_t_1);
				else $("#c_t_1").val("_blank");
				if ((o.c_n_2 != null) && (o.c_n_2 != ""))
					$("#c_n_2").val(o.c_n_2);
				else $("#c_n_2").val("Calendar");
				if ((o.c_u_2 != null) && (o.c_u_2 != ""))
					$("#c_u_2").val(o.c_u_2);
				else $("#c_u_2").val("http://www.google.com/calendar");
				if ((o.c_t_2 != null) && (o.c_t_2 != ""))
					$("#c_t_2").val(o.c_t_2);
				else $("#c_t_2").val("_blank")
				if ((o.c_n_3 != null) && (o.c_n_3 != ""))
					$("#c_n_3").val(o.c_n_3);
				else $("#c_n_3").val("Documents");
				if ((o.c_u_3 != null) && (o.c_u_3 != ""))
					$("#c_u_3").val(o.c_u_3);
				else $("#c_u_3").val("http://docs.google.com");
				if ((o.c_t_3 != null) && (o.c_t_3 != ""))
					$("#c_t_3").val(o.c_t_3);
				else $("#c_t_3").val("_blank")
				if ((o.c_n_4 != null) && (o.c_n_4 != ""))
					$("#c_n_4").val(o.c_n_4);
				else $("#c_n_4").val("Reader");
				if ((o.c_u_4 != null) && (o.c_u_4 != ""))
					$("#c_u_4").val(o.c_u_4);
				else $("#c_u_4").val("http://www.google.com/reader");
				if ((o.c_t_5 != null) && (o.c_t_5 != ""))
					$("#c_t_5").val(o.c_t_5);
				else $("#c_t_5").val("_blank")
				if ((o.c_n_5 != null) && (o.c_n_5 != ""))
					$("#c_n_5").val(o.c_n_5);
				else $("#c_n_5").val("Photos");
				if ((o.c_u_5 != null) && (o.c_u_5 != ""))
					$("#c_u_5").val(o.c_u_5);
				else $("#c_u_5").val("http://picasaweb.google.com");
				if ((o.c_n_6 != null) && (o.c_n_6 != ""))
					$("#c_n_6").val(o.c_n_6);
				else $("#c_n_6").val("Web");
				if ((o.c_u_6 != null) && (o.c_u_6 != ""))
					$("#c_u_6").val(o.c_u_6);
				else $("#c_u_6").val("http://www.google.com");
				if ((o.c_t_6 != null) && (o.c_t_6 != ""))
					$("#c_t_6").val(o.c_t_6);
				else $("#c_t_6").val("_blank")
				$("#cbarM").attr('checked', o.cbarM);
			$("#user").attr('checked', o.user);
			$("#settings").attr('checked', o.settings);
			$("#help").attr('checked', o.help);
			$("#out").attr('checked', o.out);
		// HEADER
			$("#header").attr('checked', o.header);
			$("#logoH").attr('checked', o.logoH);
			$("#logo").attr('checked', o.logo);
			if ((o.logoSRC != null) && (o.logoSRC != ""))
				$("#logoSRC").val(o.logoSRC);
			else $("#logoSRC").val("http://www.example.com/image.jpg");
			$("#s_all").attr('checked', o.s_all);
			$("#s_filter").attr('checked', o.s_filter);
			$("#s_button").attr('checked', o.s_button);
		// MAIN
			$("#t_title").attr('checked', o.t_title);
			$("#t_el").attr('checked', o.t_el);
			$("#t_top").attr('checked', o.t_top);
			$("#n_na").attr('checked', o.n_na);
			$("#n_read").attr('checked', o.n_read);
			$("#t_refresh").attr('checked', o.t_refresh);
			$("#t_view").attr('checked', o.t_view);
			$("#footer").attr('checked', o.footer);
			$("#h_side").attr('checked', o.h_side);
			$("#h_tips").attr('checked', o.h_tips);
			$("#h_blog").attr('checked', o.h_blog);
			$("#h_footer").attr('checked', o.h_footer);
			if ((o.itemW != null) && (o.itemW != ""))
				$("#itemW").val(o.itemW);
			else $("#itemW").val("650");
			$("#i_break").attr('checked', o.i_break);
			$("#i_footer").attr('checked', o.i_footer);
			$("#i_text").attr('checked', o.i_text);
			$("#i_star").attr('checked', o.i_star);
			$("#i_like").attr('checked', o.i_like);
			$("#i_share").attr('checked', o.i_share);
			$("#i_note").attr('checked', o.i_note);
			$("#i_email").attr('checked', o.i_email);
			$("#i_unread").attr('checked', o.i_unread);
			$("#i_tags").attr('checked', o.i_tags);
		// NAVIGATION
			$("#nav").attr('checked', o.nav);
			$("#navA").attr('checked', o.navA);
			$("#n_icons").attr('checked', o.n_icons);
			$("#n_dim").attr('checked', o.n_dim);
			$("#n_manage").attr('checked', o.n_manage);
			if ((o.navW != null) && (o.navW != ""))
				$("#navW").val(o.navW);
			else $("#navW").val("260");
			$("#n_home").attr('checked', o.n_home);
			$("#n_all").attr('checked', o.n_all);
			$("#n_star").attr('checked', o.n_star);
			$("#n_your").attr('checked', o.n_your);
			$("#n_share").attr('checked', o.n_share);
			$("#n_notes").attr('checked', o.n_notes);
			$("#n_trends").attr('checked', o.n_trends);
			$("#n_browse").attr('checked', o.n_browse);
			$("#n_follow").attr('checked', o.n_follow);
			$("#n_new").attr('checked', o.n_new);
			$("#n_shareS").attr('checked', o.n_shareS);
			$("#n_explore").attr('checked', o.n_explore);
		localStorage["uncheckedUpdate"] = false;
	}
	//---- END LOAD ----//
	
	//---- SAVE ----//
	function save(){
		localStorage['options'] = JSON.stringify({
			// GENERAL
				"mricon":$("#mricon").attr('checked'),
				"v":$("#v").attr('checked'),
				"favicon":$("#favicon").attr('checked'),
				"trans":$("#trans").attr('checked'),
				"corners":$("#corners").attr('checked'),
				"customCSS":$("#customCSS").attr('checked'),
					"customCSSval":$("#customCSSval").val().replace(/(\r\n|\n|\r)/gm,""),
			// THEME				
				"backC":$("#backC").attr('checked'),
					"backCLR":localStorage["backCLR"],
				"borders":$("#borders").attr('checked'),
					"borderCLR":localStorage["borderCLR"],
				"linkC":$("#linkC").attr('checked'),
					"linkCLR":localStorage["linkCLR"],
				"BTN":$("#BTN").attr('checked'),
					"BTNcolor":localStorage["BTNcolor"],
					"BTNborder":localStorage["BTNborder"],
					"BTNbottom":localStorage["BTNbottom"],
					"BTNtop":localStorage["BTNtop"],
			// GOOGLE BAR
				"gbarH":$("#gbarH").attr('checked'),
				"gbarO":$("#gbarO").attr('checked'),
				"gbarB":$("#gbarB").attr('checked'),
				"gbar":$("#gbar").attr('checked'),
				"cbar":$("#cbar").attr('checked'),
					"c_n_1":$("#c_n_1").val(),
					"c_u_1":$("#c_u_1").val(),
					"c_t_1":$("#c_t_1").val(),
					"c_n_2":$("#c_n_2").val(),
					"c_u_2":$("#c_u_2").val(),
					"c_t_2":$("#c_t_2").val(),
					"c_n_3":$("#c_n_3").val(),
					"c_u_3":$("#c_u_3").val(),
					"c_t_3":$("#c_t_3").val(),
					"c_n_4":$("#c_n_4").val(),
					"c_u_4":$("#c_u_4").val(),
					"c_t_4":$("#c_t_4").val(),
					"c_n_5":$("#c_n_5").val(),
					"c_u_5":$("#c_u_5").val(),
					"c_t_5":$("#c_t_5").val(),
					"c_n_6":$("#c_n_6").val(),
					"c_u_6":$("#c_u_6").val(),
					"c_t_6":$("#c_t_6").val(),
					"cbarM":$("#cbarM").attr('checked'),
				"user":$("#user").attr('checked'),
				"settings":$("#settings").attr('checked'),
				"help":$("#help").attr('checked'),
				"out":$("#out").attr('checked'),
			// HEADER
				"header":$("#header").attr('checked'),
				"logoH":$("#logoH").attr('checked'),
				"logo":$("#logo").attr('checked'),
					"logoSRC":$("#logoSRC").val(),
				"s_all":$("#s_all").attr('checked'),
				"s_filter":$("#s_filter").attr('checked'),
				"s_button":$("#s_button").attr('checked'),
			// MAIN
				"t_title":$("#t_title").attr('checked'),
				"t_el":$("#t_el").attr('checked'),
				"t_top":$("#t_top").attr('checked'),
				"n_na":$("#n_na").attr('checked'),
				"n_read":$("#n_read").attr('checked'),
				"t_refresh":$("#t_refresh").attr('checked'),
				"t_view":$("#t_view").attr('checked'),
				"footer":$("#footer").attr('checked'),
				"h_side":$("#h_side").attr('checked'),
				"h_tips":$("#h_tips").attr('checked'),
				"h_blog":$("#h_blog").attr('checked'),
				"h_footer":$("#h_footer").attr('checked'),
				"itemW":$("#itemW").val(),
				"i_break":$("#i_break").attr('checked'),
				"i_footer":$("#i_footer").attr('checked'),
				"i_text":$("#i_text").attr('checked'),
				"i_star":$("#i_star").attr('checked'),
				"i_like":$("#i_like").attr('checked'),
				"i_share":$("#i_share").attr('checked'),
				"i_note":$("#i_note").attr('checked'),
				"i_email":$("#i_email").attr('checked'),
				"i_unread":$("#i_unread").attr('checked'),
				"i_tags":$("#i_tags").attr('checked'),
			// NAVIGATION
				"nav":$("#nav").attr('checked'),
				"navW":$("#navW").val(),
				"navA":$("#navA").attr('checked'),
				"n_icons":$("#n_icons").attr('checked'),
				"n_dim":$("#n_dim").attr('checked'),
				"n_manage":$("#n_manage").attr('checked'),
				"n_home":$("#n_home").attr('checked'),
				"n_all":$("#n_all").attr('checked'),
				"n_star":$("#n_star").attr('checked'),
				"n_your":$("#n_your").attr('checked'),
				"n_share":$("#n_share").attr('checked'),
				"n_notes":$("#n_notes").attr('checked'),
				"n_trends":$("#n_trends").attr('checked'),
				"n_browse":$("#n_browse").attr('checked'),
				"n_follow":$("#n_follow").attr('checked'),
				"n_new":$("#n_new").attr('checked'),
				"n_shareS":$("#n_shareS").attr('checked'),
				"n_explore":$("#n_explore").attr('checked'),
		});
		localStorage["customCSSval"] = $("#customCSSval").val();
		localStorage["EIC_1"] = $("#EIC_1").val();
		localStorage["EIC_2"] = $("#EIC_2").val();
		localStorage["EIC_3"] = $("#EIC_3").val();
		$("#announce").attr("style", "");
		$("#refreshEI").attr("style", "");
		$("#refresh").attr("style", "display: block !important;");
	}
	//---- END SAVE ----//
	
	//---- SAVE LISTENERS ----//
	document.getElementById("OPTgen").addEventListener("keyup", save, false);
	document.getElementById("OPTgen").addEventListener("click", save, false);
	document.getElementById("OPTthe").addEventListener("click", save, false);
	document.getElementById("OPTgoo").addEventListener("keyup", save, false);
	document.getElementById("OPTgoo").addEventListener("click", save, false);
	document.getElementById("OPThea").addEventListener("keyup", save, false);
	document.getElementById("OPThea").addEventListener("click", save, false);
	document.getElementById("OPTmai").addEventListener("click", save, false);
	document.getElementById("OPTgat").addEventListener("keyup", save, false);
	document.getElementById("OPTgat").addEventListener("click", save, false);
	document.getElementById("EIC_1").addEventListener("keyup", save, false);
	document.getElementById("EIC_2").addEventListener("keyup", save, false);
	document.getElementById("EIC_3").addEventListener("keyup", save, false);
	var pickers = document.getElementsByClassName("colorPicker");
	for (var i = 0; i < pickers.length; i++) {
		pickers[i].addEventListener("click", save, false);
		pickers[i].addEventListener("keyup", save, false);
	}
	//---- END SAVE LISTENERS ----//
	
	//---- IMAGE PREVIEW ----//
	imagePreview = function(){
			xOffset = -25;
			yOffset = -100;
		$("label:not([hide])").hover(function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br /><span>" + this.t : "" + "</span>";
			$("body").append("<p id='preview'><img src='img/screens/"+ this.getAttribute("for") +".png' alt='Image preview' />"+ c +"</p>");
			$("#preview img")
				.css("max-width", window.innerWidth - 100)
				.css("max-height", window.innerHeight - 100);
			if ($("#preview").width() > (window.innerWidth - e.pageX - 130)) {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX - ($("#preview").width() - (window.innerWidth - e.pageX) + 75)) + "px")
					.fadeIn("fast");
			} else if ($("#preview").height() > (window.innerHeight - e.pageY - 55)) {
				$("#preview")
					.css("top",(e.pageY - ($("#preview").height() + 55)) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		},
		function(){
			this.title = this.t;
			$("#preview").remove();
		});
		$("a.preview").mousemove(function(e){
			if ($("#preview").width() > (window.innerWidth - e.pageX - 100) || $("#preview").height() > (window.innerHeight - e.pageY - 25)) {
				$("#preview")
					.css("top",(e.pageY + 75 - ($("#preview").height() - (window.innerHeight - e.pageY))) + "px")
					.css("left",(e.pageX - 75 - ($("#preview").width() - (window.innerWidth - e.pageX))) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		});
	};
	$(document).ready(function(){
		imagePreview();
	});
	//---- END IMAGE PREVIEW ----//
});

// UPDATE EXAMPLE BUTTON
function updateButton() {
	$("#testButton").attr("style","border: 1px solid #" + localStorage["BTNborder"] + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(#" + localStorage["BTNbottom"] + "),to(#" + localStorage["BTNtop"] + "));");
}

// NAVIGATION HANDLER
var last = "gen";
function navigate(link) {
	$("#OPT" + last).attr("style", "");
	$("#OPT" + link).attr("style", "display: block;");
	//document.getElementById("OPT" + link).scrollTop = 0;
	$("#" + last).attr("class", "");
	$("#" + link).attr("class", "current");
	//document.getElementById("OPTside").scrollTop = 0;
	last = link;
}

// RESET CUSTOM BUTTONS COLORS
function cButtonReset() {
	localStorage["BTNcolor"] = "#000000";
	localStorage["BTNborder"] = "#bbbbbb";
	localStorage["BTNbottom"] = "#f9f9f9";
	localStorage["BTNtop"] = "#ded5de";
	window.location.reload();
}

//---- EXPORT/IMPORT ----//
function export(EIid) {
	var prefOut = new Array();
		prefOut[0] = localStorage["options"];
		prefOut[1] = localStorage["borderCLR"];
		prefOut[2] = localStorage["itemCLR"];
		prefOut[3] = localStorage["BTNcolor"];
		prefOut[4] = localStorage["BTNborder"];
		prefOut[5] = localStorage["BTNbottom"];
		prefOut[6] = localStorage["BTNtop"];
		prefOut[7] = localStorage["customCSSval"];
		prefOut[8] = localStorage["backCLR"];
		prefOut[9] = localStorage["linkCLR"];
	var prefsOut = prefOut[0];	// fencepost
	for (var i = 1; i <= 9; i++) {
		prefsOut += '\n' + prefOut[i];
	}
	document.getElementById(EIid).innerHTML = prefsOut;
	if (EIid == "EIC_3") localStorage["EIC_3"] = prefsOut;	// backup existing to Custom 3
}

function import(EIid) {
	var prefsIn = document.getElementById(EIid).value;
	var prefIn = prefsIn.split("\n");
		localStorage["options"] = prefIn[0];
		localStorage["borderCLR"] = prefIn[1];
		localStorage["itemCLR"] = prefIn[2];
		localStorage["BTNcolor"] = prefIn[3];
		localStorage["BTNborder"] = prefIn[4];
		localStorage["BTNbottom"] = prefIn[5];
		localStorage["BTNtop"] = prefIn[6];
		localStorage["customCSSval"] = prefIn[7];
		localStorage["backCLR"] = prefIn[8];
		localStorage["linkCLR"] = prefIn[9];
	window.location.hash = "imps";
	window.location.reload();
}
//---- END EXPORT/IMPORT ----//

// EASTER EGG
function easterEgg() {
	if (!localStorage['easterEgg']) {
		localStorage['easterEgg'] = true;
		$('#easterEgg_off').attr('style','display:none;');
		$('#easterEgg_on').attr('style','display:block;');
	} else {
		localStorage.removeItem('easterEgg');
		$('#easterEgg_on').attr('style','display:none;');
		$('#easterEgg_off').attr('style','display:block;');
	}
}