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

		var tagForm = $('#addItem'),
			tagerrorslink = $('#tagerrorslink')
		;
		tagForm.validate({
			invalidHandler: function(form, validator) {
				tagerrorslink.click();
				for(var key in validator.submited){
					var label = $('label[for^="'+ key +'"]');
					
				}
			},
			submitHandler: function() {
				var data = tagForm.serializeArray();
				storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	console.log(data);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};












