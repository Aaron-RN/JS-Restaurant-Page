export function initContactPage() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute("id", "content");
  
  const header = document.createElement('h1');
  header.classList.add("text-center");
  header.innerHTML = "Contact Us";
  
  const descBody = document.createElement('div');
  descBody.setAttribute("id", "desc");
  descBody.innerHTML+=`
  <p class='mt-2'>Need to Reach US?</p>`;
  
  contentDiv.appendChild(header);
  contentDiv.appendChild(descBody);

  return contentDiv;
}

