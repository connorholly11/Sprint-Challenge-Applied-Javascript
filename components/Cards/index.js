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
        const articleData = data.articles;
        console.log(data);
        console.log(articleData);
        // const articleFunction = createArticles(data);
        // article.appendChild(articleFunction);
    
    // for (let i = 0; i < articleData.length; i++){
    //     createArticles(articleData);
    // }
    let articles = response.data.articles;
    for (topic in articles){
        articles[topic].forEach(article => {
            articleContainer.appendChild(createArticles(article))
        })
    }
})



const articleContainer = document.querySelector('.cards-container')

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
    
    author.textContent = object.authorName;
    img.src = object.authorPhoto;
    headline.textContent = object.headline;

  return card;
}





// axios.get('https://lambda-times-backend.herokuapp.com/articles')