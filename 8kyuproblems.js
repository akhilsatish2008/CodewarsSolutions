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
