// alert("Hi")

const sections = document.querySelectorAll(".section");
const sectBtns= document.querySelectorAll("controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions(){
    // Add Active Class to the Clicked BTN
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            // console.log(currentBtn);
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            // console.log(currentBtn[0]);
            this.className += " active-btn";
        })
    }

    // Add Active Class to Sections
    allSections.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        // console.log(id);
        if(id){
            // Remove Selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove("active");
            })
            e.target.classList.add("active");

            // Hide other Sections
            sections.forEach((section)=>{
                section.classList.remove("active");
            })

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
}
pageTransitions();