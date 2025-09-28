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

/* Interactive Element: I implemented a horizontal photo gallery using what we learned about hovering visibility and clickable buttons (from the live labs and last weeks homework). I found a way to make a collapsable as linked bellow for interactivity. 

Citation: https://www.w3schools.com/howto/howto_js_collapsible.asp 
*/

/* Collapsible Gallery Functionality */
function interactivePortfolio() {
  var collapse = document.getElementsByClassName("collapsible");

  var i;
  for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
      
      // added in a section to close the collapsable
      for (var j = 0; j < collapse.length; j++) {
        if (collapse[j] !== this) {
          collapse[j].classList.remove("active");
          collapse[j].nextElementSibling.style.display = "none";

        }
      }

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      
      if (content.style.display === "block") {
        content.style.display = "none";

      } else {
        content.style.display = "block";
      }
      
    });
  }
}


function footer() {
    const footer = document.getElementById("#footer");
    
    const linkedinLink = document.createElement("a");
    const handshakeLink = document.createElement("a");

    linkedinLink.href = "https://www.linkedin.com/in/shriya-manchala/";
    linkedinLink.textContent = "LinkedIn";

    handshakeLink.href = "https://rose-hulman.joinhandshake.com/profiles/udyh44";
    handshakeLink.textContent = "Handshake";
    
    // Citation: https://www.w3schools.com/jsref/met_document_createtextnode.asp

    footer.append(linkedinLink);
    footer.append(handshakeLink);
}
