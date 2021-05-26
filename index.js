var noofdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var x=this.innerHTML;
        makesound(x);
        animateButton(x);
    })
}
document.addEventListener("keypress",function(){
    makesound(event.key);
    animateButton(event.key);
});
function makesound(key){
        switch(key){
            case "w":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "d":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "j":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "k":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "l":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
        }
}
function animateButton(currKey){
var v=document.querySelector("."+currKey);
v.classList.add("pressed");
setTimeout(function(){
    v.classList.remove("pressed");
},100);
}