// things to be improved :-
// 1)enables edit for old shapes not only the current one by 
//   a) creating array to store all shape
//  b)iterate over it 
//2 ) buttons should appear only when draw() is called
//3) adding 3d conversion 

function Shapes(){
    this.icon = "assets/geometric.png";
	this.name = "shape";
    var self= this;
     this.storage=[];
     this.containerArray=[]
    this.editMode=false;
      
    this.k = document.getElementById("content");
    this.editButton=createButton("edit shape");
    this.editButton.position(width*0.95,height*1.09);
    this.editButton.mousePressed(function(){
        if(!self.editMode){
            //
            self.editMode=true;
            
          
            self.editButton.html("add verticies")
        }
        else if(self.editMode) {
             loadPixels();
             self.editMode=false;
             self.editButton.html("edit shape");
        }
    });
    this.finish=createButton('finish once finish cant edit')
    this.finish.position(width*0.78,height*1.09);
    this.finish.mousePressed(function(){
           
        //self.containerArray.push(self.storage);
           self.editMode=true;
           self.editButton.html(" draw new");
         this.containerArray=self.assemblyArray( self.containerArray,self.storage);          //to assemble data before delete 
            loadPixels();
           self.emptyArray(self.storage);
            
       
     
       
       })
        
       this.assemblyArray=function(container,array){
         
           for(let i =0; i<array.length;i++)
              {
                  container.push(array[i]);   // to assemble the data by value not reference
              }
              
          
           return container;
       } 
    
     this.emptyArray=function(array)
    {
        while(array.length)
            {
                array.pop();
            }
         return array
    }
 
    this.draw= function()
    {
        fill(255);
       updatePixels();
           if(mouseIsPressed&&self.validate(self.k))           //
           {
              
              
             if(!self.editMode)
                 {
            
                       self.storage.push({ x:mouseX,y:mouseY});
                    
                 }
               else if(self.editMode) {
                      //console.log(self.storage);
                   
                           for(let j=0;j<self.storage.length;j++)
                               {
                                   if(dist(self.storage[j].x,self.storage[j].y,mouseX,mouseY)<15)
                                        { fill('red')
                                   
                                           self.storage[j].x=mouseX;
                                           self.storage[j].y=mouseY;
                                        console.log( self.storage[j].y);
                                            ellipse( self.storage[j].x, self.storage[j].y,20);
                                          
                                        }
                               }
                  
                       }
                
               }
    beginShape();
    for(let i =0;i<self.storage.length;i++)
         { noFill();
           vertex(self.storage[i].x,self.storage[i].y);
          }
    endShape();
 
    }
    //check that click inside canvas
    this.validate=function(canvas)
    {
        if(mouseY<canvas.clientHeight*0.9&&
           mouseY>canvas.clientTop&&
           mouseX<canvas.clientWidth*0.9&&
           mouseX>canvas.clientLeft)                    
           {
           return true;
           }
       
          
         
        else
            { 
                return false;
            }
    }
    
    
}