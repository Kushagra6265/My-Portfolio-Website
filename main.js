const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {
    let current = "";

    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

  
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab"); 
    }


    event.currentTarget.classList.add("active-link");

 
    document.getElementById(tabname).classList.add("active-tab");
}


// Script to send message from Contact me form to a google sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbwmWMyDQcFqtazYqAMJxQbf-yWGTsLYJamsA07uqwALXJ_kGoczv9NlywOw1fO-2h_89Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerText="Message sent successfully"
setTimeout(function(){
    msg.innerHTML=""
},5000)
form.reset()
})
    .catch(error => console.error('Error!', error.message))
})
