// Version 3 Ersin Class27

/*
1.OK
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://randomuser.me/api?results=5
- Makes use of async/await syntax
- Display the "name", "email" and "city" of the first person inside an unordered list.
*/
async function fetchJSON(URL) {
  const ul = document.createElement('ul');
  const body = document.body;
  body.appendChild(ul);
  try {
    const response = await fetch(URLl);
    const data = await response.json();
    data.results.forEach((element, index) => {
      const li = document.createElement('li');
      const nameText = document.createElement('p');
      nameText.innerText = `${index + 1}.user's first name : ${element.name.first}`;
      const mailText = document.createElement('p');
      mailText.innerText = `${index + 1}.user's mail : ${element.email}`;
      const cityText = document.createElement('p');
      cityText.innerText = `${index + 1}.user's city : ${element.location.city}`;
      ul.appendChild(li);
      li.appendChild(nameText);
      li.appendChild(mailText);
      li.appendChild(cityText);
    });
  } catch (error) {
    const errorText = document.createElement('p');
    errorText.innerText = `Upsss !!! ${error}`;
    errorText.style.color = "red";
    ul.appendChild(errorText);
  }
}
fetchJSON("https://randomuser.me/api?results=5");
/*
2. OK
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library

-First of all, to use this library we have to use js file of the library or we have to install all file of it by using this command line "npm install chart.js --save"
 we add the script src 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js' to out html file 
at the end of body element.
Then we created canvas with "myChart" id on our html file
Then we defined new Chart variable to display our Bar chart.
Then we can use the datas on our html file As far as i understand from the docs of chartjs.org

*/

/*
3.OK
a) Create a class, called Car, that includes:
- A constructor method
- "model", "color", "seats" properties
- 1 additional method, called "getModel", which returns the model

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less

Object Oriented Programming (OOP) refers to using self-contained pieces of code to develop applications. 
We call these self-contained pieces of code objects.
There are some ways to create a new object in JavaScript
 object literal,
 factory functions,
 constructor functions
 and classes.
last features JavaScript is classes which was introduced in 2015 with the release of ES6.

in this test we defined a class, called Car.
then we created constructor method to add properties of Car class.
When we created the animalCar object instance from a class, 
the class's constructor function is run to create it. 
then we create a getter method to return the model property.
Lastly we instantiate the class, and gave it animalCar and attributes of it.
This process of creating an object instance from a class is called instantiation 
— the object instance is instantiated from the class.
*/
class Car {
  constructor(model, color, seats) {
    this._model = model;
    this.color = color;
    this.seats = seats;
  }

  get model() {
    return this._model;
  }
}
const animalCar = new Car("Hawk", "Black", 4);

/*
4.OK
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/
const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];
function sortStringsAlphabetically(params) {
  console.log(params.map(fruit => fruit).sort());
}
sortStringsAlphabetically(fruits);
/*
5.OK
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
const body = document.body;
const button = document.createElement('button');
body.appendChild(button);
button.innerText = "click me!";
const img = document.createElement('img');
body.appendChild(img);
const url = "https://avatars3.githubusercontent.com/u/20858568?s=200&v=4";
img.setAttribute('src', url);
img.style.display = "none";

function displayImg() {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

button.addEventListener("click", displayImg);
/*
6.OK
Answer the following questions:
- What is an Application Programming Interface (API)?
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less.

-An application programming interface (API) is a computing interface which defines interactions
between multiple software intermediaries. It defines the kinds of calls or requests that can be made,
how to make them, the data formats that should be used, the conventions to follow, etc.
It can also provide extension mechanisms
so that users can extend existing functionality in various ways and to varying degrees
- We have used github api in HackYourRepo project.
We got the responses from 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100'
by using AJAX. Then we displayed the datas to our html file dynamically.

*/
