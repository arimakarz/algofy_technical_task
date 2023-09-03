const collapsedText = document.getElementById("collapsible");
        
collapsedText.addEventListener("click", function() {
  this.classList.toggle("active");
  let content = this.nextElementSibling;
  (content.style.display === "block") ? content.style.display = "none" : content.style.display = "block"
})

function auto_height(elem) { 
    elem.style.height = '5px';
    elem.style.height = `${elem.scrollHeight}px`;
}
