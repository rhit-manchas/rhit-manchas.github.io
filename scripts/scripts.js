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
});

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

function footer() {
    const footer = document.getElementById("#footer");
    
    const linkedinLink = document.createElementById("a");
    const handshakeLink = document.createElementById("a");

    linkedinLink.href = "";
    mainLink.textContent = "LinkedIn";

    handshakeLink.href = "";
    mainLink.textContent = "Handshake";

    // Citation: https://www.w3schools.com/jsref/met_document_createtextnode.asp
    footer.append(
      document.createTextNode("Connect With Me:"),
      linkedinLink,
      document.createTextNode("  ||  "),
      handshakeLink
    );
}
