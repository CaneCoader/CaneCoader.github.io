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



