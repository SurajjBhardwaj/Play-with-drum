var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var button=this.innerHTML;
    switch (button) {
        case button='w':
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();    
            break;
         
        case button='a':
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();    
            break;
        
        case button='s':
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();    
            break;
        
        case button='d':
        var audio=new Audio('sounds/crash.mp3');
         audio.play();    
            break;

        case button='j':
        var audio=new Audio('sounds/snare.mp3');
        audio.play();    
             break;  
        case button='k':
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play(); 

        case button='l':
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();    
            break;       
            break;     
            default:
            break;
    }
    
    
    })

}
 