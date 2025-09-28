// 1. Create the buttons in the javascript to begin with and load them in each HTML file

// 2. Create a second interactive part (using JS) - Interative buttions on my portfolio

/*
<!--Nav Bar
    <ul>
      <li><a href="#Main Page">Main Page</a></li>
      <li><a href="#Portfolio">Portfolio</a></li>
      <li><a href="#Resume">Resume</a></li>
    </ul>-->

<div class= "footer">
      <p>Connect With Me:</p>
      <p>
        <a href="">LinkedIn</a>
        <a href="">Handshake</a>
      </p>
    </div>
*/

window.addEventListener("load", (e) => {
    navigation();
    footer();
    interactivePortfolio();
});

/* Citation: https://www.w3schools.com/jsref/met_document_createtextnode.asp */
function navigation() {
    const navigation = document.getElementById("#nav-bar");

    // main, resume, portfolio (a tags)
    const mainPage = document.createElement("a");
    const resumePage = document.createElement("a");
    const portfolioPage = document.createElement("a");

    mainPage.href = "index.html";
    mainPage.textContent = "Main";

    resumePage.href = "resume.html";
    resumePage.textContent = "Resume";

    portfolioPage.href = "portfolio.html";
    portfolioPage.textContent = "Portfolio";

    // Live Coding
    navigation.append(mainPage);
    navigation.append(resumePage);
    navigation.append(portfolioPage);
    
}

/* Interactive Element: I implemented a horizontal photo gallery using what we learned about hovering visibility and clickable buttons (from the live labs and last weeks homework). I programmed it in a way that allows the user to hover or click on images and when they do a dropdown appears that gives them more information on the subject provided in the image. My accessibiliy logic was that if a user couldn't click properly they'd at least be able to hover to get the information. 

Citation: https://www.w3schools.com/jsref/prop_element_classlist.asp
https://www.w3schools.com/howto/howto_css_dropdown.asp 
*/


function interactivePortfolio() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Live Coding 9-26
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
          
          galleryItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }

          });

          item.classList.toggle('active');
        });
    });
  }

function footer() {
    const footer = document.getElementById("#footer");
    
    const linkedinLink = document.createElementById("a");
    const handshakeLink = document.createElementById("a");

    linkedinLink.href = "https://www.linkedin.com/in/shriya-manchala/";
    linkedinLink.textContent = "LinkedIn";

    handshakeLink.href = "https://rose-hulman.joinhandshake.com/profiles/udyh44";
    handshakeLink.textContent = "Handshake";

    // Citation: https://www.w3schools.com/jsref/met_document_createtextnode.asp
    footer.append(document.createTextNode("Connect With Me:"));
    footer.append(linkedinLink);
    footer.append(document.createTextNode("  ||  "));
    footer.append(handshakeLink);
}
