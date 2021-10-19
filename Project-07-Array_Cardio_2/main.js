// We are given 2 arrays. We are learning about different array methods
const people = [
    { name: 'Wes', year: 1980 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

//   1.Array.prototype.some()
// It returns true if atleast one ele in the array passes the test
const find_19= people.some(person=>{
    const current_date= (new Date()).getFullYear();
    return current_date-person.year >=19;
});
const find= people.some(function(person){
    const current_month= new Date().getMonth()+1;
    if((person.year % 10) == (current_month % 10)){
        return true;
    }
});
console.log(find);
console.log(find_19);
// -----------------------------------------------------------------------------------------------------

// 2. Array.prototype.every()
//It return true if all the elements of the array satisfies the given condition
const all_19= people.every(person=>{
    return (new Date().getFullYear()) - person.year >=19;
});
console.log(all_19);
// -----------------------------------------------------------------------------------------------------

// 3. Array.prototype.find()
// Returns if the value is present and it returns the 1st found value
const found_1= comments.find(find=>{
    if(find.id== 523423)
       return true;
});
console.log(found_1);
//4. Array.prototpe.FindIndex()=> Returns the index of the found element
const index= comments.findIndex(comment=>{
    return (comment.text == "Ramen is my fav food ever");
});
console.log(index);
//5. Arrays.prototype.includes()=> To find whether a value exists or not
// const exist = people.includes(name=> name.name == "lux");
// console.log(exist);
// -----------------------------------------------------------------------------------------------------

// 5.Array.splice => Removes or adds the element in the array
const splice= comments.findIndex(comment=>{
    return (comment.text == "Ramen is my fav food ever");
});
console.log(splice);
comments.splice(splice,3);
console.table(comments);

