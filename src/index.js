import _ from 'lodash';
import './main.css';
import {NavBar} from './nav.js';
import {initHomePage} from './home.js';
import {initAboutPage} from './about.js';
import {initContactPage} from './contact.js';

function ClearBody(){
  let pageLoaded = document.querySelector("#content");
  if (!pageLoaded) {return;}
  pageLoaded.parentNode.removeChild(pageLoaded);
}

function Initialize(){
  NavBar.init();
  document.body.appendChild(NavBar.getContent());
  document.body.appendChild(initHomePage());
  NavBarButtons();
}

function Home(){
  console.log("Home");
  ClearBody();
  NavBar.setTab();
  document.body.appendChild(initHomePage());
}

function About(){
  console.log("ABout");
  ClearBody();
  NavBar.setTab("about");
  document.body.appendChild(initAboutPage());
}

function Contact(){
  console.log("Contact");
  ClearBody();
  NavBar.setTab("contact")
  document.body.appendChild(initContactPage());
}

function NavBarButtons(){
  document.querySelector('#home').onclick = Home;
  document.querySelector('#about').onclick = About;
  document.querySelector('#contact').onclick = Contact;
//  NavBar.homeTab.addEventListener("click", Home);
//  NavBar.aboutTab.onclick = About;
//  NavBar.contactTab.onclick = Contact;
}

Initialize();