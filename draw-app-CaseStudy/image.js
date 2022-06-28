function Image(){
    this.icon = "assets/image.png";
	this.name = "image";
    this.onImage=false;
    this.imgInserted=false;
    var self= this;
    this.showFilter=false;
    this.dragDetected
    this.draw= function()
    {
        var m= false;
        var txt;
         
         document.getElementById('imageTools').style.display=" inline";  // to show image buttons
   document.getElementById('imageloader').className="fileinput";
       select("#myFileInput").mouseClicked(function(){
        
         document.querySelector('#myFileInput').addEventListener("change",function()
            {
             const reader= new FileReader();
             reader.addEventListener("load",()=>
          {
                 
                 localStorage.setItem('recent-image',reader.result);
                document.querySelector('#inserted').setAttribute("src",reader.result);
                 // file validation
                 var fileInputType=document.querySelector('#myFileInput').value;
                 var acceptedFiles=/(\.jpg|\.jpeg|\.png|\.gif)$/i;
                 
                 
                 
                if (!acceptedFiles.exec(fileInputType)) {
                m=true;
                }
                 if(acceptedFiles.exec(fileInputType))
                {
                m=false;
                 document.getElementById("alert").innerHTML =""
                self.imgInserted=true; 
                 document.querySelector('#inserted').className="inserted"
                    
            } 
                    if (m)
                        {  
                            document.getElementById("alert").innerHTML = "kindly upload images only!no need to refresh :-D";
                        }
        /// end of file validation 
             });
                  reader.readAsDataURL(this.files[0]); 
         })

    

		 })	
        // activation of image tools 
//        if (self.imgInserted)
//            {
//               
//                 document.getElementById('imageTools').className=" showTools";  //not needed anymore 
//            }
        //calling tools 

       select("#imgfilter").mouseClicked (function(){
            self.colorFilter()
        });
         select("#crop").mouseClicked (function(){
            self.crop()
        });
        select("#drag").mouseClicked (function(){
         //   console.log("drag called");
            self.drag()
        });
    }
  
  
    /////////////////////////////////////////////// functions that do the taught work ////////////////////////
    //drag method
    this.drag=function(){
      self.stopDrag=false;
  //console.log("drag called")
    self.left=document.getElementById("inserted");
        //get values of width and height to use it to make sure image not going outside the frame
    self.imgWidth=self.left.style.width;
     //    console.log(self.imgWidth);
    self.imgHeight=self.left.style.height;
        document.addEventListener('mousemove', this.logKey);
        // function to move  duck with my mouse 
    self.logKey=function(e){
        
        
        if(!self.stopDrag)
            {
                 
                self.left.style.marginLeft=event.clientX+'.px'; 
                self.left.style.marginTop=event.clientY+'.px';
                self.leftVal=self.left.style.marginLeft;
                self.topVal=self.left.style.marginTop;
                //console.log(self.leftVal);
               self.dragEnd();
            }
       

    };
        
         };
    self.dragEnd=function(){
        select("#content").mouseClicked(function(){
            self.stopDrag=true;
        })
   
    };
       
        
  //////////////////////////////////////////////////////////////// //still numer process
    this.crop=function()
    {
        this.loc=document.getElementById("inserted");
//        if(mouseIsPressed&&self.correct(self.loc))
//            {
//               this.move(self.loc.clientLeft,mouseY,mouseX,mouseY);
//               this.move(self.loc.clientWidth,mouseY,mouseX,mouseY);
//                this.move(mouseX,self.loc.marginTop,mouseX,mouseY);
//                this.move(mouseX,self.loc.marginBottom,mouseX,mouseY);
//                console.log("what im fkn doing");
//            }
//        else{
//            console.log("correct return false");
//        }
        
        
        //this.tryit= get(this.loc.x)
        
        //validate that mouse is within the image 
         self.correct=function(canvas)
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
     // movement function
         this.move=function(origix,originy,newx,newy){
             
             if(dist(originx,originy,newx,newy)<20)
                 {
                     originy=newx;
                     originy=newy;
                     
                 }
         }
         
        //
        
    };
    /////////////////////////////////////////////////////////////////////////////////
    
 
    this.colorFilter=function()
    {
        
         // control filters appearance
        
         this.element= document.getElementById("imgfilter");
       
         this.element.addEventListener("click",self.FiltControl);
        // self.changeValues(opacity,gray,self.gray);


          
        self.filtersid=[ {a:document.getElementById('grayscalet')},
        {a:document.getElementById('sepiat')},
        {a:document.getElementById('brightnesst')} ,
        {a:document.getElementById('contrastt')} ,
        {a:document.getElementById('rotatet')},
        {a:document.getElementById('invertt')}];
        var filsNames=[{b:"grayscale"},{b:"sepia"},{b:'brightness'},
            {b:'contrast'},{b:'rotate'},{b:'invert'}];
        self.filtersvars=[self.gray,self.sepia,self.bright,self.contrasts,
             self.rotates,self.inverts];
         for(let i=0;i<self.filtersid.length;i++)
         {
            self.photo=document.getElementById ('inserted');
            if(self.showFilter)
            {
        
         
        
        // console.log(filsNames[i].b); 
         self.filtersid[i].a.addEventListener('change', function()
         {
            self.filtersvars[i]= self.filtersid[i].a.value;
            self.photo.style.filter=`${filsNames[i].b}(${self.filtersvars[i]}%)`;
               // it prints input 
        });

                
            }
         }
        
    }
     self.FiltControl=function (){
             
             
             if(!self.showFilter)
                {
                    //document.getElementById('filters').style.display="block";
                     document.getElementById('filters').className="filt";
                    self.showFilter=true;
                     
                }
            else if(self.showFilter)
                {
                   //  document.getElementById('filters').style.display="none";
                    document.getElementById('filters').className="hide"
                   
                    self.showFilter=false;
                };
         return self.showFilter;
         };
         ///////////////////still under process filter manipulation///
   // self.changeValues=function(filtername,filteriD,filtervar)
   


        }
        
       
    
/////////////////////////////////////////still under process canvas manipulation////
      //   self.changeImage=function(){

        //    if (self.showFilter)
          //  {
                //self.pixelkilling();
            //}
         //}

   // this.convertImgToCanvas=function(imge)            // under improvement
    //{
   //add button to select the image to be convas to draw inside it 
   //preserve the external canvas data from disappearing 
   //
   
        
////}
//}