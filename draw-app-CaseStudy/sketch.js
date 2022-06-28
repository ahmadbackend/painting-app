//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var  output;
var shapes;
var colorPicker;   // background color 
function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
   
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
   // colorPicker = createColorPicker('#ffffff');
    //console.log(colorPicker);
  // colorPicker.position(width/2, height + 40);
 //  console.log(canvasContainer);
   // loadPixels();
	c.parent("content");
   
	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
    imageAdd= new Image();
    
	//create a toolbox for storing the tools
	toolbox = new Toolbox();
    shapes= new Shapes();
	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	//toolbox.addTool(sprayCan);
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new sprayCan());
	toolbox.addTool(new Eraser());
    toolbox.addTool(new Image());
    toolbox.addTool(new Shapes());
background(255);
    
}

function draw() {

 
   //  background(colorPicker.color());
	//textSize(slider.input());
	//strokeWeight(slider.value());
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}