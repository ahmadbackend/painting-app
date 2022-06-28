function Eraser()
{   
    //set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";

    var previousMouseX = -1;
	var previousMouseY = -1;

    this.draw = function(){
       
		//if the mouse is pressed
		if(mouseIsPressed){
           fill (255);
		   noStroke();
            var er= ellipse (  mouseX,mouseY,10);
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                 
				 er ;
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			    }
	    	}
        
else   {
    previousMouseX = -1;
    previousMouseY = -1;
      }
    };
}
