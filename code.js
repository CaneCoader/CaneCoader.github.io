var shinyNum = Math.random();
var shiny = shinyNum < 0.033;
var r = document.querySelector(':root');

if (shiny){
    document.documentElement.className = "shiny";
    document.getElementById("shinymsg").style.display = "block"; 
    scrollV = window.scroll(0,0);

}

