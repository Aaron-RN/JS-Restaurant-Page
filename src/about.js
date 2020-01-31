import aboutIMG from './about1.jpg';

export function initAboutPage() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute("id", "content");
  
  const header = document.createElement('h1');
  header.classList.add("text-center");
  header.innerHTML = "About Us";
  
  const descBody = document.createElement('div');
  descBody.setAttribute("id", "desc");

  // Add the image to descBody div.
  const myIcon = new Image();
  myIcon.src = aboutIMG;
  myIcon.classList.add("main-img");
  
  contentDiv.appendChild(header);
  contentDiv.appendChild(descBody);
  descBody.appendChild(myIcon);
  descBody.innerHTML+=`<p class='text-center mt-2'>Welcome Ron de la McDonalds, fancy huh?</p>
    <p class="text-small">Bah duhp bup bup baahh, I'm Loving It!</p>
    <p class="text-smile">O__.__O</p>
    <p class="text-smile">\\_____/</p>`;

  return contentDiv;
}

