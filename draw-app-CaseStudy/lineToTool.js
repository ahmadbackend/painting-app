//this to draw a stright lines 
function LineToTool(){
	var self=this;
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
// to set the initial value for x,y in case no previous value
	var startMouseX = -1;
	var startMouseY = -1;
	this.test;							//
	var drawing = false;

	this.draw = function(){
 
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
				
				
			}
			
		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
			
		}
	};

}
///////////////////////////still under researching
this.changeopacity= function(linee)  		//editing backgrpund color 
{											//instead of line opacity
	linee.loadPixels();
	self.opaci = createSlider(0,255,100);
	self.opaci.position(width*0.8,20);
	self.d = linee.pixelDensity();
  
  for (let j = 0; j < linee.pixels.length; j+=3) 
  {
    // loop over
    //this.alphy = 4 * (( self.d + j) * width * self.d + ( self.d + i));
    linee.pixels[j+3] = self.opaci.value();
	
  }

//linee.
return linee;
}