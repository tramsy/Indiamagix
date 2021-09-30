window.onload = ()=>
{
}

const toggleMenu = ()=>
{
    const lowerNav = document.getElementById('lower-nav');
    if( lowerNav.clientHeight == '0')
    {
        lowerNav.style.height = 'max-content';
    }else{
        lowerNav.style.height = '0px';
    }

}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const imgOptions = {};

const preloadImage = (img)=>
{
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}


const images = document.querySelectorAll("[data-src]");
console.log(images);
const imgObserver = new IntersectionObserver((enteries, imgObserver)=>
{   
    enteries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })

}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})