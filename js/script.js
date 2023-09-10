document.addEventListener("DOMContentLoaded", function() {
    const headerText = document.querySelector(".headerText");
    headerText.style.opacity = "1";
    headerText.style.transform = "translateY(-50%)";
    
});





window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.navbar');
    if (window.scrollY >= 20) {
        header.classList.add('white');
        nav.classList.add('white');
    } else {
        header.classList.remove('white');
        nav.classList.remove('white');
    }
});



function getCurrentSections(sections) {
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            return section.id;
        }
    }
    return null;
}

function getCurrentP(divs) {
    for (const div of divs) {
        const rect = div.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            return div.id;
        }
    }
    return null;
}

function setActiveLink(activeSectionId) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === "#" + activeSectionId) {
            link.classList.add("active");
            //split link by / and keep the last element
            var link=link.href.split('/').pop();
          
            // console.log("adding active class to "+activeSectionId)
        } else {
            // console.log("removing active class from "+activeSectionId)
            link.classList.remove("active");
            
        }
    });
}

function scrollToTop() {
    console.log("Scrolling to top");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
    }
    window.onscroll = function() {
        scrollFunction();
        };

        document.addEventListener("DOMContentLoaded", function() {

            const navbarLinks = document.querySelectorAll(".navbar a[href^='#']");
        
            navbarLinks.forEach(link => {
                link.addEventListener("click", function(e) {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute("href"));
                    const offset = -90; // Ajustez la valeur en fonction de la hauteur de votre bannière
                    const targetOffset = target.getBoundingClientRect().top + window.scrollY + offset;
                    
                    //show target name
                    var targetName=target.id;
                    console.log("target name"+targetName);
                    window.scrollTo({
                        top: targetOffset,
                    });
                });
            });

            // const navbarLinks2 = document.querySelectorAll(".navbar a[href^='#']");
        
            // navbarLinks2.forEach(link => {
            //     link.addEventListener("click", function(e) {
            //         e.preventDefault();
            //         const target2 = document.querySelector(link.getAttribute("href"));
            //         const offset2 = -90; // Ajustez la valeur en fonction de la hauteur de votre bannière
            //         const targetOffset2 = target2.getBoundingClientRect().top + window.scrollY + offset2;
                    
            //         //show target name
            //         var targetName2=target2.id;
            //         console.log("target name"+targetName2);
            //         window.scrollTo({
            //             top: targetOffset2,
            //         });
            //     });
            // });


            

            

            
            window.addEventListener("scroll", () => {
                const sections = document.querySelectorAll("section");
                const currentSectionId = getCurrentSections(sections);
               
                setActiveLink(currentSectionId);
            });



        });


       

        



            
        
    

// You can use the Google Maps API to embed the map here
// Example: https://developers.google.com/maps/documentation/javascript/overview
