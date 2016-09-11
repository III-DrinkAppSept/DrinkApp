function getNewsupdate(){	
	//append html
	var contenDiv ="<div data-role='collapsible'>";
	var contenDivEnd ="</div>";	
	var fullDivContent;
	$.ajax({
		async : false, //同步處理，jquery的格式才會出來
		type : "POST",
		url : "http://127.0.0.1:8080/DrinkApp/getNews",
		success : function(data){
			jsonCoordinate = JSON.parse(data);
//			alert("length: "+jsonCoordinate.length);
			//console.log(jsonCoordinate);
			for(var i=0; i<jsonCoordinate.length; i++){
				var title = jsonCoordinate[i].title;
				var content = jsonCoordinate[i].content;
				var picName = jsonCoordinate[i].picName;
				var publish = jsonCoordinate[i].publish;
				var note = jsonCoordinate[i].note;	
//				alert("i: "+i+" title: "+title+" content: "+content+" publish: "+publish);
				if(publish == "1"){
					fullDivContent = contenDiv+ "<h2>"+title+"</h2> "+
					"<img style='height:200px;' src='./image/"+picName+"'> "+"<p style='font-size:10pt; text-align:left;'>"+content+"</p> " +contenDivEnd;			
//					alert("fullDiv: "+fullDiv);
					$("#newsHere").append(fullDivContent);
				}
			}
		}	
	})
}


/*below is function for welcome page to resize the height/width according to window*/
$(document).ready(function(){
	$(window).resize(function(){
		//shop resized
		$("#welcomePage").css('width',$(window).width());
		$("#welcomePage").css('height',$(window).height());
		$("#welcomImgDiv").css('width',$(window).width());
		$("#welcomImgDiv").css('height',$(window).height());
		$("#shop").css('width',$(window).width());
		$("#shop").css('height',$(window).height());
		
		//map resized
		$("#divFmap").css('width',$(window).width());
		$("#divFmap").css('height','80%');	
		
		
	})
})