// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


const headerContainer = document.querySelector('.header-container')

function Header(){
  const header = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1 = document.createElement('h1');
  const spanTemp = document.createElement('span');

  //creating structure
  header.appendChild(spanDate);
  header.appendChild(h1);
  header.appendChild(spanTemp);

  //class names
  header.classList.add('header');
  spanDate.classList.add('date');
  h1.classList.add('h1');
  spanTemp.classList.add('temp');

  //text content
  spanDate.textContent = "MARCH 28, 2019";
  h1.textContent = "Lambda Times";
  spanTemp.textContent = "98 Degrees";

  return header;
}

headerContainer.appendChild(Header())