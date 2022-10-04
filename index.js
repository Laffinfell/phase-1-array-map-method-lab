





const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
  return tutorials.map(str => {
  const words = str.split(" ");
  const capitalizeWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  return capitalizeWords.join(" ")
  })}





// const listOfStrings = strings.map((string) => {
//   return Object.assign({}, string, {
//     function capitalizeFirstLetter(str) {
//       return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//   });
// }





// let sentences = messages.split(/[,,,,]/);
// console.log(sentences);

// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() +
//  str.slice(1);
// }

// const titleCased = () => {
//   return tutorials
// }

// capitalizeFirstLetter(string);


// const elements = tutorials.map((p) => ({
//   ...p,
//   element: `${String}` 
// }));