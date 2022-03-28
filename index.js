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
  let list = []
  function capital(obj){ 
    return obj.charAt(0).toUpperCase() + obj.slice(1);
  }
  for (let obj of tutorials){
    list.push(obj.split(' ').map(capital).join(' '))
    }
  return list
}

/*
const titleCased = (arr) => {
  let list = []
  function capital(obj){ 
    return obj.charAt(0).toUpperCase() + obj.slice(1);
  }
  for (let obj of arr){
    list.push(obj.split(' ').map(capital).join(' '))
    }
  return list
}
titleCased(tutorials);
*/

//titleCased(tutorials);