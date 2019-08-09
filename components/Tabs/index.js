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

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then((response) => {
//   const data = response.data;
//   const topicsData = data.topics;
//   console.log(data);
//   console.log(topicsData);
//   for (topicsData){

//   }
// //   topicsData.forEach(items => {
// //     const TopicsFunction = createTabs(data);
// //     items.appendChild(TopicsFunction);
// //   })
  
// })

// // followersArray.forEach(items 

// // axios
// //   .get("/api/endpoint")
// //   .then(response => {
// //     this.data = response.data;
// //     this.data.forEach(function(item) {
// //       console.log("found: ", item)
// //       console.log("found id: ", item.id)
// //       this.GetLikes(item.id);
// //     });
// //   })

// //then create a component based on the data and put in on the .topics 

// const topics = document.querySelector('.topics')

// function createTabs(object){
//   //creating elements
//   const tab = document.createElement('div');

//   //creating structure (nothing to append to?)

//   //creating class names
//   tab.classList.add('tab');

// //   const arraySparse = [1,3,,7];
// //   let numCallbackRuns = 0;
  
// //   arraySparse.forEach(function(element){
// //     console.log(element);
// //     numCallbackRuns++;
// //   });

//   //creating text content
// // object.topics.forEach(function(element){
// //     const div = document.createElement('div');
// //     console.log(element);
// //     tab.appendChild(div);
// // })
//   tab.textContent = object.topics;


//   return tab;
// }

// topics.appendChild(createTabs())



// object.topics.forEach(object.topics => {
//     const individualTab = document.createElement('div');
//     individualTab.textContent = object.topics;
//     tab.appendChild(individualTab);
// })


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