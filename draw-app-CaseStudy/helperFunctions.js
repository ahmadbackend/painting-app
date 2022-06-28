function HelperFunctions() {

	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object
	// function to control ink size
	var slider = createSlider(0, 50, 3);
	
	slider.parent('font');
	select("#font").mouseClicked(function()
	{//stroke('');
		
		strokeWeight(slider.value());
		

	});
	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
	
		background(255);
		fill(255);
		//strokeWeight(0);
		
         document.querySelector('#inserted').className="hide";
       // document.querySelector('#inserted').style.display="none";
		//updatePixels();
		//not effective over star.js due to pixel loading 
		
        
	});
	
	
		


	select("#saveImageButton").mouseClicked(function() {
		//???
		saveCanvas();
	});




	//function to  control background color 
    var blue= createSlider (0,255,200);
    var red= createSlider (0,255,150);
	var green=createSlider (0,255,100);
    var alpha= createSlider(0,255,50);
    blue.parent("background");
    red.parent("background");
    green.parent("background");
    alpha.parent("background");
    select("#background").mouseClicked(function()
     {
         background(red.value(),green.value(),blue.value(),alpha.value());
        
		});

}

	// function to create shades
	
	

	// function to upload images   done as constructor 
    
       // move to image constructor 
//    select("#myFileInput").mouseClicked(function(){
// 
//         document.querySelector('#myFileInput').addEventListener("change",function()
//            {
//             const reader= new FileReader();
//             reader.addEventListener("load",()=>
//                                    {
//                 localStorage.setItem('recent-image',reader.result);
//                document.querySelector('#inserted').setAttribute("src",reader.result);
//                 
//                
//             });
//             
//                 
//                  reader.readAsDataURL(this.files[0]);  
//          
//         })
//
//    
//
//		 })	
//    
//    var imgFilter= createSlider(0,100,100);
//                 imgFilter.parent('imgfilter');
//              console.log(imgFilter.value());
//                 select("#imgfilter").mouseClicked(function(){
//                    // var km=imgFilter.value();
//                      document.querySelector('#inserted').style.filter="grayscale(100 %)";
//                      document.querySelector('#inserted').style.backgroundColor='red';
//                     console.log(imgFilter.value());
//                 })
//	
	//event handler for the save image button. saves the canvsa to the
	//local file system.