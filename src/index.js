import './main.css';
import NavBar from './nav';
import initHomePage from './home';
import initAboutPage from './about';
import initContactPage from './contact';

function ClearBody() {
  const pageLoaded = document.querySelector('#content');
  if (!pageLoaded) { return; }
  pageLoaded.parentNode.removeChild(pageLoaded);
}

/* eslint-disable no-use-before-define */
function NavBarButtons() {
  document.querySelector('#home').onclick = Home;
  document.querySelector('#about').onclick = About;
  document.querySelector('#contact').onclick = Contact;
  //  These lines below give invalid object error...
  //  Assuming for some reason I can't access the NavBar variables from here.
  //  ANY SUGGESTIONS?

//  NavBar.homeTab.addEventListener("click", Home);
//  NavBar.aboutTab.onclick = About;
//  NavBar.contactTab.onclick = Contact;
}
/* eslint-enable no-use-before-define */

function Initialize() {
  NavBar.init();
  document.body.appendChild(NavBar.getContent());
  document.body.appendChild(initHomePage());
  NavBarButtons();
}

function Home() {
  ClearBody();
  NavBar.setTab();
  document.body.appendChild(initHomePage());
}

function About() {
  ClearBody();
  NavBar.setTab('about');
  document.body.appendChild(initAboutPage());
}

function Contact() {
  ClearBody();
  NavBar.setTab('contact');
  document.body.appendChild(initContactPage());
}


Initialize();