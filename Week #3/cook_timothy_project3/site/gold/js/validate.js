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

var autofillData = function (){
	 
};

var getData = function(){


};

var storeData = function(data){ 
	var formDate = $('date');
	var id = JSON.stringify(data[8]);
	
	
	localStorage.setItem(id, JSON.stringify(data));

	
	
	alert("Car Tagged!");
	
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

