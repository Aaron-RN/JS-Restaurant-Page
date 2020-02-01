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

const Home = () => {
  ClearBody();
  NavBar.setTab();
  document.body.appendChild(initHomePage());
};

const About = () => {
  ClearBody();
  NavBar.setTab('about');
  document.body.appendChild(initAboutPage());
};

const Contact = () => {
  ClearBody();
  NavBar.setTab('contact');
  document.body.appendChild(initContactPage());
};

function NavBarButtons() {
  NavBar.homeTab(Home);
  NavBar.aboutTab(About);
  NavBar.contactTab(Contact);
}

function Initialize() {
  NavBar.init();
  document.body.appendChild(NavBar.getContent());
  document.body.appendChild(initHomePage());
  NavBarButtons();
}

Initialize();