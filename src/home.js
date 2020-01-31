import bgIMG from './imgbg1.jpg';

export function initHomePage() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute("id", "content");
  
  const header = document.createElement('h1');
  header.classList.add("text-center");
  header.innerHTML = "Welcome To Ron De La McDons";
  
  const descBody = document.createElement('div');
  descBody.setAttribute("id", "desc");

  // Add the image to descBody div.
  const myIcon = new Image();
  myIcon.src = bgIMG;
  myIcon.classList.add("main-img");
  
  contentDiv.appendChild(header);
  contentDiv.appendChild(descBody);
  descBody.appendChild(myIcon);
  descBody.innerHTML+=`<p class='text-center mt-2'>Welcome Ron de la McDonalds, fancy huh?</p>`;

  return contentDiv;
}

