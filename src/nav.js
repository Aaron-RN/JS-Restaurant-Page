export const NavBar = (() => {
  let contentNav;
  let navList;
  let home;
  let about;
  let contact;
  
  const getContent = () => contentNav;
  const homeTab = () => document.querySelector('#home');
  const aboutTab = () => document.querySelector('#about');
  const contactTab = () => document.querySelector('#contact');
  
  const init = (tabSelected = "home") => {
    contentNav = document.createElement('nav');
    contentNav.setAttribute("id", "navbar");
    navList = document.createElement('ul');

    home = document.createElement('li');
    home.setAttribute("id", "home");
    home.classList.add("mynav-item", "active");
    if (tabSelected == "home"){home.classList.add("active");}
    home.innerHTML = "Home";

    about = document.createElement('li');
    about.setAttribute("id", "about");
    about.classList.add("mynav-item");
    if (tabSelected == "about"){about.classList.add("active");}
    about.innerHTML = "About";

    contact = document.createElement('li');
    contact.setAttribute("id", "contact");
    contact.classList.add("mynav-item");
    if (tabSelected == "contact"){contact.classList.add("active");}
    contact.innerHTML = "Contact";


    contentNav.appendChild(navList);
    navList.appendChild(home);
    navList.appendChild(about);
    navList.appendChild(contact);
  }

  return { getContent, homeTab, aboutTab, contactTab };
})();