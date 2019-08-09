// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// Might have to mess with the GET request to iterate over the topics

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
  const data = response.data;
  console.log(data);
  console.log(data.topics);
  const TopicsFunction = createTabs(data);
  topics.appendChild(TopicsFunction);
})

//then create a component based on the data and put in on the .topics 

const topics = document.querySelector('.topics')

function createTabs(object){
  //creating elements
  const tab = document.createElement('div');

  //creating structure (nothing to append to?)

  //creating class names
  tab.classList.add('tabs');

  //creating text content
  tab.textContent = object.topics;

  return tab;
}

topics.appendChild(createTabs())




// menuItems.forEach(menuItems => {
//     const LI = document.createElement('li');
//     LI.textContent = menuItems;
//     UL1.appendChild(LI);
//   });

// followersArray.forEach(items => {
//     axios.get(`https://api.github.com/users/${items}`)
//     .then((response) => {
//       const info = response.data;
//       const newCard = createCards(info);
//       // info.appendChild(newCard);
//       // const = document.querySelector('.cards');
//       cards.appendChild(newCard);
//     })