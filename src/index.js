import _ from 'lodash';
import {NavBar} from './nav.js';
import {initHomePage} from './home.js';
import {initAboutPage} from './about.js';
import {initContact} from './contact.js';

function ClearBody(){
  let pageLoaded = document.querySelector("#content");
  if (!pageLoaded) {return;}
  pageLoaded.parentNode.removeChild(pageLoaded);
}

function Home(){
  console.log("Home");
  ClearBody();
  console.log(NavBar);
  NavBar.init();
  document.body.appendChild(NavBar.getContent());
  console.log("initHomePage");
  document.body.appendChild(initHomePage());
}

function About(){
  console.log("ABout");
  ClearBody();
  NavBar.init("about");
//  document.body.appendChild(NavBar.getContent());
  document.body.appendChild(initAboutPage());
}

function Contact(){
  console.log("Contact");
  ClearBody();
  NavBar.init("contact")
//  document.body.appendChild(NavBar.getContent());
  document.body.appendChild(initContactPage());
}

function NavBarButtons(){
  NavBar.homeTab.addEventListener("click", Home);
  NavBar.aboutTab.onclick = About;
  NavBar.contactTab.onclick = Contact;
}

Home();
NavBarButtons();