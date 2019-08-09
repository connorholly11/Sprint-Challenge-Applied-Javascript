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
    response.data.topics.forEach(items => {
        topicsContainer.appendChild(createTabs(items));
    })
})



//then create a component based on the data and put in on the .topics 

const topicsContainer = document.querySelector('.topics')

function createTabs(object){
  //creating elements
  const tab = document.createElement('div');

  //creating structure (nothing to append to?)

  //creating class names
  tab.classList.add('tab');

//creating text content
  tab.textContent = object;


  return tab;
}

