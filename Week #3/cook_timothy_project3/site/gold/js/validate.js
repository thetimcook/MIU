/*

var parseTagForm = function(data){
	
	console.log(data);
};

$('#tagcar').ready(function(){
	
	var tagform= $('#cartagform');
	tagform.validate({
		invalidHandler: function(form, validator){
			
		},
		submitHandler: function(){
			var data = tagform.serializeArray();
			parseTagForm(data);
		}
	});
});

*/



$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#tagcar').on('pageinit', function(){

		var tagForm = $('#addItem');
		
		tagForm.validate({
			invalidHandler: function(form, validator) {
			
				
			},
			submitHandler: function() {
				var data = tagForm.serializeArray();
				storeData(data);
				/* window.location.reload(); */

		}
		
		
	});

});




//The functions below can go inside or outside the pageinit function for the page in which it is needed.
function ge(x){
		var theElement = document.getElementById(x);
		return theElement;
};


var autofillData = function (){
	 
};

var getData = function(){


};

var storeData = function(data){ 
	var formDate = ge('date').value;
	var id = Date.parse(formDate);
	/* var id = JSON.stringify(dateinfo); */
	
	localStorage.setItem(id, JSON.stringify(data));
	alert(id);
	
	
	alert("Car Tagged!");
	
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

