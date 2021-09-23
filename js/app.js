//declar variables for html elements and give style 
const myNav = document.getElementById('nav_bar');
const newUl = document.getElementById('navbar__list');
myNav.style.backgroundColor='rgba(0,79,113,0.5)';
newUl.style.cssText = 'width:auto; height:auto; background-color:rgba(0,0,0,0.5);';

//append ul to nav_bar
myNav.appendChild(newUl);

//create Li element and style
let newLi = document.createElement('li');
newLi.innerHTML='<a href="#home" style="color:#FFF;text-decoration: none; "> Home </a>';
newLi.style.cssText='background-color:rgba(0,15,60,.8); height:30;width:100; margin : 20px 10px;padding:5px; color:#000;text-align:center;border-radius: 0 20px ; ';

//append Li element to Ul element
newUl.appendChild(newLi.cloneNode(true));

//create sections equal to their number 
const fatherOfSection = document.getElementById('main');

let mySection = fatherOfSection.querySelectorAll('section');
//cloning secions
for(let i = 1; i <= mySection.length; i++ ){
    //add 'a' html Element every time
    newLi.innerHTML='<a href="#section' + [i]+' data-nav="section"'+[i]+' style="color:#FFF;text-decoration: none;"> Section '+[i]+'</a>';
    newUl.appendChild(newLi.cloneNode(true));
}

//calc the size and position for secion
const offSet = function (section) {
    return Math.floor(section.getBoundingClientRect().top);
}

//remove class from section
const removeActiveClass = (section) => {
    
        section.classList.remove("your-active-class");
    
}

//add class for section
const addActiveClass = function(isIn,section)  {
    if(isIn){
        section.classList.add("your-active-class");
    }
}

//function for scroll
const sectionIn = function()  {
    //know the section position
    mySection.forEach(section => {
        const elemOffSet = offSet(section);
        const inViewPort =  () => elemOffSet < 350 && elemOffSet >= -350; //start-up calc sections where start and end
        removeActiveClass(section);
        addActiveClass(inViewPort(),section);
    });
}
//event listener for window
window.addEventListener('scroll', sectionIn);

newUl.addEventListener('click' ,(event) => { 
    event.preventDefault();
    if(event.target.dataset.nav){
        document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
        setTimeout(()=>{
            location.hash = `${event.target.dataset.nav}`;
        },400);
    }
    
} );





