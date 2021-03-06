const NavBar = (() => {
  let contentNav;
  let navList;
  let home;
  let about;
  let contact;

  const getContent = () => contentNav;
  const homeTab = (funct) => document.querySelector('#home').addEventListener('click', funct);
  const aboutTab = (funct) => document.querySelector('#about').addEventListener('click', funct);
  const contactTab = (funct) => document.querySelector('#contact').addEventListener('click', funct);

  const init = () => {
    contentNav = document.createElement('nav');
    contentNav.setAttribute('id', 'navbar');
    navList = document.createElement('ul');

    home = document.createElement('li');
    home.setAttribute('id', 'home');
    home.classList.add('mynav-item', 'active');
    home.innerHTML = 'Home';

    about = document.createElement('li');
    about.setAttribute('id', 'about');
    about.classList.add('mynav-item');
    about.innerHTML = 'About';

    contact = document.createElement('li');
    contact.setAttribute('id', 'contact');
    contact.classList.add('mynav-item');
    contact.innerHTML = 'Contact';


    contentNav.appendChild(navList);
    navList.appendChild(home);
    navList.appendChild(about);
    navList.appendChild(contact);
  };

  const setTab = (tabSelected = 'home') => {
    home.className = 'mynav-item';
    about.className = 'mynav-item';
    contact.className = 'mynav-item';
    if (tabSelected === 'home') { home.classList.add('active'); }
    if (tabSelected === 'about') { about.classList.add('active'); }
    if (tabSelected === 'contact') { contact.classList.add('active'); }
  };
  return {
    init, setTab, getContent, homeTab, aboutTab, contactTab,
  };
})();

export default NavBar;