window.addEventListener("load", () => {
    setTimeout(() => {
         document.querySelector(".progress-loader").style.display = "none"; // Hide loader
         document.querySelector(".loading-content").style.display = "block"; // Show content
    }, 3000); // Change 3000ms (3 seconds) to your preferred loading time
});


const text = document.querySelector("h5");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Web Developer';
    }, 0);
    
    setTimeout(() => {
        text.textContent = 'App Developer';
    }, 3000);
    
    setTimeout(() => {
        text.textContent = 'Software Developer';
    }, 6000);
}

textLoad();
setInterval(textLoad, 9000); 

// navbar
function toggleMenu() {
    document.getElementById("sideNav").classList.toggle("active");
}
// carsoul
const hidden = document.querySelector('.hide');
hidden.style.display = 'none';

const hiding = document.querySelector('.hide-button')
hiding.style.display= 'none'

const show = document.querySelector('.show-button');
show.addEventListener('click', () => {
    hidden.style.display = 'block';  
    show.style.display = 'none'
    hiding.style.display='block'
});


hiding.addEventListener('click',()=>{
    hidden.style.display = 'none';  
    show.style.display = 'block'
    hiding.style.display='none'
})
// skills
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.classList.contains('fill-html') ? "90%" :
                                           entry.target.classList.contains('fill-css') ? "80%" :
                                           entry.target.classList.contains('fill-Boot') ?"80% ": 
                                           entry.target.classList.contains('fill-js') ? "75%" : 
                                           entry.target.classList.contains('fill-jQ') ?"65% ": 
                                           entry.target.classList.contains('fill-RJS') ?"80% ":
                                        //    Backend  
                                        entry.target.classList.contains('fill-MDB') ?"80% ":
                                        entry.target.classList.contains('fill-EJS') ?"75% ":
                                        entry.target.classList.contains('fill-NJS') ?"80% ":
                                        entry.target.classList.contains('fill-PT') ?"80% ":"0%";

                                        
            }
        });
    }, { threshold: 0.5 });  // Trigger when 50% of the div is visible

    progressBars.forEach(bar => observer.observe(bar));
});
// 
const skill = document.querySelector('.skillss');
const edu = document.querySelector('.Educationss');
const exp = document.querySelector('.Experiencess');
loading = document.querySelector('#loading')
loading.style.display='none'
skill.style.display = 'block';
edu.style.display = 'none';
exp.style.display = 'none';
function Skills() {
    // Show loader first
    loading.style.display = 'block';
    skill.style.display = 'none';
    edu.style.display = 'none';
    exp.style.display = 'none';

    // After 3 seconds, hide the loader and show the skills section
    setTimeout(() => {
        loading.style.display = 'none'; // Hide loader
        skill.style.display = 'block'; // Show skills section
    }, 3000);
}
skill.addEventListener('click', Skills);

function Education(){
    loading.style.display = 'block';
    skill.style.display='none'
    exp.style.display='none'
    edu.style.display='none'

    setTimeout(() => {
        loading.style.display = 'none'; // Hide loader
        edu.style.display = 'block'; // Show skills section
    }, 3000);
}
edu.addEventListener('click',Education);

function Experince (){
    loading.style.display = 'block';
    skill.style.display='none'
    edu.style.display='none'
    exp.style.display='none'
    
    setTimeout(() => {
        loading.style.display = 'none'; // Hide loader
        exp.style.display = 'block'; // Show skills section
    }, 3000);
}
exp.addEventListener('click',Experince);
