var title = 'Real Time Code Graphing';

var indentation = 25;

var character_count = 0;
var current_character_count = 0;

var line_count = 0;
var html_line_count = 0;
var css_line_count = 0;
var js_line_count = 0;


var writing_speed = 10;

var old_target = 'html';


$(function(){
	html = [
				/* target, text, code*/
				['html','<!doctype html>','',''],
				['html','','',''],
				['html','<html>','',''],
				['html','	<head>','','1'],
				['html','		<meta charset="utf-8"/>','','2'],
				['html','','',''],
				['html','		<title>' + title + '</title>','document.title = "' + title + '";','2'],
				['html','','',''],
				['html','		<link rel="stylesheet" type="text/css" href="css/style.css"/>','$("#css").css("opacity",1);','2'],
				['html','','',''],		
    			

				['css','body{','',''],
				['css','	background : #000;','$("body").css("background","#000");','1'],
				['css','	color : #fff;','$("*").css("color","#fff");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#html, #css, #js, #stats{','',''],
				// Transition's not working right
				['css','	transition: all ease-in 200ms;','$("#html, #css, #js, #stats").css("transition","all ease-in 200ms")','1'],
				['css','	background : #222;','$("#html, #css, #js, #stats").css("background","#222");','1'],
				['css','	padding : 20px;','$("#html, #css, #js, #stats").css("padding","20px");','1'],
				['css','	margin : 20px;','$("#html, #css, #js, #stats").css("margin","20px");','1'],
				['css','	border-radius : 10px;','$("#html, #css, #js, #stats").css("border-radius","10px");','1'],
				['css','	width : 600px;','$("#html, #css, #js, #stats").css("width","600px");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#html:before, #css:before, #js:before{','',''],
				['css','	position : absolute;','$("#html:before, #css:before, #js:before").css("position","absolute");','1'],
				['css','	top : -10px;','$("#html:before, #css:before, #js:before").css("top","-10px;");','1'],
				['css','	padding : 3px;','$("#html:before, #css:before, #js:before").css("padding","3px");','1'],
				['css','	left : 0px;','$("#html:before, #css:before, #js:before").css("left","0px");','1'],
				['css','	right : 0px;','$("#html:before, #css:before, #js:before").css("right","0px");','1'],
				['css','	background : #ddd;','$("#html:before, #css:before, #js:before").css("background","#ddd");','1'],
				['css','	color : #000;','$("#html:before, #css:before, #js:before").css("color","#000");','1'],
				['css','	content : "index.html";','$("#html:before, #css:before, #js:before").css("content","index.html");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#css:before{','',''],
				['css','	content : "style.css";','$("#css:before").css("content","style.css");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#js:before{','',''],
				['css','	content : "functions.js";','$("#css:before").css("content","functions.js");','1'],
				['css','}','',''],
				['css','','',''],


				['html','		<link rel="shortcut icon" href="imgs/favicon.ico" type="image/x-icon" />','changeFavicon("imgs/favicon.ico");','2'],
				['html','','',''],
				['html','		<script src="js/jquery.js" type="text/javascript"></script>','','2'],
				['html','    	<script src="js/functions.js" type="text/javascript"></script>','$("#js").css("opacity",1);','2'],
				['html','	</head>','','1'],
				['html','','',''],

/*
				['js','function set_tab_control(){','',''],
				['js','$("#html, #css, #js").css("position","absolute").click( function(){','','1'],
				['js','$("#html, #css, #js").css({"z-index":"0","max-height":"20px"});','','2'],
				['js','$(this).css({"z-index":"1","max-height":"1000px"});','','2'],
				['js','});','','1'],
				['js','}','',''],
				['js','','',''],
				['js','set_tab_control();','set_tab_control();',''],
				['js','','',''],
*/

				//Remove <br/>s
				['html','<body>','','1'],
				['html','<div id="stats">','$("#frame").append("<div id=' + "'stats'" + '></div>")','2'],
				['html','<div id="line_count">','$("#stats").append("<div id=' + "'line_count'" + '></div>")','3'],	
				['html','<span>0</span> lines of code','$("#line_count").append("<span>0</span> lines of code<br/>")','4'],
				['html','</div>','','3'],
				['html','<div id="html_line_count">','$("#stats").append("<div id=' + "'html_line_count'" + '></div>")','3'],				
				['html','<span>0</span> lines of HTML','$("#html_line_count").append("<span>0</span> lines of HTML<br/>")','4'],
				['html','</div>','','3'],
				['html','<div id="css_line_count">','$("#stats").append("<div id=' + "'css_line_count'" + '></div>")','3'],	
				['html','<span>0</span> lines of CSS','$("#css_line_count").append("<span>0</span> lines of CSS<br/>")','4'],
				['html','</div>','','3'],    
				['html','<div id="js_line_count">','$("#stats").append("<div id=' + "'js_line_count'" + '></div>")','3'],	
				['html','<span>0</span> lines of JS','$("#js_line_count").append("<span>0</span> lines of JS<br/>")','4'],
				['html','</div>','','3'],     
				['html','<div id="character_count">','$("#stats").append("<div id=' + "'character_count'" + '></div>")','3'],	
				['html','<span>0</span> characters','$("#character_count").append("<span>0</span> characters")','4'],
				['html','</div>','','3'],      
				['html','</div>','','2'],      


				['css','#stats{','',''],
				['css','	position : fixed;','$("#stats").css("position","fixed");','1'],
				['css','	right : 20px;','$("#stats").css("right","20px");','1'],
				['css','	bottom : 20px;','$("#stats").css("bottom","20px");','1'],
				['css','}','',''],
				['css','','',''],	

				['css','#stats div{','',''],
				['css','	display : block;','$("#stats div").css("display","block");','1'],
				['css','}','',''],
				['css','','',''],	


				['js','function update_stats(){','',''],
				['js','$("#line_count span").text($("code span").length);','','1'],
				['js','$("#html_line_count span").text($("#html span").length);','','1'],
				['js','$("#css_line_count span").text($("#css span").length);','','1'],
				['js','$("#js_line_count span").text($("#js span").length);','','1'],
				['js','','',''],
				['js','var temp_char = 0;','','1'],
				['js','','',''],
				['js','for (z = 0; z < $("code span").length; z++){','','1'],
				['js','temp_char += $("#span" + z).text().length;','','2'],
				['js','}','','1'],
				['js','','',''],
				['js','$("#character_count span").text(temp_char);','','1'],
				['js','}','',''],
				['js','','',''],

				['js','setInterval("update_stats()",100);','setInterval("update_stats()",100);',''],


				['css','code{','',''],
				['css','	font-family : monospace;','$("code").css("font-family","monospace");','1'],	
				['css','	font-size : 9pt;','$("code").css("font-size","9pt");','1'],				
				['css','}','',''],
				['css','','',''],

/*
				['html','	<body>','','1'],
				['html','		<h1>' + title + '</h1>','$("#frame").append("<h1>Real Time Code Graphing</h1>")','2'],

				
				['css','h1{','',''],
				['css','	padding-left : 20px;','$("h1").css("padding-left","20px");','1'],
				['css','}','',''],
				['css','','',''],

				
				['html','		<svg>','$("#frame").append("<svg></svg>")','2'],


				['css','svg{','',''],
				['css','	background : #dde;','$("svg").css("background","#dde");','1'],
				['css','	margin-left : 20px;','$("svg").css("margin-left","20px");','1'],
				['css','	width : 600px;','$("svg").css("width","600px");','1'],
				['css','	height : 400px;','$("svg").css("height","400px");','1'],
				['css','}','',''],
				['css','','',''],


				['html','		<line x1="20" y1="20" x2="580" y2="380"/>','$("svg").append("<line x1=' + "20" + ' y1=' + "20" + ' x2=' + "580" + ' y2=' + "380" + '/>")','3'],


				['css','line{','',''],
				['css','	stroke : #0E0E0F;','$("line").css("stroke","#0E0E0F");','1'],
				['css','}','',''],
				['css','','',''],


				['html','		</svg>','','2'],*/
				['html','	</body>','','1'],
				['html','</html>','','']
			];

	//$('#html, #css, #js').css('position','absolute');

	write_code(html);
});

function write_code(){
	write_line($('#' + html[line_count][0] + ' '), html[line_count][1]);
}

function write_line(target,line){
	current_character_count = 0;

	if(old_target != target){
		target.click();
	}

	target.append('<span id="span' + line_count + '" style="text-indent:' + html[line_count][3] * indentation + 'px"></span>')

	setTimeout(function(){
		write_letters($('#span' + line_count + ' '),target,line);
	}, writing_speed);

	old_target = target;
}

function write_letters(target,type,line){
	if (current_character_count < line.length){
		target.append( line.charAt(current_character_count) );

		current_character_count++;

		character_count++;
		

		setTimeout(function(){
			write_letters($('#span' + line_count + ' '),target,line);
		}, writing_speed);
	} else{
		eval(html[line_count][2]);
		target.append('<br/>');

		window[html[line_count][0] + '_line_count']++;

		line_count++;

		if (line_count < html.length){
			write_line($('#' + html[line_count][0] + ' '),html[line_count][1]);
		}
	}
}

function update_stats(){
	$('#line_count span').text($('code span').length);
	$('#html_line_count span').text($('#html span').length);
	$('#css_line_count span').text($('#css span').length);
	$('#js_line_count span').text($('#js span').length);

	var temp_char = 0;

	for (z = 0; z < $('code span').length; z++){
		temp_char += $('#span' + z).text().length;
	}

	$('#character_count span').text(temp_char);
}

function set_tab_control(){
	$('#html, #css, #js').css('position','absolute').click( function(){
		$('#html, #css, #js').css({'z-index':'0','max-height':'20px'});
		$(this).css({'z-index':'1','max-height':'1000px'});
	});
}

/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head
document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 }