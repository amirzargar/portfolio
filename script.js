
// JS for hamburger menu
function toggle()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");

    menu.classList.toggle("clicked");                 // adding/removing class clicked to menu-links 
    icon.classList.toggle("clicked");                 // adding/removing class clicked to hamburger-icon
}



//JS for window scroll and selecting appropriate menu from menu and hamburger 

let sections=document.querySelectorAll("section");             //getting array of section tag
let navlinks=document.querySelectorAll("header nav a");        //getting array of 


console.log(sections);
console.log(navlinks);

/* THese are the different ways of calling a function */
//window.onscroll=fun();
//window.onscroll=function fun (){
//window.onscroll=function (){
   
window.onscroll = () => {               //this type of function is called arrow function
	
    let winY = window.scrollY;         // getting the Y axis value and storing that in the winY

	
	sections.forEach((sec) => {       //runing forEach loop for sections array
		
        let secTop = sec.offsetTop;     //say currently in array say home i.e sections[0] top value=0
		let height = sec.offsetHeight;  //likewise height of sections[0] i.e home section height=755  
		let id = sec.getAttribute("id");//likewise will be home
        
                  //say winY=544
		if (winY >= secTop && winY < secTop + height) {
			navlinks.forEach((links) => links.classList.remove("active")); // removing active class for each links 
			
                //activeMenu=home|home  <--  will be here from navbar & menu-links
            let activeMenu = document.querySelectorAll(
				"header nav a[href*=" + id + "]"
			);
			
            activeMenu.forEach((link) => link.classList.add("active"));
		}
	});
	console.log(navlinks);
};


// JS for day and moon toggle switch
let dayNight=document.querySelector("#darkmode-toggle");
let wraper=document.querySelector(".container");

dayNight.addEventListener("click",()=>{
    wraper.classList.toggle("night");
});
    

//typed js

var typed = new Typed("#text", {
    strings: ["Developer","coder", "programmer","Editor","Ux/Ui designer"],
    loop:true,
    typeSpeed: 50,
    backSpeed:50,
    backdelay:1000,
  });

  

//   scroll top js (showng scroll btn)

const scrollBtn = document.querySelector(".scrollToTop");


//js to add active class to scrollbtn
window.addEventListener("scroll",function (){
    scrollBtn.classList.toggle("active",window.scrollY > 500);
});

//js to add click event to scroll btn

scrollBtn.addEventListener("click",()=>{
    document.body.scrollTop=0; 
        // or
    document.documentElement.scrollTop=0;
});








// rotate text inside skill left side 

let text=document.querySelector(".text p");

text.innerHTML=text.innerHTML.split("").map((char,i)=>`<b style="transform:rotate(${i*6}deg)">${char} </b>`).join("");



// **********js of mixit up************

const containerEl=document.querySelector(".projects-container");
var mixer=mixitup(containerEl);
mixer.filter('*');

            // active button
        const pbtn=document.querySelectorAll(".btn");
        pbtn.forEach((clickedBtn)=>{
            
            clickedBtn.addEventListener("click",()=>{

                pbtn.forEach((pb)=>pb.classList.remove("new-btn2"));
                
                clickedBtn.classList.add("new-btn2");
            })
            
        });


// scroll reveal js 

ScrollReveal({
    delay: 200,
    distance: '90px',
    duration: 2000,
});

ScrollReveal().reveal(".contact-list,.contact-main-text,.text-wraper,.skills-left-container", { origin:"top"});
ScrollReveal().reveal('.pic-wraper,.about-left-container', { origin:"left"});
ScrollReveal().reveal('.formBtn,.about-right-container,.projects-header' { origin:"right"});
ScrollReveal().reveal('.contact-form,.skills-right-container,.projects-containe', { origin:"bottom"});