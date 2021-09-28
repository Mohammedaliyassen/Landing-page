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

//create sections equal to their number 
const fatherOfSection = document.getElementById('main');

let mySection = fatherOfSection.querySelectorAll('section');
//cloning secions
for(let i = 1; i <= mySection.length; i++ ){
    //add 'a' html Element every time
    newLi.innerHTML='<a href="#section' + [i]+'" data-nav="section'+[i]+'"  style="color:#FFF;text-decoration: none;"> Section '+[i]+'</a>';
    newUl.appendChild(newLi.cloneNode(true));
}

//calc the size and position for secion
const isInViwe = function (part) {
    return Math.floor(part.getBoundingClientRect().bottom);
}


//add and remove class's sections
const myActiveClass = function(isIn,part)  {
    isIn ?
        part.classList.add("your-active-class"): part.classList.remove("your-active-class");
    
}

//function for scroll
const sectionIn = function()  {
    //know the section position
    mySection.forEach(section => {
    //start-up calc sections where start and end
        const inViewPort =  () => isInViwe(section) < 900 && isInViwe(section) >= 500; 
        myActiveClass(inViewPort(),section);
    });
}
//event listener for window
window.addEventListener('scroll', sectionIn);
//movement into sections
newUl.addEventListener('click' ,(event) => { 
    event.preventDefault();
    if 
        (event.target.dataset.nav){
        document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
        //how much time we need take to move 
        setTimeout(()=>{
            location.hash = `${event.target.dataset.nav}`;
        },400);
    }
    
});





