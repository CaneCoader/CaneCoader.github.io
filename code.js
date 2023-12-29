var shinyNum = Math.random();
var shiny = shinyNum < 0.033;
var r = document.querySelector(':root');

if (shiny){
    document.documentElement.className = "shiny";
    document.getElementById("shinymsg").style.display = "block"; 
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('grow-anim');
      }
    });
  });


const boxes = document.querySelectorAll('.box-effect');
boxes.forEach(box => {
    observer.observe(box);
});


var motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

if(motion.matches){
  const coll = document.querySelectorAll(".collapse");
  coll.forEach(collButton => {
    next = collButton.nextElementSibling;
    next.style.height = 0;
    next.style.paddingTop = 0;
    next.style.paddingBottom = 0;
    collButton.addEventListener("click",function() {
      

      var content = this.nextElementSibling;
      

      if (this.classList.contains("active")){
        content.style.height = 0;
        content.style.paddingTop = 0;
        content.style.paddingBottom = 0;

      } else {
        content.style.height = content.scrollHeight + "px";

        content.style.paddingTop = "1rem";
        content.style.paddingBottom = "1rem";

      }
      this.classList.toggle("active");
    });
  });
}






