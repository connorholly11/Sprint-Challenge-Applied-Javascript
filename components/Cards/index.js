// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>


//do a forEach in axios that says do this for each topic within the articles


//for each topic in w article do this specific thing (which is the function)
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        const data = response.data;
        console.log(data);
        const articleFunction = createArticles(data);
        article.appendChild(articleFunction);
    })


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then((response) => {
//   const data = response.data;
//   console.log(data);
//   console.log(data.topics);
//   const TopicsFunction = createTabs(data);
//   topics.appendChild(TopicsFunction);
// })



const article = document.querySelector('.cards-container')

function createArticles(object){
  //creating elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  //imgContainer closes after img
  const span = document.createElement('span');

  //creating structure
  card.appendChild(headline);
  headline.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  //imgContainer closes after img
  author.appendChild(span);

  //creating class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  img.classList.add('img');
  span.classList.add('span');

  //creating text content... going to be getting this from the GET function and using object.(whatever it says in your data from GET function)
    headline.textContent = object.headline;
    author.textContent = object.authorName;
    img.textContent = object.authorPhoto;


  return card;
}

article.appendChild(createArticles())




// axios.get('https://lambda-times-backend.herokuapp.com/articles')