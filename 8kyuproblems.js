//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/* Example Outputs:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12


 First step figure out what the problem is asking :
        - The problem here is asking if you get a number such as (3) return a negative (-3) and if the numbers already negative return
          return that

  Second step: Plan a solution
        - Here i know i will first have to check wether the number is positive or negative. Then based on that return either
        the negative version of that number or return the number if already negative.

  Third step: Putting putting the peices of the puzzle together:
        - I know that i ll need a conditional to check the num is positive or neg so i ll use a terenery Operator, then its just inserting the logic
        if num is greater than 0 (if number is negative) then i will make num negative of itself by first making it = 0 by subtracting it by itself and then subtracting
        one more time to make it the negative verion (13 -13) = 0  then - 13 again to get negative 13

*/
function makeNegative(num) {

  return num > 0 ? (num-num)-num: num // terenary operator which checks if number is positive, then makes num negative

}
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


Example Outputs:
348597 => [7,9,5,8,4,3]
0 => [0]


 First step figure out what the problem is asking :
        - The problem here is asking to return an array  a non-negative(positive) number reversed and also using the digits of this number.
        take number 32459 put in array with each individual digit of number being an array item => [9,5,4,2,3]

  Second step: Plan a solution
        - couple steps i have to take to do this 1. Split digits of number given 2. reverse order and put in a new array

  Third step: Putting putting the peices of the puzzle together:
        - first have to convert array to string , using toString() method so i can split the digits, then split the didgits using split(''), then reverse string using reverse()method and finally using the map method to
        to create a new array and make sure all values are in integer form i ll use parseInt() method to convert the string of numbers back to just numbers
*/
function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(index => parseInt(index))//  to string => then splitting digits => reeversing order and finnaly mapping new array
}
/*Given an array of integers, return a new array with each value doubled.
For example:

[1, 2, 3] --> [2, 4, 6]


 First step figure out what the problem is asking :
          This is question is asking to to double the integer values of an array then return a new array
        -
  Second step: Plan a solution
        - I would first need something that multiplies each array item by 2. After i double each value i need to put the doubled values in a new array (return)

  Third step: Putting putting the peices of the puzzle together:
        - theres two ways that i think that i could do it one is to use a foreach loop and then in that loop multiply each array value by two and put that in a new array by creating a new array to put theses values in
        Or i could just use the map prototype method which will do everything i said i would need to do with a for loop but way less code

*/
function maps(x){
return x.map(item=>item*2)  //returns array with x values doubled
}

/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.

For example:

Return true if the array contains the value, false if not.



});

 First step figure out what the problem is asking :
        -This problem is asking to check whether the provided array contains the value of x in it when given an array and X
        so in other words your checking whether or not the array contains the value of x
        -
  Second step: Plan a solution
        here i would need to check  each array item with the given value of x. The simpliest way to do this is to use the includes method


  Third step: Putting putting the peices of the puzzle together:
        - Use includes method to return a boolean

*/
function check(a, x) {

  return a.includes(x)
   }
   /*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.





    First step figure out what the problem is asking :
           -The question is asking to return a single number which will be the avg of grades coming from the given array
           ex. [2,2,2,3,1] add the numbers in array and then divide by the number of array items to get avg and return it as a downward rounded avg

     Second step: Plan a solution
           - so i need to add all the array items together then divide by array length and then make sure its rounded down

     Third step: Putting putting the peices of the puzzle together:
           - I can use the array.reduce method which will do all the adding of each array item which will give me back the sum
           - from there i just need divide the sum of the array by using array.length method which will give me the avg
           - finally i ll return the avg using math.floor method to get teh downward rounded avg of marks
   */
   function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
 let avg =marks.reduce((previousValue, currentValue) => (previousValue + currentValue),0

);
  return Math.floor(avg/marks.length)
}
// a cleaner way to write this would be

function getAverage(marks){
  return Math.floor(marks.reduce((previousValue, currentValue) => previousValue + currentValue) / marks.length); // same logic but all in one line
}
/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

 First step figure out what the problem is asking :
      - here the question is asking me given an array replace all the numbers less than 5 with "0" and any digits 5 and above with "1" and return the new array

  Second step: Plan a solution
      - use a loop to check each digit in the string, if the digit is less than 5 change that value to 0 and if 5 and greater change it to 1
      - then i need to return the new string


  Third step: Putting putting the peices of the puzzle together:
      -lets create a new string first => use a for loop to iterate over each digit of the given string => then use a consitional to check if the number is less than 5 and if it is add 0 to new string we declared
      and if it doesnt satisfy the condition add 1 to new string instead. after it loops through the string outside of our for loop we ll return the newly filled string

*/
function fakeBin(x){
  let newStr = '' // declare new empty string to hold values
  for(let i = 0; i < x.length; i++){ // for loop to iterate over each string  item passed in
    x[i] < 5 ? newStr += 0 : newStr += 1; // condition to check and replace numbers based on logic defined in question
  }
}
/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too*/

function arrayPlusArray(arr1, arr2) {
      let valA=arr1.reduce((prev,curr)=>prev+curr,0)
      let valb=arr2.reduce((prev,curr)=>prev+curr,0)
      
      return Number(valA+valb); 
    }
    /*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

    As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
    
   For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1] 
    
    */

function monkeyCount(n) {
      // your code here
        let arr = [] // create new array to store values 
        for(let i=1 ; i<=n; i++){
          arr.push(i) // add values to the end of array for each index based on n 
           
        }
        return arr // return new populated array 
      }
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/ 
// Sum Numbers
function sum (numbers) {
    
      return numbers.reduce((prev, curr )=> prev +curr,0) // use array.reduce method to return sum of array
         
  }

  /*
  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
  */ 
  function smash (words) {
      let sentance =  words.join(" ")
       return sentance
    };

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
function sumMix(x){
  
      // convert any string values to number values 
     
      
     return x.reduce((prev, curr)=>Number(prev)+Number(curr),0  )
    
    }
/*
Create a function that returns the CSV representation of a two-dimensional numeric array.
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
*/
function toCsvText(array) {
      for( let i = 0;i<array.length;i++){
        array[i]=array[i].join(',')
      }
                      
      return array.join("\n")
    }



/*An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

*/
function pointsPer48(ppg, mpg) {
      if (mpg==0){
        return 0 
      }
      return Math.round(((ppg/mpg)*48)*10) /10 
    
    }
/*
Write a function to split a string and convert it into an array of words.
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */

function stringToArray(string){
      let arr
            // code code code
      for(let i = 0; i< string.length;i++){
         arr = string.split(" ")
      }
        return arr
      }
/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.
Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
      let z = [];                   // create empty array
    for(let i = 1; i<= n ; i++){
      z.push(x*i)                        // LOGIC TO ADD FOR EVERY ITEM OF ARRAY 
    }
      return z;
    }
/*Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. ) */

function firstNonConsecutive (arr) {
 
      let prev = arr[0];
    
      let first;
      for (let i = 1; i < arr.length; i++) {
        
        if ((prev + 1) !== arr[i]) {
         
          first = arr[i];
          break;
        }
        prev ++;
      }
      
      return first !== undefined ? first : null;
    }
/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 */

function removeEveryOther(arr){
      return arr.filter(function(elem, index) {
        return index % 2 === 0;
      });
    }
/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
Example:divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

 */

function divisibleBy(numbers, divisor){
      let newArr = []
      for( let i = 0; i < numbers.length; i++){
        if (numbers[i]% divisor == 0 ){
          newArr.push(numbers[i])
        }
      }
      return newArr
    
    }


/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
 [4,3,9,7,2,1] -> [2,9,3,49,4,1]*/
 function squareOrSquareRoot(array) {
  // get array either use map to map thru the values and spit out new array 
  
 return array.map( x =>{
   let sqrt = Math.sqrt(x)
   return Number.isInteger(sqrt)? sqrt : x*x;
 } )
}
/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. skipped  */

/*Description:
Make a simple function called greet that returns the most-famous "hello world!".*/

// Write a function "greet" that returns "hello world!"
function greet  (){
  return "hello world!"
}
/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated. */




function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
 return birds.filter((elm) => !geese.includes(elm))
  
  // return an array containing all of the strings in the input array except those that match strings in geese
};
/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */
function filter_list(l) {
  // Return a new array with the strings filtered out
 return  l.filter(x=>typeof(x)=== "number" ) // used filter to filter the type of input that x is
}