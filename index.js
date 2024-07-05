const recipeName = document.body.querySelector('h1');
const recipeText = recipeName.innerText;
console.log(recipeText);
const recipeTag = recipeName.tagName;
console.log(recipeTag);
const descr = document.getElementsByClassName('description');
var fontsize= window.getComputedStyle(document.body.querySelector(".description")).fontSize;
console.log(fontsize);
const altImage = document.body.querySelector('img');
console.log(altImage.getAttribute('alt'));
const width = window.getComputedStyle(altImage).width;
const height = window.getComputedStyle(altImage).height;
const obj = {
    url : altImage.src,
    width : width,
    height : height
};
console.log(obj);
const ingredients = document.body.querySelector('.ingredients-list-paste');
const ingredientsList = ingredients.children.length;
console.log(ingredientsList);
const fourthInList = ingredients.children[3];
console.log(fourthInList);
const instructions = document.body.querySelector('.instructions-list').children;
const instructionsArray = Array.from(instructions);
for (let i = 0; i < instructionsArray.length; i++) {
    const obj2 = {
        order : i+1,
        text : instructionsArray[i].innerText
    }
    instructionsArray[i] = obj2;
};
console.log(instructionsArray);
