/*********************************************************************
//////////////////////////////////////////////////////////////////////
	Set initial variables.
//////////////////////////////////////////////////////////////////////
/********************************************************************/

// Settings 
// Feel free to change these, but please change them back for the next person.

// Writing
var writing_speed = 70;  // Default: 70
var indentation = 25;  // Default: 25

// Graphing
var interval_speed = writing_speed * 16;  // Default: writing_speed * 16
var x_scale = 2.3;  // Default: 2.3
var y_scale = .9;  // Default: .9

var total_color = '#000';  // Default: #000
var html_color = '#00f';  // Default: #00f
var css_color = '#0a0';  // Default: #0a0
var js_color = '#f00';  // Default: #f00

var title = 'Real Time Code Graphing';  // Default: 'Real Time Code Graphing'



// Default variables // Don't change these.
var second_ratio = interval_speed/1000;

var current_character_count = 0;

var line_count = 0;
var html_line_count = 0;
var css_line_count = 0;
var js_line_count = 0;

var old_target = 'html';
 
// Instructions. 
/* 
	This 2 dimensional array includes all of the code to be printed on the screen.
	It also has data on where to append the text, it's indentation and 
	any code that shuld be run after it's printed. 
 */

$(function(){
	html = [
				/* [ target, text, code, indentation ] */
				['html','<!doctype html>','',''],
				['html','','',''],

				['html','<!--','',''],
				['html','Let\'s graph something. But what?','','1'],
				['html','We need some data.','','1'],
				['html','How about we gather statistics on the code needed to make a graph?','','1'],
				['html','','',''],
				['html','First we need to set things up...','','1'],
				['html','-->','',''],


				['html','','',''],
				['html','<html>','',''],
				['html','	<head>','','1'],
				['html','		<meta charset="utf-8"/>','','2'],
				['html','','',''],
				['html','		<title>' + title + '</title>','document.title = "' + title + '";','2'],
				['html','','',''],
				['html','<link href="http://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css">','','2'],
				['html','<link href="http://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet" type="text/css">','','2'],
				['html','','',''],


				['html','		<link rel="stylesheet" type="text/css" href="css/style.css"/>','$("#css").css("opacity",1);','2'],
				['html','','',''],		
    			

				['css','/* Let\'s use some CSS to style our code*/','',''],
				['css','','',''],

				['css','body{','',''],
				['css','	background : #000;','$("body").css("background","#000");','1'],
				['css','	color : #fff;','$("body").css("color","#fff");','1'],
				['css','	font-family : "Ubuntu";','$("body").css("font-family","Ubuntu");','1'],
				['css','	padding-top : 30px;','$("body").css("padding-top","30px");','1'],	
				['css','}','',''],
				['css','','',''],

				['css','code, code *{','',''],
				['css','	font-family : "Ubuntu Mono";','$("code, code *").css("font-family","Ubuntu Mono");','1'],	
				['css','	font-size : 10pt;','$("code, code *").css("font-size","10pt");','1'],				
				['css','	letter-spacing : .3pt;','$("code, code *").css("letter-spacing",".3pt");','1'],				
				['css','}','',''],
				['css','','',''],

				['css','#html, #css, #js, #stats{','',''],
				['css','	transition: all ease-in 200ms;','$("#html, #css, #js, #stats").css("transition","all ease-in 200ms");','1'],
				['css','	float : left;','$("#html, #css, #js, #stats").css("float","left");','1'],
				['css','	background : #222;','$("#html, #css, #js, #stats").css("background","#222");','1'],
				['css','	padding : 20px;','$("#html, #css, #js, #stats").css("padding","20px");','1'],
				['css','	margin : 20px;','$("#html, #css, #js, #stats").css("margin","20px");','1'],
				['css','	width : 600px;','$("#html, #css, #js, #stats").css("width","600px");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#html:before, #css:before, #js:before{','',''],
				['css','	content : "index.html";','$("<style>#html:before, #css:before, #js:before{content:\'index.html\'}</style>").appendTo("head");','1'],
				['css','	position : absolute;','$("<style>#html:before, #css:before, #js:before{position:absolute;}</style>").appendTo("head");','1'],
				['css','	top : -22px;','$("<style>#html:before, #css:before, #js:before{top:-22px;}</style>").appendTo("head");','1'],
				['css','	padding : 5px;','$("<style>#html:before, #css:before, #js:before{padding:5px;}</style>").appendTo("head");','1'],
				['css','	width : 200px;','$("<style>#html:before, #css:before, #js:before{width:200px;}</style>").appendTo("head");','1'],
				['css','	left : 0px;','$("<style>#html:before, #css:before, #js:before{left:0px;}</style>").appendTo("head");','1'],
				['css','	background : #ddd;','$("<style>#html:before, #css:before, #js:before{background:#ddd;}</style>").appendTo("head");','1'],
				['css','	color : #000;','$("<style>#html:before, #css:before, #js:before{color:#000;}</style>").appendTo("head");','1'],
				['css','	border-top-left-radius: 5px;','$("<style>#html:before, #css:before, #js:before{border-top-left-radius:5px;}</style>").appendTo("head");','1'],
				['css','	border-top-right-radius: 5px;','$("<style>#html:before, #css:before, #js:before{border-top-right-radius:5px;}</style>").appendTo("head");','1'],
				['css','	cursor : pointer;','$("<style>#html:before, #css:before, #js:before{cursor:pointer;}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#css:before{','',''],
				['css','	content : "style.css";','$("<style>#css:before{content:\'style.css\'}</style>").appendTo("head");','1'],
				['css','	left : 215px;','$("<style>#css:before{left:215px;}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#js:before{','',''],
				['css','	content : "functions.js";','$("<style>#js:before{content:\'functions.js\'}</style>").appendTo("head");','1'],
				['css','	left : 430px;','$("<style>#js:before{left:430px;}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],


				['html','		<link rel="shortcut icon" href="imgs/favicon.ico" type="image/x-icon" />','changeFavicon("imgs/favicon.ico");','2'],
				['html','','',''],
				['html','		<script src="js/jquery-2.1.1.js" type="text/javascript"></script>','','2'],
				['html','		<script src="js/d3.v3.js" type="text/javascript"></script>','','2'],
				['html','    	<script src="js/functions.js" type="text/javascript"></script>','$("#js").css("display","block");','2'],
				['html','	</head>','','1'],
				['html','','',''],


				['js','// Oh no, we\'re running out of space! I\'ve got an idea...','',''],
				['js','','',''],

				['js','function set_tab_control(tabs){','',''],
				['js','tabs.css({"position":"fixed","height":"600px"}).click( function(){','','1'],
				['js','tabs.css({"z-index":"0","opacity":".6"});','','2'],
				['js','$(this).css({"z-index":"1","opacity":"1"});','','2'],
				['js','});','','1'],
				['js','}','',''],
				['js','','',''],
				['js','set_tab_control( $("#html, #css, #js") );','set_tab_control( $("#html, #css, #js") );$("#frame").css("display","block");',''],
				['js','','',''],
				['js','','',''],


				//Remove <br/>s
				['html','<body>','','1'],
				['html','<div id="stats">','$("#frame").append("<div id=\'stats\'></div>")','2'],
				['html','<div id="line_count">','$("#stats").append("<div id=\'line_count\'></div>")','3'],	
				['html','<span>X</span> lines of code','$("#line_count").append("<span>X</span> lines of code<br/>")','4'],
				['html','</div>','','3'],
				['html','<div id="html_line_count">','$("#stats").append("<div id=\'html_line_count\'></div>")','3'],				
				['html','<span>X</span> lines of HTML','$("#html_line_count").append("<span>X</span> lines of HTML")','4'],
				['html','</div>','','3'],
				['html','<div id="css_line_count">','$("#stats").append("<div id=\'css_line_count\'></div>")','3'],	
				['html','<span>X</span> lines of CSS','$("#css_line_count").append("<span>X</span> lines of CSS")','4'],
				['html','</div>','','3'],    
				['html','<div id="js_line_count">','$("#stats").append("<div id=\'js_line_count\'></div>")','3'],	
				['html','<span>X</span> lines of JS','$("#js_line_count").append("<span>X</span> lines of JS")','4'],
				['html','</div>','','3'],     
				['html','<div id="character_count">','$("#stats").append("<div id=\'character_count\'></div>")','3'],	
				['html','<span>X</span> characters','$("#character_count").append("<span>X</span> characters")','4'],
				['html','</div>','','3'],      
				['html','</div>','','2'], 	


				['js','// Now let\'s start recording some statistics on this code.','',''],
				['js','','',''],
				['js','var total_line_count = new Array;','',''],
				['js','var html_count = new Array;','',''],
				['js','var css_count = new Array;','',''],
				['js','var js_count = new Array;','',''],
				['js','var time = 0;','',''],

				['js','','',''],
				['js','function update_stats(){','',''],
				['js','total_line_count.push( [time, $("code span").length] );','','1'],
				['js','html_count.push( [time, $("html span").length] );','','1'],
				['js','css_count.push( [time, $("css span").length] );','','1'],
				['js','js_count.push( [time, $("js span").length] );','','1'],
				['js','','',''],
				['js','$("#line_count span").text(total_line_count[total_line_count.length - 1][1]);','','1'],
				['js','$("#html_line_count span").text(html_count[html_count.length - 1][1]);','','1'],
				['js','$("#css_line_count span").text(css_count[css_count.length - 1][1]);','','1'],
				['js','$("#js_line_count span").text(js_count[js_count.length - 1][1]);','','1'],
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

				['js','updater = setInterval("update_stats()",' + interval_speed + ');','updater = setInterval("update_stats()",' + interval_speed + ');',''],     
				['js','','',''],
				['js','','',''],


				['css','#stats{','',''],
				['css','	position : fixed;','$("#stats").css("position","fixed");','1'],
				['css','	right : 20px;','$("#stats").css("right","20px");','1'],
				['css','	bottom : 20px;','$("#stats").css("bottom","20px");','1'],
				['css','	border-radius : 5px','$("#stats").css("border-radius","5px");','1'],	
				['css','}','',''],
				['css','','',''],	

				['css','#stats div{','',''],
				['css','	display : block;','$("#stats div").css("display","block");','1'],
				['css','	font-weight : 300;','$("#stats div").css("font-weight","300");','1'],
				['css','}','',''],
				['css','','',''],

				['css','#stats span{','',''],
				['css','	font-weight : 700;','$("#stats span").css("font-weight","700");','1'],
				['css','}','',''],
				['css','','',''],


				['html','','',''],
				['html','		<h1>' + title + '</h1>','$("#frame").append("<h1>Real Time Code Graphing</h1>")','2'],
				['html','','',''],
				
				
				['css','h1{','',''],
				['css','	padding-left : 20px;','$("h1").css("padding-left","20px");','1'],
				['css','}','',''],
				['css','','',''],

				
				['html','		<svg>','$("#frame").append("<svg></svg>")','2'],


				['css','svg{','',''],
				['css','	background : #ddd;','$("svg").css("background","#ddd");','1'],
				['css','	margin-left : 20px;','$("svg").css("margin-left","20px");','1'],
				['css','	width : 600px;','$("svg").css("width","600px");','1'],
				['css','	height : 400px;','$("svg").css("height","400px");','1'],
				['css','}','',''],
				['css','','',''],


				['html','		<line x1="60" y1="20" x2="60" y2="330"/>','$("svg").append("<line x1=\'60\' y1=\'20\' x2=\'60\' y2=\'330\'/>");$("#frame").html($("#frame").html());','3'],
				['html','		<line x1="60" y1="330" x2="580" y2="330"/>','$("svg").append("<line x1=\'60\' y1=\'330\' x2=\'580\' y2=\'330\'/>");$("#frame").html($("#frame").html());','3'],
				['html','','',''],


				['css','line{','',''],
				['css','	stroke : #0E0E0F;','$("line").css("stroke","#0E0E0F");','1'],
				['css','}','',''],
				['css','','',''],


				['js','// Alright, now that we have some data and a container for our graph let\'s start graphing!','',''],				
				['js','','',''],				
				['js','','',''],

				['js','var x_scale = ' + x_scale + ';','',''],
				['js','var y_scale = ' + y_scale + ';','',''],
				['js','','',''],

				['js','function draw_path(points, id){','',''],
				['js','calculate_path = d3.svg.line()','','1'],
				['js','.x(function(d) { return d[0] * x_scale + 40; })','','6'],
				['js','.y(function(d) { return 330 - d[1] * y_scale; })','','6'],
				['js','.interpolate("linear");','','6'],
				['js','','',''],
				['js','d3.select("svg").append("path")','',''],
				['js','.attr({','','6'],
				['js','"d" :  calculate_path(points),','','7'],
				['js','"stroke-width" : "2px",','','7'],
				['js','"fill" : "none",','','7'],
				['js','"id" : id','','7'],
				['js','});','','6'],
				['js','}','',''],
				['js','','',''],
				['js','','',''],

				['js','function draw_graph(){','',''],
				['js','$("svg path").remove();','','1'],
				['js','draw_path(total_line_count, "total_color");','','1'],
				['js','draw_path(html_count, "html_color");','','1'],
				['js','draw_path(css_count, "css_color");','','1'],
				['js','draw_path(js_count, "js_color");','','1'],
				['js','}','',''],
				['js','','',''],
				['js','','',''],

				['js','grapher = setInterval("draw_graph()",' + interval_speed + ');','grapher = setInterval("draw_graph()",' + interval_speed + ');',''],     
				['js','','',''],
				['js','','',''],


				['css','path.total_color{','',''],
				['css','	stroke : ' + total_color + ';','$("<style>path.total_color{stroke : ' + total_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','path.html_color{','',''],
				['css','	stroke : ' + html_color + ';','$("<style>path.html_color{stroke : ' + html_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],
				['css','path.css_color{','',''],
				['css','	stroke : ' + css_color + ';','$("<style>path.css_color{stroke : ' + css_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],
				['css','path.js_color{','',''],
				['css','	stroke : ' + js_color + ';','$("<style>path.js_color{stroke : ' + js_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],


				['html','		<!-- Well this is a little confusing without any labels isn\'t it? -->','','3'],
				['html','','',''],
				['html','		<text text-anchor="middle" transform="translate(20,160)rotate(-90)">Lines of Code</text>','$("svg").append("<text text-anchor=\'middle\' transform=\'translate(20,175)rotate(-90)\'>Lines of Code</text>");$("#frame").html($("#frame").html());','3'],
				['html','		<text x="120" y="380">Time (seconds)</text>','$("svg").append("<text x=\'120\' y=\'380\'>Time (seconds)</text>");$("#frame").html($("#frame").html());','3'],
				['html','','',''],
				['html','		<circle class="total_color" cx="302" cy="374" r="6"/>','$("svg").append("<circle class=\'total_color\' cx=\'302\' cy=\'374\' r=\'6\'/>");$("#frame").html($("#frame").html());','3'],
				['html','		<text class="total_color" x="312" y="380">Total</text>','$("svg").append("<text class=\'total_color\' x=\'312\' y=\'380\'>Total</text>");$("#frame").html($("#frame").html());','3'],
				['html','		<circle class="html_color" cx="368" cy="374" r="6"/>','$("svg").append("<circle class=\'html_color\' cx=\'368\' cy=\'374\' r=\'6\'/>");$("#frame").html($("#frame").html());','3'],
				['html','		<text class="html_color" x="378" y="380">HTML</text>','$("svg").append("<text class=\'html_color\' x=\'378\' y=\'380\'>HTML</text>");$("#frame").html($("#frame").html());','3'],
				['html','		<circle class="css_color" cx="439" cy="374" r="6"/>','$("svg").append("<circle class=\'css_color\' cx=\'439\' cy=\'374\' r=\'6\'/>");$("#frame").html($("#frame").html());','3'],
				['html','		<text class="css_color" x="449" y="380">CSS</text>','$("svg").append("<text class=\'css_color\' x=\'449\' y=\'380\'>CSS</text>");$("#frame").html($("#frame").html());','3'],
				['html','		<circle class="js_color" cx="495" cy="374" r="6"/>','$("svg").append("<circle class=\'js_color\' cx=\'495\' cy=\'374\' r=\'6\'/>");$("#frame").html($("#frame").html());','3'],
				['html','		<text class="js_color" x="505" y="380">JS</text>','$("svg").append("<text class=\'js_color\' x=\'505\' y=\'380\'>Javascript</text>");$("#frame").html($("#frame").html());','3'],


				['css','text.total_color, circle.total_color{','',''],
				['css','	fill : ' + total_color + ';','$("<style>text.total_color, circle.total_color{fill : ' + total_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],
				['css','text.html_color, circle.html_color{','',''],
				['css','	fill : ' + html_color + ';','$("<style>text.html_color, circle.html_color{fill : ' + html_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],
				['css','text.css_color, circle.css_color{','',''],
				['css','	fill : ' + css_color + ';','$("<style>text.css_color, circle.css_color{fill : ' + css_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],
				['css','text.js_color, circle.js_color{','',''],
				['css','	fill : ' + js_color + ';','$("<style>text.js_color, circle.js_color{fill : ' + js_color + '}</style>").appendTo("head");','1'],
				['css','}','',''],
				['css','','',''],

				['js','function draw_y_axis(){','',''],
				['js','for (c=1; c<=34; c++){','','1'],
				['js','var y = 330 - ( c * 10 * y_scale);','','2'],
				['js','','',''],
				['js','if (c % 5 === 0 ){','','2'],
				['js','var stroke_color = "#999";','','3'],
				['js','$("svg").append("<text x=\'50\' y=\'" +  (y + 5) + "\' text-anchor=\'end\' font-size=\'9pt\'>" + (c * 10) + "</text>");','','3'],
				['js','} else{','','2'],
				['js','var stroke_color = "#ccc";','','3'],
				['js','}','','2'],
				['js','','',''],
				['js','$("svg").append("<line x1=\'55\' x2=\'580\' y1=\'" + y + "\' y2=\'" + y + "\' stroke=\'" + stroke_color + "\'/>");','','2'],
				['js','}','','1'],
				['js','$("#frame").html($("#frame").html());','','1'],
				['js','}','',''],
				['js','','',''],

				['js','function draw_x_axis(){','',''],
				['js','for (c=1; c<=41; c++){','','1'],
				['js','var x = c * 5 * x_scale * second_ratio + 60;','','2'],
				['js','','',''],
				['js','if (c % 5 === 0 ){','','2'],
				['js','var stroke_color = "#999";','','3'],
				['js','$("svg").append("<text x=\'" + x + "\' y=\'350\' text-anchor=\'middle\' font-size=\'9pt\'>" + c * 5 + "</text>");','','3'],
				['js','} else{','','2'],
				['js','var stroke_color = "#ccc";','','3'],
				['js','}','','2'],
				['js','','',''],
				['js','$("svg").append("<line y1=\'20\' y2=\'335\' x1=\'" + x + "\' x2=\'" + x + "\' stroke=\'" + stroke_color + "\'/>");','','2'],
				['js','}','','1'],
				['js','$("#frame").html($("#frame").html());','','1'],
				['js','}','',''],
				['js','','',''],
				['js','draw_y_axis();','draw_y_axis();',''],
				['js','draw_x_axis();','draw_x_axis();',''],
				['js','','',''],


				['html','		</svg>','','2'],
				['html','	</body>','','1'],
				['html','</html>','',''],


				['js','// Alright, we\'re done here. Let\'s clean up.','',''],
				['js','','',''],
				['js','clearInterval(updater);','clearInterval(updater);',''],
				['js','clearInterval(grapher);','clearInterval(grapher);',''],          
				['js','','',''],
				['js','// Whoops, we didn\'t graph that last line. Let\'s run one last graph.','',''],
				['js','','',''],
				['js','update_stats(); draw_graph();','update_stats(); draw_graph();',''],
			];

	write_code(html);
});

/*********************************************************************
//////////////////////////////////////////////////////////////////////
	Primary Functions

	Print strings and execute secondary functions
//////////////////////////////////////////////////////////////////////
/********************************************************************/

function write_code(){
	write_line($('#' + html[line_count][0] + ' div'), html[line_count][1]);
}


function write_line(target,line){
	current_character_count = 0;

	if(old_target != target){
		target.click();
		old_target = target;
	}

	target.append('<span id="span' + line_count + '" style="padding-left:' + html[line_count][3] * indentation + 'px"></span>')

	setTimeout(function(){
		write_letters($('#span' + line_count + ' '),target,line);
	}, writing_speed);

	$('#html div, #css div, #js div').animate({ scrollTop: $('#span' + line_count + ' ').offset().top }, 100);
}


function write_letters(target,type,line){
	if (current_character_count < line.length){
		target.append( line.charAt(current_character_count) );

		current_character_count++;		

		setTimeout(function(){
			write_letters($('#span' + line_count + ' '),target,line);
		}, writing_speed);
	} else{
		eval(html[line_count][2]);
		target.append('<br/>');

		window[html[line_count][0] + '_line_count']++;

		line_count++;

		if (line_count < html.length){
			write_line($('#' + html[line_count][0] + ' div'),html[line_count][1]);
		}
	}
}


/*********************************************************************
//////////////////////////////////////////////////////////////////////
	Secondary functions.

	These are the functions printed while it plays.
	It was easier to pre-write them than write them dynamically as they're printed.
//////////////////////////////////////////////////////////////////////
/********************************************************************/

var total_line_count = new Array;
var html_count = new Array;
var css_count = new Array;
var js_count = new Array;
var time = 0;

function update_stats(){
	total_line_count.push( [time, $('code span').length] );
	html_count.push( [time, $('#html span').length] );
	css_count.push( [time, $('#css span').length] );
	js_count.push( [time, $('#js span').length] );

	$('#line_count span').text(total_line_count[total_line_count.length-1][1]);
	$('#html_line_count span').text(html_count[html_count.length-1][1]);
	$('#css_line_count span').text(css_count[css_count.length-1][1]);
	$('#js_line_count span').text(js_count[js_count.length-1][1]);

	var temp_char = 0;

	for (z = 0; z < $('code span').length; z++){
		temp_char += $('#span' + z).text().length;
	}

	$('#character_count span').text(temp_char);

	time++;
}


function set_tab_control(tabs){
		tabs.css({'position':'fixed','height':'600px'}).click( function(){
		tabs.css({'z-index':'0','opacity':'.6'});
		$(this).css({'z-index':'1','opacity':'1'});
	});
}


function draw_path(points, class_name){
  calculate_path = d3.svg.line()
                            .x(function(d) { return d[0] * x_scale + 60; })
                            .y(function(d) { return 330 - d[1] * y_scale; })
                            .interpolate("linear");   

  d3.select('svg').append("path")
              .attr({
                'd' :  calculate_path(points),
                'stroke-width' : '2px',
                'fill' : 'none',
                'class' : class_name
              });
}


function draw_graph(){
	$('svg path').remove();

	draw_path(total_line_count, 'total_color');
	draw_path(html_count, 'html_color');
	draw_path(css_count, 'css_color');
	draw_path(js_count, 'js_color');
}

function draw_y_axis(){
	for (c=1; c<=34; c++){
		var y = 330 - ( c * 10 * y_scale);

		if (c % 5 === 0 ){
			var stroke_color = '#999';
			$('svg').append('<text x="50" y="' +  (y + 5) + '" text-anchor="end" font-size="9pt">' + (c * 10) + '</text>');
		} else{
			var stroke_color = '#ccc';
		}

		$('svg').append('<line x1="55" x2="580" y1="' + y + '" y2="' + y + '" stroke="' + stroke_color + '"/>');
	}
	$("#frame").html($("#frame").html());
}

function draw_x_axis(){
	for (c=1; c<=50; c++){
		var x = 5 * c / second_ratio * x_scale + 60;

		if (c % 5 === 0 ){
			var stroke_color = '#999';
			$('svg').append('<text x="' + x + '" y="350" text-anchor="middle" font-size="9pt">' + (c * 5) + '</text>');
		} else{
			var stroke_color = '#ccc';
		}

		$('svg').append('<line x1="' + x + '" x2="' + x + '" y1="20" y2="335" stroke="' + stroke_color + '"/>');
	}
	$("#frame").html($("#frame").html());
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