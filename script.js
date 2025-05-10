let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

adjective = "Sparkling";
noun = "Teacup";
verb = "Excited";
place = "Whispering Woods";
adjective2 = "Gigantic";
noun2 = "Moonbeams"


let firstStory;

firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " +noun+ " lived in a " +place+ " and had " +adjective2+ " nostrils that blew fire when it was " +verb+ ".";
console.log("First story: " + firstStory);

// second story

adjective = "Invisible";
noun = "Whisper";
verb = "Startled";
place = "Cobwebbed Attic";
adjective2 = "Tiny";
noun2 = "Forgotten Memories"

let secondStory = "Once upon a time, there was a(n) " +adjective+ " " +noun+ " who loved to eat " +noun2+ ". The " +noun+ " lived in a " +place+ " and had " +adjective2+ " nostrils that blew fire when it was " +verb+ ".";
console.log("Second story: " + secondStory);

// object in javascript
let book = {
    title: `"All Great is him"`,
    author: `Sheina`,
    pages: `2000`,
    isAvailable: false,
};

let message = `The book that I'm reading is ${book.title} and the author of it is ${book.author}. The book has ${book.pages} pages.`;
console.log(`` + message + ` Is the book still available? ${book.isAvailable}.`);

// You can change the value inside the properties of an Object by calling the objectName.propertyName = `newPropertyValue`
const userSettings = { theme: 'dark' };
userSettings.theme = 'light'; 
console.log(userSettings);