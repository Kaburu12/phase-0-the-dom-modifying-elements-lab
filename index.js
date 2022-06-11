// //creating an element in javascript
// const element = document.createElement("div");
// document.body.append(element);//to get an element appear to DOM we append it

// //adding content to the div element
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);




// Write your code here!
const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";
